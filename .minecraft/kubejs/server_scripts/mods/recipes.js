ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!

    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    event.shapeless(
        Item.of('createdieselgenerators:plant_oil_bucket', 1), // arg 1: output
        [
            'createaddition:seed_oil_bucket'
        ]
    )

    event.shapeless(
        Item.of('createaddition:seed_oil_bucket', 1), // arg 1: output
        [
            'createdieselgenerators:plant_oil_bucket'
        ]
    )

    event.shaped(
        Item.of('minecraft:gilded_blackstone', 1), // arg 1: output
        [
            'GGG',
            'GBG',
            'GGG'
        ],
        {
            G: 'minecraft:gold_nugget',
            B: 'minecraft:blackstone'
        }
    )

    event.shaped(
        Item.of('minecraft:glow_ink_sac', 1), // arg 1: output
        [
            'GGG',
            'GIG',
            'GGG'
        ],
        {
            G: 'minecraft:glowstone_dust',
            I: 'minecraft:ink_sac'
        }
    )

})