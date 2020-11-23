class ShowMovie {
    movie = function (id, val) {
        //var data = movieObject['' + val + ''];
        let data = JSON.parse(localStorage.getItem("MOVIES"))[val].filter(obj=>obj.id ==id);
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
                btn.setAttribute('onclick', 'booknow(" '+id+'","'+val+'","'+data[i].imgpath+'","'+data[i].name+'" )');
                btn.innerHTML = 'Book';
                indiv.appendChild(h3);
                div.appendChild(img);
                div.appendChild(indiv);
                var h4 = document.createElement('h4');
                h4.innerHTML = "Select seats";

                mainContainer.appendChild(div); 
                var seatcontainer = document.createElement("div");
                seatcontainer.setAttribute('class','seat-container');

                let seatNo = 1;
                for (var z = 0; z < 4; z++) {
                    var seats = document.createElement("div");
                    seats.setAttribute('class', 'seats');
                       for (var x = 0; x < 6; x++) {
                        for (var y = 0; y < 6; y++) {
                            // if(y == 5){
                            //     var p = document.createElement("p");
                            //     p.innerHTML = ' ';
                            //     seats.appendChild(p);
                            // }
                            //let seatNo = `${z}${x}${y}`;
                            var ip = document.createElement("input");
                            ip.setAttribute('type', 'checkbox');
                            ip.setAttribute('name',"seats")
                            ip.setAttribute('value',seatNo)
                            ip.setAttribute('id', z+''+x + '' + y);
                            seats.appendChild(ip);
                            seatNo++;
                        }
                        var br = document.createElement("br");
                        seats.appendChild(br);
                    }

                    seatcontainer.appendChild(seats);
                }
                seatcontainer.appendChild(h4);
                mainContainer.appendChild(seatcontainer);
                mainContainer.appendChild(btn);
                break;
            }
        }
    }
}