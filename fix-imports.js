const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Match: import ComponentName from '@/components/...'
      const regex = /import\s+([A-Z][A-Za-z0-9_]+)\s+from\s+(['"]@\/components\/[^'"]+['"])/g;
      
      if (regex.test(content)) {
        console.log(`Fixing imports in ${fullPath}`);
        content = content.replace(regex, 'import { $1 } from $2');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'app'));
processDir(path.join(__dirname, 'src', 'components'));
