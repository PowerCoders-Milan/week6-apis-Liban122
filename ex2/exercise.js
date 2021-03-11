fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=768424cc9c2294daa296a0d0a70d1035")
  .then(response => response.json())
  .then(data => {
      var body = document.querySelector('body');
      var div1 = document.createElement('div');
      var div2 = document.createElement('div');
      var div3 = document.createElement('div');
      body.appendChild(div1);
      body.appendChild(div2);
      body.appendChild(div3);
      div1.innerHTML = data.weather[0].description
      div2.innerHTML = data.name
      div3.innerHTML = data.main.temp
      console.log(data)
     }
  )
