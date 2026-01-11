//@ts-nocheck
import fs from 'fs';
import path from 'path';


async function setup(){
  console.log('Welcome to your Fullstack Project Template setup.\n');

  //Project name from user's dir name
  const projectName = path.basename(process.cwd());
  console.log(`\nSetting up project: ${projectName}\n`);

  const tokens = {
    '{{PROJECT_NAME}}': projectName.toLowerCase(),
    '{{PROJECT_NAME_UNDERSCORE}}': projectName.toLowerCase().replace(/-/g, '_'),
    '{{PROJECT_NAME_UPPER}}': projectName.toUpperCase().replace(/-/g, '_'),
    '{{PROJECT_NAME_PASCAL}}': projectName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(''),
    // replace existing fs-template instances
    'fs-template': projectName.toLowerCase(),
    'fs_template': projectName.toLowerCase().replace(/-/g, '_')
  };

  console.log('Token Replacements: ');
  Object.entries(tokens).forEach(([token, value]) => {
    console.log(`    ${token} ➡️ ${value}`);
  });
  console.log();

  const filesToProcess = [
    'client/package.json',
    'client/index.html'
  ];
  console.log('Processing files...');

  filesToProcess.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        Object.entries(tokens).forEach(([token, value]) => {
          content = content.replace(new RegExp(token, 'g'), value);
        });

        fs.writeFileSync(file, content);
        console.log(`     Updated: ${file}`);
      } catch (error) {
        console.log(`    Error processing ${file}: ${error.message}`);
      }
    } else {
      console.log(`    File not found: ${file}`);
    }
  });

  if (fs.existsSync('fs-template.code-workspace')) {
    fs.renameSync('fs-template.code-workspace', `${projectName.toLowerCase()}.code-workspace`);
    console.log(`    Created workspace file: ${projectName.toLowerCase()}.code-workspace`);
  }
  if (fs.existsSync('fs-template.sln')) {
    fs.renameSync('fs-template.sln', `${projectName.toLowerCase()}.sln`);
    console.log(`    Created solution file: ${projectName.toLowerCase()}.sln`);
  }

  console.log('Setup complete.');
}

setup().catch(console.error);
