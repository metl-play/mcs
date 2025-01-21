ServerEvents.recipes(event => {

    event.remove({id: "create_mechanical_extruder:extruding/stone"})
    event.remove({id: "create_mechanical_extruder:extruding/cobblestone"})

    //cobblestone generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "minecraft:lava",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "minecraft:cobblestone"
        },
        "result": {
            "item": "minecraft:cobblestone"
        }
    });

    //stone generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "minecraft:lava",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "minecraft:stone"
        },
        "result": {
            "item": "minecraft:stone"
        }
    });

    //granite generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "minecraft:lava",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "minecraft:polished_granite"
        },
        "result": {
            "item": "minecraft:granite"
        }
    });

    //diorite generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "minecraft:lava",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "minecraft:polished_diorite"
        },
        "result": {
            "item": "minecraft:diorite"
        }
    });

    //andesite generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "minecraft:lava",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "minecraft:polished_andesite"
        },
        "result": {
            "item": "minecraft:andesite"
        }
    });

    //deepslate generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "minecraft:lava",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "minecraft:polished_deepslate"
        },
        "result": {
            "item": "minecraft:deepslate"
        }
    });

    //calcite generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "minecraft:lava",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "create:polished_cut_calcite"
        },
        "result": {
            "item": "minecraft:calcite"
        }
    });

    //asurine generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "createaddition:seed_oil",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "create:polished_cut_asurine"
        },
        "result": {
            "item": "create:asurine"
        }
    });

    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "createaddition:seed_oil",
                "amount": 1000
            }
        ],
        "catalyst": {
            "item": "rechiseledcreate:asurine_cut_polished_connecting"
        },
        "result": {
            "item": "create:asurine"
        }
    });

    //crimsite generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "create:chocolate",
                "amount": 1000
            },
            {
                "fluid": "minecraft:lava",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "create:polished_cut_crimsite"
        },
        "result": {
            "item": "create:crimsite"
        }
    });

    //ochrum generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "create:chocolate",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "create:polished_cut_ochrum"
        },
        "result": {
            "item": "create:ochrum"
        }
    });

    //veridium generator
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "fluid": "createaddition:seed_oil",
                "amount": 1000
            }
        ],
        "catalyst": {
          "item": "create:polished_cut_veridium"
        },
        "result": {
            "item": "create:veridium"
        }
    });
});