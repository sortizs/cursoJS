function aleatorio() {
  return Math.random()
}

console.log(aleatorio());
console.log(aleatorio() + Math.E);

function nombre() {
  return "Sebastian";
}

console.log(nombre(), "Ortiz");

function booleano(){
  return (aleatorio() + Math.E > 3.0) ? true : false;
}

console.log(booleano());


function crearPersona(nombre, apellido) {
  return { nombre: nombre, apellido: apellido};
}

console.log(crearPersona("Susana", "Paz"));


function creaFuncion() {
  return function() { console.log("Me crearon!!");}
}

var nuevafn = creaFuncion();
nuevafn();