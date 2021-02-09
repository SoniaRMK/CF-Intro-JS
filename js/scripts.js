let pokemonRepository = (function () {
    let pokemonList = []; // empty array

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();


pokemonRepository.add(
    { 
        name: 'Pikachu',
        height : 0.7,
        types : ['grass', 'poison']
    }
);

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + ' is ' + pokemon.height + 'm tall.' + "<br><br>");
  });

console.log(pokemonRepository.getAll());
