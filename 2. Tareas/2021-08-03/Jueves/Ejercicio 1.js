// una función que reciba un objeto y un string… El string va a ser el nombre de una propiedad, y  esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes la función debe retornar true o false

var Car = {
  wheels: 4,
  company: 'honda',
  name: 'civic',
  year: 2016
}

function funcion(obj, prop){
  if(obj[prop].hasOwnProperty(prop) === true){
    return true;
  } else {
    return false;
  }
};