function multiplyAll(arr) {
  var product = 1;
  // Cambia solo el código debajo de esta línea
  for(var i = 0; i < multiplyAll.length; i++){
    for(var j = 0; j < multiplyAll[i].length; j++){
      product *= multiplyAll[i][j];
    }
  }
  // Cambia solo el código encima de esta línea
  return product;
}

multiplyAll[[1,2],[3,4],[5,6,7]];