(function($,jsf,rivets) {
    'use strict';

var hospitalSchema = {
  type: 'object',
  properties: {
    hospital: {
      type: 'object',
      properties: {
        id: {
          $ref: '#/definitions/positiveInt'
        },
        name: {
          type: 'string',
          "chance": {
            "pickone": [
                [
                    "Addis Abeba Black Lion",
                    "Saint Paul",
                    "Menelik Hospital"
                ]
            ]
        }
        },
        location: {
          type: 'object',
          properties:{
            lon:{
              type:"string",
              faker: 'address.latitude'
            },
            lat:{
              type:"string",
              faker: 'address.latitude'
            }
          },
          required:['lon','lat']
        },
        patient_number:{
            type:"string",
            "faker": {
                "random.number": [50, 150]
            }
        },
        doctors:{
            type:"string",
            "faker": {
                "random.number": [2, 30]
            }
        },
        patient_room:{
            type:"string",
            "faker": {
                "random.number": [15]
            }
        }
      },
      required: ['id', 'name', 'location','patient_number','doctors','patient_room']
    }
  },
  required: ['hospital'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true
    }
  }
};

window.hospital = jsf(hospitalSchema);
console.log(hospital);
})(jQuery,window.jsf,window.rivets);
