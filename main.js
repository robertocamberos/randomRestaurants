    fetch(`https://my-burger-api.herokuapp.com/burgers`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      randomNum = Math.floor(Math.random() * data.length)
      document.querySelector('.first').innerText = data[randomNum].name
      document.querySelector('.second').innerText = data[randomNum].restauarant
      document.querySelector('.third').innerText = data[randomNum].web
      document.querySelector('.fourth').innerText = data[randomNum].description
      document.querySelector('.fifth').innerText = 'Ingredients List:' + ' ' + data[randomNum].ingredients
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
