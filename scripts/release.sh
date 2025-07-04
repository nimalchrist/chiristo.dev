#!/bin/bash

set -e

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

# Step 3: Run what-bump with proper flags
NEW_VERSION=$(what-bump --from "$PREV_COMMIT" 2>/dev/null)

if [[ -z "$NEW_VERSION" ]]; then
  echo "❌ Failed to determine next version using what-bump."
  exit 1
fi

echo "📦 New release version: $NEW_VERSION"

# Step 4: Update package.json
echo "🛠️  Updating package.json..."
python3 - <<EOF
import json
with open("package.json") as f:
    data = json.load(f)
data["version"] = "${NEW_VERSION}"
with open("package.json", "w") as f:
    json.dump(data, f, indent=4)
EOF

# Step 5: Commit version bump
git add package.json
git commit -m "chore(release): ${NEW_VERSION}"

# Step 6: Create local branch
BRANCH_NAME="release/${NEW_VERSION}"
git checkout -b "$BRANCH_NAME"

echo "✅ Created local branch '$BRANCH_NAME' with release commit."