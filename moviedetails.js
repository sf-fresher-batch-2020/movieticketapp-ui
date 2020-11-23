class movieDetails {
    detail = function (id, val) {
        let data = JSON.parse(localStorage.getItem("MOVIES"))[val].filter(obj=>obj.id == id);
        //var data = movieObject['' + val + ''];
        var mainContainer = document.getElementById('movie-details-page');

        for (var i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                var div = document.createElement("div");
                div.setAttribute('class', 'movie-detail');
                var img = document.createElement("img");
                var indiv = document.createElement("div");
                var h2 = document.createElement("h2");
                var story = document.createElement("h4");
                var trailers = document.createElement("a");
                var star = document.createElement("h4");
                var directors = document.createElement("h4");
                var btn = document.createElement("button");
                img.setAttribute('src', data[i].imgpath);
                img.setAttribute('height', '400px');
                img.setAttribute('width', '300px');
                indiv.setAttribute('class', 'detail-data');
                h2.innerHTML = data[i].name;
                story.innerHTML = data[i].storyline;
                trailers.innerHTML = 'Watch trailer';
                trailers.setAttribute('href',data[i].trailer)
                star.innerHTML = 'Stars : '+data[i].stars;
                directors.innerHTML = 'Director: '+data[i].director;
                btn.setAttribute('type', 'submit');
                btn.setAttribute('value', 'Book');
                btn.setAttribute('class', 'book-button');
                btn.setAttribute('onclick','bookpage()');
                btn.innerHTML = 'Book';
                indiv.appendChild(h2);
                indiv.appendChild(story);
                indiv.appendChild(star);
                indiv.appendChild(directors);
                indiv.appendChild(trailers);
                div.appendChild(img);
                div.appendChild(indiv);            
                mainContainer.appendChild(div);                
                mainContainer.appendChild(btn);
                break;
            }
        }
    }
}