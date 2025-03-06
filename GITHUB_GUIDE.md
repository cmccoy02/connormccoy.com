# GitHub Operations Guide

This guide will walk you through all the necessary GitHub operations for managing your portfolio website.

## Initial Setup

### 1. Make the cleanup script executable and run it

```bash
chmod +x cleanup.sh
./cleanup.sh
```

### 2. Initialize Git in the portfolio directory

```bash
cd portfolio
git init
```

### 3. Add your GitHub repository as a remote

```bash
git remote add origin https://github.com/cmccoy02/connormccoy.com.git
```

## Creating a Branch for the React Version

### 1. Create and switch to a new branch

```bash
git checkout -b react-redesign
```

### 2. Add all files to the staging area

```bash
git add .
```

### 3. Commit your changes

```bash
git commit -m "Complete redesign with React and TypeScript"
```

### 4. Push the branch to GitHub

```bash
git push -u origin react-redesign
```

## Creating a Pull Request

1. Go to your GitHub repository: https://github.com/cmccoy02/connormccoy.com
2. You should see a notification about your recently pushed branch. Click on "Compare & pull request"
3. Add a title and description for your pull request
4. Click "Create pull request"

## Merging the Branch into Main

Once you're satisfied with the changes:

1. Go to the pull request on GitHub
2. Click "Merge pull request"
3. Click "Confirm merge"
4. (Optional) Delete the branch after merging

## Replacing Main Branch Directly (Alternative Approach)

If you prefer to replace the main branch directly without a pull request:

```bash
# Make sure you're on your react-redesign branch
git checkout react-redesign

# Force push to the main branch
git push -f origin react-redesign:main
```

## Deploying to GitHub Pages

### 1. Install the gh-pages package

```bash
npm install --save-dev gh-pages
```

### 2. Add these scripts to your package.json

```json
"scripts": {
  // ... other scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 3. Add homepage to your package.json

```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "homepage": "https://connormccoy.com",
  // ... rest of your package.json
}
```

### 4. Deploy your site

```bash
npm run deploy
```

## Common Git Commands

### Checking Status

```bash
git status
```

### Pulling Latest Changes

```bash
git pull origin main
```

### Viewing Commit History

```bash
git log
```

### Creating a New Branch

```bash
git checkout -b branch-name
```

### Switching Between Branches

```bash
git checkout branch-name
```

### Discarding Changes

```bash
git checkout -- file-name  # Discard changes to a specific file
git reset --hard           # Discard all changes
```

## Development Workflow

### Starting the Development Server

```bash
npm start
```

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm test
``` 