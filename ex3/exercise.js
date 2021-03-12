fetch('http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7')
    .then(response => response.json())
    .then(data => {
        console.log(data)


        data.Search.forEach((el) => {

            var body = document.querySelector("body");
            var container = document.createElement('div');
            var hr = document.createElement('hr')
            var main = document.createElement("div");
            var title = document.createElement("p");
            var year = document.createElement("p");
            var image = document.createElement("img");
            hr.style.height = '5px';
            hr.style.backgroundColor = 'red';
            title.innerHTML = el.Title;
            year.innerHTML = el.Year;
            image.setAttribute("src", el.Poster);
            body.appendChild(container);
            body.appendChild(hr);
            container.appendChild(main);
            main.appendChild(title);
            main.appendChild(year);
            main.appendChild(image)
        })
    })

