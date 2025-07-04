#!/bin/bash

# This script automates the process of creating a new release branch,
# updating the package.json version, committing the changes, and tagging the release.
# It relies on 'what-bump' for version calculation based on conventional commits.
# Usage: ./scripts/release.sh

set -e # Exit immediately if a command exits with a non-zero status

echo "🚀 Starting release process..."
echo "---------------------------------"

# --- Step 0: Ensure working tree is clean ---
echo "🔍 Checking working directory status..."
if [[ -n $(git status --porcelain) ]]; then
  echo "❌ Working directory is not clean."
  echo "Please commit or stash your changes before running the release script."
  exit 1
fi
echo "✅ Working directory is clean."

# --- Step 1: Get previous version tag ---
PREV=$(git describe --tags --abbrev=0)

if [[ -z "$PREV" ]]; then
  echo "❌ No previous tag found."
  echo "You must have at least one tag (e.g., v1.0.0) to determine the next version."
  exit 1
fi

echo "📌 Last version tag: $PREV"

# --- Step 2: Ensure what-bump is available ---
echo "Verifying 'what-bump' installation..."
if ! command -v what-bump &>/dev/null; then
  echo "❌ 'what-bump' is not installed or not in your PATH."
  echo "Install it with: cargo install what-bump"
  echo "(and make sure ~/.cargo/bin is in your PATH)"
  exit 1
fi
echo "✅ 'what-bump' is available."

# --- Step 3: Calculate new version ---
echo "Calculating new version based on commits since $PREV..."
BUMP_RESULT=$(what-bump "$PREV") # Capture the raw output from what-bump

# Remove 'v' prefix from PREV for numeric parsing
PREV_VERSION_NUMERIC=$(echo "$PREV" | sed 's/^v//')

# Function to increment patch version
increment_patch() {
    local version="$1"
    # Split major, minor, patch
    IFS='.' read -r major minor patch <<< "$version"
    # Increment patch
    patch=$((patch + 1))
    echo "${major}.${minor}.${patch}"
}

# Check if what-bump returned a valid version number
if [[ "$BUMP_RESULT" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    NEW="$BUMP_RESULT"
    echo "📦 New version identified by what-bump: ${NEW}"
elif [[ "$BUMP_RESULT" == "Patch" ]]; then
    # If what-bump literally returned "Patch", we'll force a patch increment
    NEW=$(increment_patch "$PREV_VERSION_NUMERIC")
    echo "📦 'what-bump' suggested a patch bump. Forcing next patch version: ${NEW}"
else
    # Handle other unexpected outputs or no changes
    echo "❌ Failed to determine a new version from 'what-bump'."
    echo "what-bump output: '${BUMP_RESULT}'"
    echo "This usually means there are no conventional commits (feat:, fix:, chore:, etc.)"
    echo "or no breaking changes since the last tag. Please add some meaningful commits."
    exit 1
fi

# Prepend 'v' if the new version doesn't already start with it, for consistent tagging.
if [[ ! "$NEW" =~ ^v ]]; then
    NEW_TAG="v$NEW"
else
    NEW_TAG="$NEW"
fi

echo "Final New version for tagging: $NEW_TAG"

# --- Step 4: Update package.json ---
echo "🛠️ Updating package.json to version '${NEW}'..."
python3 - <<EOF
import json
import sys

try:
    with open('package.json', 'r') as f:
        data = json.load(f)
except FileNotFoundError:
    print("Error: package.json not found in the current directory.", file=sys.stderr)
    sys.exit(1)
except json.JSONDecodeError:
    print("Error: Invalid JSON in package.json.", file=sys.stderr)
    sys.exit(1)

data['version'] = '${NEW}' # Use NEW here, as package.json usually doesn't have 'v' prefix

with open('package.json', 'w') as f:
    json.dump(data, f, indent=4)
EOF
echo "✅ package.json updated."

# --- Step 5: Create release branch and commit ---
BRANCH="release/${NEW_TAG}"
echo "🌿 Creating release branch '$BRANCH'..."
git checkout -b "$BRANCH"
git add package.json
git commit -m "chore: release version ${NEW_TAG}"

echo "✅ Release branch '$BRANCH' created and version bump committed."

# --- Step 6: Tag the release commit ---
echo "🏷️ Tagging the commit with ${NEW_TAG}..."
git tag -a "${NEW_TAG}" -m "Release version ${NEW_TAG}"

echo "✅ Commit successfully tagged with ${NEW_TAG}."

# --- Step 7: Push the release branch and tag ---
echo "🚀 Pushing release branch '$BRANCH' and tag '${NEW_TAG}' to origin..."
git push origin "$BRANCH"
git push origin "${NEW_TAG}"

echo "---------------------------------"
echo "🎉 Release ${NEW_TAG} successfully prepared!"
echo "You are currently on branch '$BRANCH'."
echo "Consider merging this branch into your main/develop branch when ready."
echo "---------------------------------"