// traer datos pokeapi
// JavaSript (metodo fetch)
// fetch("https://pokeapi.co/api/v2/", {
//   method: "GET",
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Network response was not ok.");
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// Forma con JQuery
$.ajax({
  type: "GET", //GET POST PUT PATCH DELETE ETC.
  url: "https://pokeapi.co/api/v2/pokemon/1/", // URL A LA API A CONSUMIR
  success: function (response) {
    let pkmnSeleccionado = response
    // Agregar imagen de bulbasaur de manera dinámica
    $('#idImgPkmn').attr('src', pkmnSeleccionado.sprites.front_default);
    $('#idImgPkmn').attr('alt', pkmnSeleccionado.name);
    // Agregar información básica de bulbasaur
    // 1) Tipo de pkmn
    // 2) Peso
    // 3) Habilidades

    // Primero obtener tipo de pkmn
    // Si yo tengo un elemento html al cual quiero rellenar con info usamos prepend y append
    $('#idTituloPkmn').append(`${pkmnSeleccionado.name.toUpperCase()}`)

    //Aqui nosotros reescribimos el html
    // Agregar tipo pkmn
    // Agregar peso
    $('#idPkmnInfo').html(`
        <p class='lead'>PKMN Type : </p>
        <ul class='lead'>
            <li>${pkmnSeleccionado.types[0].type.name.toUpperCase()}</li>
            <li>${pkmnSeleccionado.types[1].type.name.toUpperCase()}</li>
        </ul>
        <p class='lead'>PKMN Weight : ${pkmnSeleccionado.weight} </p>

        <label>PKMN Cry : </label>
        <audio controls>
            <source src="" type="audio/ogg" id="idAudioPkmn">
        </audio>
    `);

    $('#idAudioPkmn').attr('src', pkmnSeleccionado.cries.legacy);
    
  },
  error: function (error) {
    console.log(error);
  },
});
