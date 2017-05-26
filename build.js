const yaml = require('yamljs');
const mustache = require('mustache');
const readFile = require('fs').readFileSync;
const writeFile = require('fs').writeFileSync;

const build = () => {
  // Read the value and template files.
  const values = readFile('./src/values.yml', 'utf-8');
  const template = readFile('./src/template.yml', 'utf-8');

  // Parse the files and add the values to the template.
  const templateData = yaml.parse(values);
  const rawTemplate = yaml.parse(mustache.render(template, templateData));

  // Write the resulting data to a JSON file.
  const themeFile = `./themes/supernova.json`;
  writeFile(themeFile, JSON.stringify(rawTemplate, null, 2), 'utf-8');
}

build();