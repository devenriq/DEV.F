const validateStatus = (response) =>{
  if(response.status >= 200){
    return Promise.resolve(response)
  }

  return Promise.reject(new Error("Hubo un error"))
}

const jsonFile = (response) => response.json()

fetch("/url.com/test")
  .then(validateStatus)
  .then(jsonFile)
  .then(data =>{
    console.log("Ya obtuve la información: ", data)
  })
  .catch(error =>{
    console.log("Falló algo en el request", error)
  })