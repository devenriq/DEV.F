import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
function consultarPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response =>{
    response.json()
    .then(function(pokemon){
      createPokemon(pokemon)
    })
  })
}

function consultarPokemones(){
  let id = Math.round(Math.random()*150);

  consultarPokemon(id)
}