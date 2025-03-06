#!/bin/bash

# Navigate to the parent directory
cd ..

# Remove old HTML files and directories
echo "Removing old HTML files and directories..."
rm -f index.html
rm -rf pages
rm -rf css
rm -rf js

# Keep the assets directory but move it to the React project
echo "Moving assets to React project..."
if [ -d "assets" ]; then
  cp -r assets/* portfolio/public/assets/
fi

# Create a .gitignore file
echo "Creating .gitignore file..."
cat > portfolio/.gitignore << EOL
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOL

echo "Cleanup complete!" 