import { parseString, Parser } from 'xml2js';

const xml1 = '<root>Hello xml2js!</root>';
parseString(xml1, (_, result) => {
  console.dir(result);
});

parseString(xml1, { trim: true }, (_, result) => {
});

const xml2 = '<foo></foo>';

// With parser
const parser = new Parser(/* options */);
parser
  .parseStringPromise(xml2)
  .then((result) => {
    console.dir(result);
    console.log('Done');
  })
  .catch((err) => {
    // Failed
  });
