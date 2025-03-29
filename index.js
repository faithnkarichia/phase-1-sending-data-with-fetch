function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then(function (response){
      return response.json()})  
    .then(function (data) {
      let body = document.body;
     body.innerHTML=data.id
    })
    .catch(function (error)  {
      let body = document.body;
      
     
      body.innerHTML = error.message; 
     
    });
}


submitData("steve", "steve@steve.com");
