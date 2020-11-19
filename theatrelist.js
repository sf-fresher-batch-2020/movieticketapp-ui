var cityObject = [
    "Chennai|1", "Coimbatore|2", "Dindigul|3", "Erode|4", "Kanniyakumari|5",
    "Karur|6", "Madurai|7", "Salem|8", "Trichy|9",
    "Tirunelveli|10", "Tirupur|11", "Vellore|12", "Virudhunagar|13"
];

var theatreObject = {
    '1': [
        'Mayajal|100', 'The Forum Vijaya Mall|101', 'Luxe Cinemas|102'
    ],
    '2': [
        'INOX Prozone Mall INOX Theatre|200', 'The Cinema Brookefields |201', ' Fun Cinemas|202', 'Central Theatre|203', 'Sakthi Theatre|204'
    ],
    '3': [
        'Carnival Cinemas|300', 'J Cinemas|301'
    ],
    '4': [
        'Maharaja Cinemas|400', 'Vsp Cinema Hall|401'
    ],
    '5': [
        'FOIN XD CINEMA|500', 'Government Open Air Theathre|501'
    ],
    '6': [
        'Thinnappa Theatre|600', 'Ajantha Ellora Cinemas|601'
    ],
    '7': [
        'Ambika Cinemas|700', 'Jazz & Arsh|701', ' INOX Vishaal De Mall|702', 'Ganesh Theatre|703'
    ],
    '8': [
        'Arrs Cinemas|800', 'Big Cinemas|801'
    ],
    '9': [
        'L A Cinemas|900', 'Cauvery Cinema Hall|901'
    ],
    '10': [
        'PVR Cinemas|1000', 'RAM MUTHURAM CINEMAS|1001', 'Bombay Theatre|1002', 'TPV Multiplex|1003'
    ],
    '11': [
        'Usha Multiplex|1100', 'Cine Park Theatre|1101'
    ],
    '12': [
        'PVR Cinemas|1200', 'Aascars Cinemas Vellore|1201'
    ],
    '13': [
        'Apsara Cinema Hall |1300', 'Chitras Cinema Hall|1301'
    ]
};

var movieObject = {
    '100': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        },
        {
            'id': '02',
            'name': 'SOORARAI POTRU',
            'imgpath': 'images/bbb.jpg'
        },
        {
            'id': '03',
            'name': 'SOORARAI POTRU',
            'imgpath': 'images/ccc.jpg'
        },
        {
            'id': '04',
            'name': 'SOORARAI POTRU',
            'imgpath': 'images/ddd.jpg'
        },
        {
            'id': '05',
            'name': 'SOORARAI POTRU',
            'imgpath': 'images/eee.jpg'
        }
    ],
    '101': [
        {
            'id': '01',
            'name': 'SOORARAI POTRU',
            'imgpath': 'images/bbb.jpg'
        }
    ],
    '102': [
        {
            'id': '01',
            'name': 'SOORARAI POTRU',
            'imgpath': 'images/bbb.jpg'
        }
    ],
    '200': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '201': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '202': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '203': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '204': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '300': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '301': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '400': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '401': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '500': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '501': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '600': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '601': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '700': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '701': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '702': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '800': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '801': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '900': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '901': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '1000': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '1001': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '1002': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '1003': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '1100': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '1101': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '1200': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '1201': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '1300': [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        }
    ],
    '5000' : [
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        },
        {
            'id': '02',
            'name': 'SOORARAI POTRU',
            'imgpath': 'images/bbb.jpg'
        },
        {
            'id': '03',
            'name': 'DARBAR',
            'imgpath': 'images/fff.jpg'
        },
        {
            'id': '04',
            'name': 'POOVAE UNAKAGA',
            'imgpath': 'images/ddd.jpg'
        },
        {
            'id': '05',
            'name': 'MOOKUTHI AMMAN',
            'imgpath': 'images/eee.jpg'
        },
        {
            'id': '06',
            'name': 'IRANDAM ULAGAM',
            'imgpath': 'images/ggg.jpg'
        },
        {
            'id': '07',
            'name': 'THERI',
            'imgpath': 'images/hhh.jpg'
        },
        {
            'id': '08',
            'name': 'NAAN MAGAAN ALLA',
            'imgpath': 'images/iii.jpg'
        },
        {
            'id': '09',
            'name': 'UNAKUM ENAKUM',
            'imgpath': 'images/ddd.jpg'
        },
        {
            'id': '10',
            'name': 'SINGAM',
            'imgpath': 'images/eee.jpg'
        },
        {
            'id': '01',
            'name': 'IRUTTU',
            'imgpath': 'images/aaa.jpg'
        },
        {
            'id': '02',
            'name': 'SOORARAI POTRU',
            'imgpath': 'images/bbb.jpg'
        },
        {
            'id': '03',
            'name': 'DARBAR',
            'imgpath': 'images/fff.jpg'
        },
        {
            'id': '04',
            'name': 'POOVAE UNAKAGA',
            'imgpath': 'images/ddd.jpg'
        },
        {
            'id': '05',
            'name': 'MOOKUTHI AMMAN',
            'imgpath': 'images/eee.jpg'
        }
    ]
    
};
window.onload = function () {
    // console.log(cityObject);
    createOption("city-select", cityObject);
    popular();
}
function popular() {
    var mainContainer = document.getElementById('popular');
    var data = movieObject[5000];
    mainContainer.setAttribute('class', 'movie-recommendation');
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.setAttribute('class', 'movie-view');
        div.setAttribute('id', data[i].id);
        var img = document.createElement("img");
        var indiv = document.createElement("div");
        var h3 = document.createElement("h3");
        img.setAttribute('src', data[i].imgpath);
        img.setAttribute('height', '200px');
        img.setAttribute('width', '150px');
        indiv.setAttribute('class', 'movie-data');
        h3.innerHTML = data[i].name;
        indiv.appendChild(h3);
        div.appendChild(img);
        div.appendChild(indiv);
        mainContainer.appendChild(div);
    }
}

function createOption(elem, array) {
    var sel = document.getElementById(elem);
    var fragment = document.createDocumentFragment();

    array.forEach(function (array, index) {
        var opt = document.createElement('option');
        var item = array.split("|");
        opt.innerHTML = item[0];
        opt.value = item[1];
        fragment.appendChild(opt);
    });
    sel.appendChild(fragment);
   
}
$('#city-select').on('change', function (e) {
    var value = $(this).val();
    // console.log(theatreObject["" + value + ""]);
    $('#theatre-select').find("option:gt(0)").remove();
    createOption('theatre-select', theatreObject['' + value + '']);
});

$('#theatre-select').on('change', function (e) {
    var value = $(this).val();
    // console.log(movieObject["" + value + ""]);
    var mainContainer = document.getElementById('movie-select');
    mainContainer.setAttribute('class', 'movie-recommendation');
    var data = movieObject['' + value + ''];
    
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("a");
        div.setAttribute('class', 'movie-view');
        div.setAttribute('href','movie.html?id='+data[i].id+'&val='+value);
        div.setAttribute('id', data[i].id);        
        var img = document.createElement("img");
        var indiv = document.createElement("div");
        var h3 = document.createElement("h3");
        img.setAttribute('src', data[i].imgpath);
        img.setAttribute('height', '200px');
        img.setAttribute('width', '150px');
        indiv.setAttribute('class', 'movie-data');
        h3.innerHTML = data[i].name;
        indiv.appendChild(h3);
        div.appendChild(img);
        div.appendChild(indiv);
        mainContainer.appendChild(div);
    }
    
});
