JEIEvents.information(event => {
    //Nothing yet
})

JEIEvents.hideItems(event => {

    //Hide all Facades
    event.getAllIngredients().forEach(e => {
        let item = Item.of(e);
        if (item.getId() !== 'ae2:facade') return;

        event.hide(item);
    });
    
    event.hide("ars_elemental:debug")
    event.hide("ars_nouveau:debug")

    event.hide("sophisticatedstorage:debug_tool")
});