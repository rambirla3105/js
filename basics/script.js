function savetodb (data){
  return new Promise((resovle, reject) => {
      let intSpeed = Math.floor(Math.random() * 10) +1;

      if(intSpeed > 4){
          resovle("succes: saved");
      } else{
          reject("failed: not saved");
      }
  });
}

let request = savetodb("ram");
request.then(() => {
  console.log("promise completed");
});

request.catch(() =>{
  console.log("promise Rejected");
});
