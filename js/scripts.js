let pokemonRepository = (function () {
    let pokemonList = []; // empty array

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let list = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
          });
        button.classList.add('button-class');

        list.append(button);
        list.append(listItem);
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();


pokemonRepository.add(
    { 
        name: 'Pikachu',
        height : 0.7,
        types : ['grass', 'poison']
    }
);

pokemonRepository.add(
    { 
        name: 'Pikaachu',
        height : 0.7,
        types : ['grass', 'poison']
    }
);

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    // document.write(pokemon.name + ' is ' + pokemon.height + 'm tall.' + "<br><br>");
  });

console.log(pokemonRepository.getAll());
