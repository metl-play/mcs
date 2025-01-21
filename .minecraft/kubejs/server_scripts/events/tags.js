//item tags
ServerEvents.tags('block', event => {
    event.add('forge:bricks', /createdeco.*brick/) // Adds tag 'forge:bricks' to all items from createdeco that have brick in their id
    event.add('forge:bricks', /create.*brick/) // Adds tag 'forge:bricks' to all items from Create that have brick in their id
    event.add('forge:bricks', /create.*cut/) // Adds tag 'forge:bricks' to all items from Create that have cut in their id
    event.add('forge:bricks', /create.*layered/) // Adds tag 'forge:bricks' to all items from Create that have layered in their id
    event.add('forge:bricks', /create.*pillar/) // Adds tag 'forge:bricks' to all items from Create that have pillar in their id
    event.add('forge:bricks', /minecraft.*brick/) // Adds tag 'forge:bricks' to all items from minecraft that have brick in their id
    event.add('forge:terracotta', /minecraft.*terracotta/) // Adds tag 'forge:terracotta' to all items from minecraft that have terracotta in their id
    event.add('forge:concrete_powders', /minecraft.*concrete_powder/) // Adds tag 'forge:concrete powders' to all items from minecraft that have concrete_powders in their id
    event.add('minecraft:slabs', / *slab/) // Adds tag 'minecraft:slabs' to all items from the modpack that have slabs in their id
    event.add('minecraft:stairs', / *stair/) // Adds tag 'minecraft:slabs' to all items from the modpack that have slabs in their id
})

ServerEvents.tags('item', event => {
    event.add('forge:seed_oil', /createdieselgenerators.*plant_oil/) // Adds tag 'forge:seed_oil' to all items from createdieselgenerators that have plant_oil in their id)
    event.add('forge:seed_oil', /createaddition.*seed_oil/) // Adds tag 'forge:seed_oil' to all items from createaddition that have seed_oil in their id)
})