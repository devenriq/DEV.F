const pokePanel = document.querySelector(".choose-panel__buttons");
const previous = document.querySelector("#previous")
const next = document.querySelector("#next")

let offset = 1;
let limit = 19;

previous.addEventListener("click", ()=>{
  if(offset !=1){
    offset -= 19;
    removeChildNodes(pokePanel);
    fetchPokemons(offset, limit);
  }
})

next.addEventListener("click", ()=>{
    offset += 19;
    removeChildNodes(pokePanel);
    fetchPokemons(offset, limit)
})

function fetchPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      createPokemon(data)
    })
}

function fetchPokemons(offset, limit){
  for(let i=offset; i<= offset + limit; i++){
    fetchPokemon(i)
  }
}

function createPokemon(pokemon){
  const card = document.createElement("div");
  card.classList.add("pokemon-thumbnail")

  const loadContainer = document.createElement("div")
  loadContainer.classList.add('img-container')

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default

  loadContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`

  const name = document.createElement('p')
  name.classList.add('name')
  name.textContent = pokemon.name;

  // card.appendChild(name)
  card.appendChild(loadContainer);
  card.appendChild(number);
  

  pokePanel.appendChild(card);
}

function removeChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild)
  }
}

fetchPokemons(offset, limit)