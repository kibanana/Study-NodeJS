const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true });

const schema = {
  properties: {
    name: { type: 'string' },
    options: {
      type: 'object',
      properties: {
        editOnlist: { type: 'boolean' },
        listType: { type: 'string' },
      },
    },
    useTabs: { type: 'boolean' },
    fields: {
      type: 'object',
    },
  },
};
const validate = ajv.compile(schema);

const data = {
  name: 56,
};

const valid = validate(data);
if (valid) console.log('Valid!');
else console.log(`Invalid: ${ajv.errorsText(validate.errors)}`);
