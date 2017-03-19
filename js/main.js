(function($, jsf, rivets) {
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
                        properties: {
                            lon: {
                                type: "string",
                                faker: 'address.latitude'
                            },
                            lat: {
                                type: "string",
                                faker: 'address.latitude'
                            }
                        },
                        required: ['lon', 'lat']
                    },
                    patient_number: {
                        type: "string",
                        "faker": {
                            "random.number": [50, 150]
                        }
                    },
                    patient_er: {
                        type: "string",
                        "faker": {
                            "random.number": [1, 150]
                        }
                    },
                    doctors: {
                        type: "string",
                        "faker": {
                            "random.number": [2, 30]
                        }
                    },
                    patient_room: {
                        type: "string",
                        "faker": {
                            "random.number": [15]
                        }
                    }
                },
                required: ['id', 'name', 'location', 'patient_number', 'doctors', 'patient_room', 'patient_er']
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
    var patientSchema = {
        "type": "object",
        "properties": {
            "patient": {
                "type": "object",
                "properties": {
                    "id": {
                        "$ref": "#/definitions/positiveInt"
                    },
                    "first_name": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "last_name": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                    "age": {
                        "$ref": "#/definitions/age"
                    },
                    "weight": {
                        "$ref": "#/definitions/weight"
                    },
                    "gender": {
                        "type": 'string',
                        "chance": {
                            "pickone": [
                                [
                                    "male",
                                    "female"
                                ]
                            ]
                        }
                    },
                    "Blood_Type": {
                        "type": 'string',
                        "chance": {
                            "pickone": [
                                [
                                    "A",
                                    "B",
                                    "AB",
                                    "O"
                                ]
                            ]
                        }
                    },
                    "email": {
                        "type": "string",
                        "format": "email",
                        "faker": "internet.email"
                    }
                },
                "required": ["id", "first_name", "last_name", "age", "gender", "weight", "Blood_Type", "email"]
            }
        },
        "required": ["patient"],
        "definitions": {
            "positiveInt": {
                "type": "integer",
                "minimum": 0,
                "exclusiveMinimum": true
            },
            "weight": {
                "type": "integer",
                "minimum": 1,
                "maximum": 150,
                "exclusiveMinimum": true
            },
            "age": {
                "type": "integer",
                "minimum": 0,
                "maximum": 99,
                "exclusiveMinimum": true
            }

        }
    }
    window.hospital = jsf(hospitalSchema);
    window.patient = jsf(patientSchema);
    console.log(patient);
})(jQuery, window.jsf, window.rivets);