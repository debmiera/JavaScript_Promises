console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function watchTurorialCallback(callback, errorCallback) {
    let userLeft = false;
  
    if (userLeft) {
      errorCallback("User left.");
    } else {
      callback("Thumbs up and Subscribe!");
    }
  }
  
  watchTurorialCallback(
    (message) => {
      console.log(message);
    },
    (error) => {
      console.log(error.name + " " + error.message);
    }
  );

  let promise = new Promise((resolve, reject) => {
      let userLeft = Boolean(Math.round(Math.random()))
      if (userLeft) {
          reject("User left.")
      } else {
          resolve("Thumbs up and Subscribe!")
      }
  })
  
  console.log(promise)

promise
    .then((result) => {
    console.log(result)
})
    .catch((err) => {
        console.error(err)
    })