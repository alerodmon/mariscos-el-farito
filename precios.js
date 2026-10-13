// ÚNICA FUENTE DE DATOS del menú de Mariscos El Farito.
// Reglas:
//  - Los precios van como número entero en colones, sin puntos ni símbolo.
//    Ej.: 11500 se muestra como ₡11.500
//  - Cada vez que cambie un precio, actualizá ACTUALIZADO con la fecha del día
//    (formato: "13 de octubre de 2026") y el archivo menu-el-farito.csv para que coincida.

const ACTUALIZADO = "13 de octubre de 2026";

const MENU = [
  {
    id: "filets",
    titulo: "Filets",
    etiqueta: "Por kilo",
    items: [
      ["Corvina", 11500],
      ["Dorado", 6500],
      ["Marlin blanco", 11500],
      ["Marlin rojo", 6000],
      ["Tilapia", 4000],
      ["Curvineta", 4000],
      ["Atún", 7500],
      ["Congrio", 10500],
      ["Salmón", 11500],
    ],
  },
  {
    id: "entero",
    titulo: "Pescado entero",
    etiqueta: "",
    items: [
      ["Pargo", 8000],
      ["Corvina", 7000],
    ],
  },
  {
    id: "camarones",
    titulo: "Camarones",
    etiqueta: "Pelado y desvenado",
    items: [
      ["26–30 Grande", 10000],
      ["41–50 Mediano", 7500],
      ["71–90 Pequeño", 6500],
      ["Jumbo", 22500],
    ],
  },
  {
    id: "mariscos",
    titulo: "Mariscos",
    etiqueta: "",
    items: [
      ["Mariscada", 5500],
      ["Calamar tentáculo", 6000],
      ["Pulpo", 13000],
      ["Mejillones", 2000],
      ["Almejas", 4500],
      ["Jaibas", 4500],
      ["Cabezas", 1500],
      ["Picadura bolillo", 5500],
      ["Picadura dorado", 7500],
      ["Aros de calamar", 6000],
      ["Pianguas", 9000],
      ["Langosta", 19500],
    ],
  },
];
