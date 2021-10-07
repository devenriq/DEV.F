const fiesta = (dinero) =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=> {
      dinero >= 100
        ? resolve(console.log("Fiesta!", dinero))
        : reject(new Error("No hay Fiesta"))
    }, 2000)
  });
};

fiesta(120)