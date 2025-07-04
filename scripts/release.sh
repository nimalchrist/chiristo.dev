#!/bin/bash

set -e

# Step 0: Ensure clean working directory
if [[ -n $(git status --porcelain) ]]; then
  echo "❌ Working directory not clean. Please commit or stash your changes before releasing."
  exit 1
fi

# Step 1: Find last release commit (based on commit message)
PREV_COMMIT=$(git log --grep='^chore(release):' --pretty=format:'%H' | head -n 1)

if [[ -z "$PREV_COMMIT" ]]; then
  echo "❌ No previous release commit found."
  exit 1
fi

echo "📌 Last release commit: $PREV_COMMIT"

# Step 2: Ensure what-bump is installed (via cargo)
if ! command -v what-bump &>/dev/null; then
  echo "🔧 'what-bump' not found. Installing with cargo..."

  if ! command -v cargo &>/dev/null; then
    echo "❌ 'cargo' is not installed. Please install Rust & Cargo: https://www.rust-lang.org/tools/install"
    exit 1
  fi

  cargo install what-bump
  export PATH="$HOME/.cargo/bin:$PATH"
fi

# Step 3: Check if there are commits after the last release
AFTER_RELEASE=$(git log "$PREV_COMMIT"..HEAD --oneline)

if [[ -z "$AFTER_RELEASE" ]]; then
  echo "❌ No new commits after the last release. Nothing to bump."
  exit 1
fi

# Step 4: Run what-bump to get new version
echo "🔍 Running what-bump..."
NEW_VERSION=$(what-bump HEAD --from "$PREV_COMMIT")

if [[ -z "$NEW_VERSION" ]]; then
  echo "❌ Failed to determine next version using what-bump."
  exit 1
fi

echo "📦 New release version: $NEW_VERSION"

# Step 5: Update package.json
echo "🛠️  Updating package.json..."
python3 - <<EOF
import json
with open("package.json") as f:
    data = json.load(f)
data["version"] = "${NEW_VERSION}"
with open("package.json", "w") as f:
    json.dump(data, f, indent=4)
EOF

# Step 6: Commit version bump
git add package.json
git commit -m "chore(release): ${NEW_VERSION}"

# Step 7: Create local branch
BRANCH_NAME="release/${NEW_VERSION}"
git checkout -b "$BRANCH_NAME"

echo "✅ Created local branch '$BRANCH_NAME' with release commit."