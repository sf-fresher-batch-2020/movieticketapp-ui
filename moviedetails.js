class ShowMovie {
    movie = function (id, val) {
        var data = movieObject['' + val + ''];
        var mainContainer = document.getElementById('movie-book');

        for (var i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                var div = document.createElement("div");
                div.setAttribute('class', 'movie-view');
                var img = document.createElement("img");
                var indiv = document.createElement("div");
                var h3 = document.createElement("h3");
                var btn = document.createElement("button");
                img.setAttribute('src', data[i].imgpath);
                img.setAttribute('height', '200px');
                img.setAttribute('width', '150px');
                indiv.setAttribute('class', 'movie-data');
                h3.innerHTML = data[i].name;
                btn.setAttribute('type', 'submit');
                btn.setAttribute('value', 'Book');
                btn.setAttribute('class', 'book-button');

                btn.setAttribute('onclick', 'booknow()');
                btn.innerHTML = 'Book';
                indiv.appendChild(h3);
                div.appendChild(img);
                div.appendChild(indiv);
            }
        }
    }
}
