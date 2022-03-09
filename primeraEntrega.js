

const buscador = [
    { genero: ["Isekai", "Accion"], nombre: "Tate no Yuusha no Nariagari"},
    { genero: ["Romance", "Drama"], nombre: "Kaguya-sama" },
    { genero: ["Comedia", "Romance", "Accion"], nombre: "Konosuba"}, 
  ];
  
  
  //FUNCIONES DE ORDEN SUPERIOR
  let filtro = (nombreGenero) => {  
    let serie = buscador.filter(serie => serie.nombre === nombreGenero);
    console.log(serie);
  };
   let filtro2 = filtro(prompt());