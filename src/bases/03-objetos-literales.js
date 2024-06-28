

const persona = {
    nombre: "sebas",
    apodo: "el pepe",
    direccion: {
        ciudad: "bogota",
        departamento: "cundinamarca",
        zip: 1591532
    }
}

// APUNTA A LA MISMA REFERENCIA DE MEMORIA
// const persona2 = persona;

// CON SPREAD, PIERDE LA REFERENCIA DE MEMORIA
const persona2 = {...persona};
persona2.nombre = "nuevo nombre"
persona2.apodo = "nuevo apodo"

console.table(persona);
console.table(persona2);

