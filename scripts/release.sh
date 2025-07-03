#!/bin/bash

set -e

# Ensure you're on the main branch and it's up to date
git checkout main
git pull origin main

# Run standard release commit and versioning
npx standard-version

# Extract new version from package.json
NEW_VERSION=$(node -p "require('./package.json').version")

# Create the release branch with proper naming
RELEASE_BRANCH="release/${NEW_VERSION}"
git checkout -b "$RELEASE_BRANCH"

# Commit version bump if not already committed by standard-version
git add package.json package-lock.json CHANGELOG.md
git commit -m "chore(release): v${NEW_VERSION}" || echo "No changes to commit"

# Push the release branch
git push origin "$RELEASE_BRANCH"

echo "✅ Release branch '$RELEASE_BRANCH' created and pushed."
echo "📌 Now open a PR from '$RELEASE_BRANCH' to 'main' via GitHub UI."
