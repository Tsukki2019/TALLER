function loadMovies() {

    return new Promise(function(resolve) {

        setTimeout(function() {

            var movieList = [ 
                { id: 1, name: "InceptiOn", genre: "Sci-Fi", watched: false, year: 2010 }, 
                { id: 2, name: "The WhAle", genre: "Drama", watched: true, year: 2022 }, 
                { id: 3, name: "ThE Shinning", genre: "Terror", watched: false, year: 1980 }, 
                { id: 4, name: "AmAdeUs", genre: "Drama", watched: false, year: 1984 }, 
                { id: 5, name: "ThEre WilL Be blooD", genre: "Drama", watched: true, year: 2007 } 
            ];

            resolve(movieList);

        }, 1500);

    });

}

async function startApp() {

    try {

        var list = await loadMovies();

        var updatedMovies = list.map(function(item) {

            var newTitle = item.name.toLowerCase();
            newTitle = newTitle.charAt(0).toUpperCase() + newTitle.slice(1);

            var categoryType = "Modern";
            if (item.year < 2000) {
                categoryType = "Classic";
            }

            return {
                id: item.id,
                title: newTitle,
                genre: item.genre,
                watched: item.watched,
                year: item.year,
                type: categoryType
            };

        });

        var box = document.getElementById("movie-container");

        updatedMovies.forEach(function(film) {

            var cardDiv = document.createElement("div");
            cardDiv.classList.add("movie-card");

            var title = document.createElement("h3");
            title.textContent = film.title;

            var genre = document.createElement("p");
            genre.textContent = "Genre: " + film.genre;

            var year = document.createElement("p");
            year.textContent = "Year: " + film.year;

            var type = document.createElement("p");
            type.textContent = "Type: " + film.type;

            var btn = document.createElement("button");
            btn.textContent = "Mark as watched";

            btn.addEventListener("click", function() {

                film.watched = true;
                cardDiv.style.backgroundColor = "lightblue";
                btn.textContent = "Watched";

            });

            cardDiv.appendChild(title);
            cardDiv.appendChild(genre);
            cardDiv.appendChild(year);
            cardDiv.appendChild(type);
            cardDiv.appendChild(btn);

            box.appendChild(cardDiv);

        });

    } catch (error) {

        console.log("Error:", error);

    }

}

startApp();