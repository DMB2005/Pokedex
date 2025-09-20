const getValInput = () => {
  let inputtxt = document.getElementById("input_pkm");
  let value = inputtxt.value.trim().toLowerCase();
  if (value) {
    PeticionApi(value);
  }
};

const PeticionApi = (Pkm) => {
  const BaseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const url = `${BaseUrl}${Pkm}`;

  axios.get(url)
    .then(res => {
      printInfo(res.data);
    })
    .catch(err => {
      console.log(err);
      document.getElementById("show_info").innerHTML = "<p style='color:red'>Pokémon no encontrado</p>";
    });
};

const printInfo = (data) => {
  let respuesta = document.getElementById("show_info");

  respuesta.innerHTML = `
    <p><strong>#${data.id}</strong> - ${data.name.toUpperCase()}</p>
    
    <div style="display:flex; gap:30px; align-items:center;">
      <div style="text-align:center;">
        <p><strong>Normal</strong></p>
        <img src="${data.sprites.front_default}" alt="${data.name} normal">
      </div>
      <div style="text-align:center;">
        <p><strong>Shiny</strong></p>
        <img src="${data.sprites.front_shiny}" alt="${data.name} shiny">
      </div>
    </div>

    <p><strong>Tipos:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
  `;
};
