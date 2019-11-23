/* Escritura dinámica */
/* Tipos de datos primitivos */
var num = 10; // Number
var str = "text"; // String
var bol = true; // Boolean
var und = undefined; // Undefined
var nul = null; // Null

/* Objetos */
var obj = {
  numero: new Number(31),
  nombre: new String("Sebastian"),
  objHijo: {
    numero: 32,
    nombre: "Jhonathan"
  }
};

/* Por valor y por referencia */
// Por valor
var a = 10;
var b = a;
console.log("a:", a);
console.log("b:", b);
a = 20;
console.log("a:", a);
console.log("b:", b);
// Por referencia
var c = { nombre: "Juana" };
var d = c;
console.log("c:", c);
console.log("d:", d);
c.nombre = "Maria";
console.log("c:", c);
console.log("d:", d);
d.nombre = "Pedro";
console.log("c:", c);
console.log("d:", d);