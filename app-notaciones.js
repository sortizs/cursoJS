/* Notación de punto y corchetes */
var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Colombia",
        ciudad: "Medellin",
        calle: "Calle 9 sur",
        carrera: "79c",
        numero: 199
    }
}

persona.direccion.zipcode = 50023;

var direccion = persona.direccion;
direccion.departamento = "Antioquia";

var campo = "edad";

console.log(persona[campo]);