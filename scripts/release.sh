#!/bin/bash

set -e

# Step 1: Get the last release commit (chore(release): M.m.p)
PREV_COMMIT=$(git log --grep='^chore(release):' --pretty=format:'%H' | head -n 1)

if [[ -z "$PREV_COMMIT" ]]; then
  echo "❌ No previous release commit found."
  exit 1
fi

echo "📌 Last release commit: $PREV_COMMIT"

if [[ -z $(command -v what-bump) ]]; then
    echo "what-bump is not installed"
    echo "Install it with: cargo install what-bump"
    echo "Make sure to add ~/.cargo/bin to your \$PATH"
    exit 1
fi

# Step 2: Use what-bump to calculate the next version
NEW_VERSION=$(what-bump "$PREV_COMMIT" --from "$PREV_COMMIT" 2> /dev/null)

if [[ -z "$NEW_VERSION" ]]; then
  echo "❌ Failed to calculate new version with what-bump."
  exit 1
fi

echo "📦 New release version: $NEW_VERSION"

# Step 3: Update package.json with the new version
echo "🛠️  Updating package.json..."
python3 - <<EOF
import json
with open('package.json', 'r') as fd:
    pj = json.loads(fd.read())
pj['version'] = '${NEW_VERSION}'
with open('package.json', 'w') as fd:
    fd.write(json.dumps(pj, indent=4))
EOF

# Step 4: Commit the version bump
git add package.json
git commit -m "chore(release): ${NEW_VERSION}"

# Step 5: Create local branch from HEAD
BRANCH_NAME="release/${NEW_VERSION}"
git checkout -b "$BRANCH_NAME"

echo "✅ Done: created local branch '$BRANCH_NAME' with release commit."
