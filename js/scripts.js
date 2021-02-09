let pokemonList = [
    {
        "name" : "Bulbasaur",
        "height" : 0.7,
        "types" : ['grass', 'poison']
    },
    {
        "name" : "Ivysaur",
        "height" : 1.7,
        "types" : ['grass', 'poison']
    },
    {
        "name" : "Charizard",
        "height" : 0.2,
        "types" : ['fire', 'flying']
    }
];

for (let i = 0; i < pokemonList.length; i++) {
    pokemonList[i].height > 1 
    ? 
    document.write(pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + ') - Wow, that’s big!' + "<br><br>") 
    : 
    document.write(pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + ')' + "<br><br>");
    console.log(pokemonList[i]);

}