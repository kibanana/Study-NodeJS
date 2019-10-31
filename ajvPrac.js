let Ajv = require('ajv');
let ajv = new Ajv({allErrors: true});

let schema = {
    "properties": {
        "name": {"type": "string"},
        "options": { 
            "type": "object",
            "properties": {
                "editOnlist": {"type": "boolean"},
                "listType": {"type": "string"}
            }
        },
        "useTabs": { "type": "boolean" },
        "fields": {
            "type": "object"
        }
    }
};
let validate = ajv.compile(schema);

let data = {
	"name": 56
};

let valid = validate(data);
if (valid) console.log('Valid!');
else console.log('Invalid: ' + ajv.errorsText(validate.errors));