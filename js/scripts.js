let pokemonRepository = (function () {
    let pokemonList = []; // empty array
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function loadList() {
        return fetch(apiUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            json.results.forEach(function (item) {
              let pokemon = {
                name: item.name,
                detailsUrl: item.url
              };
              add(pokemon);
            });
          })
          .catch(function (e) {
            //result if there is an error
            console.error(e);
          });
      }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (details) {
            //add the details to the item
            item.imageUrl = details.sprites.other.dream_world.front_default;
            item.height = details.height;
            item.types = [];
            details.types.forEach(function (itemType) {
              item.types.push(itemType.type.name);
            });
            item.abilities = [];
            details.abilities.forEach(function (itemAbilities) {
              item.abilities.push(itemAbilities.ability.name);
            });
          })
          .catch(function (e) {
            console.error(e);
          });
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
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
      pokemonRepository.loadDetails(pokemon);
    });
  });
