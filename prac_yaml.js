// import YAML from 'yamljs';
import JSYAML from 'js-yaml';
import fs from 'fs';
import path from 'path';

// let native;
// YAML.load(path.join(__dirname, 'pracYaml.yml'), (res) => {
//   native = res;
// });
// const parsedObject = YAML.parse(native);
// const yamlString = YAML.stringify(parsedObject, 4);

// fs.readFileSync 가 아닌, fs.readFile 사용 시 undefined 반환
const pracNative = JSYAML.safeLoadAll(fs.readFileSync(path.join(__dirname, 'pracYaml.yml'), 'utf8', (err, data) => data));

console.log(pracNative);

console.log(JSON.stringify(pracNative, null, 4));

const dumppedObject = JSYAML.safeDump(pracNative, {
  styles: {
    '!!omap': 'canonical',
  },
  sortKeys: true,
});

fs.writeFileSync(path.join(__dirname, 'yamlResult.yml'), dumppedObject);
