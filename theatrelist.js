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
            'name': 'SOORARAI POTRU|100,000,001',
            'imgpath': 'images/bbb.jpg'
        },
        {
            'id': '03',
            'name': 'SOORARAI POTRU|100,000,001',
            'imgpath': 'images/ccc.jpg'
        },
        {
            'id': '04',
            'name': 'SOORARAI POTRU|100,000,001',
            'imgpath': 'images/ddd.jpg'
        },
        {
            'id': '05',
            'name': 'SOORARAI POTRU|100,000,001',
            'imgpath': 'images/eee.jpg'
        }
    ],
    '101': [
        {
            'name': 'SOORARAI POTRU|100,000,001',
            'imgpath': 'images/bbb.jpg'
        }
    ],
    '102': [
        'AVENGERS-END GAME|100,000,002',
        'MIRROR|100,200,002',
    ],
    '200': [
        'DRIVE|200,000,000',
        'CHICHORE|200,000,001',
        'NAMMA VEETU PILLAI|200,000,002'
    ],
    '201': [
        'ICICI Bank Ltd. - Naharlagun|200,000,001',
    ],
    '202': [
        'ICICI Bank Ltd. - Bomdila|200,000,002',
    ],
    '300': [
        'ICICI Bank Ltd. - Duliyajan|300,000,000',
    ],
    '301': [
        'ICICI Bank Ltd. - Jorhat|300,000,001',
        'ICICI Bank Ltd. - Jorhat - Marwari Patty|300,100,003'
    ],
    '400': [
        'ICICI Bank Ltd. - Patna|400,000,000',
    ],
    '401': [
        'ICICI Bank Ltd. - Gaya|400,000,001',
    ],
    '500': [
        'ICICI Bank Ltd. - Raipur - Civil Lines|500,000,000',
    ],
    '600': [
        'ICICI Bank Ltd. - Panaji|600,000,000'
    ],
    '700': [
        'ICICI Bank Ltd. - Ahmedabad - JMC House|700,000,000'
    ],
    '800': [
        'ICICI Bank Ltd. - Gurgaon - Cyber Greens|800,000,000'
    ],
    '900': [
        'ICICI Bank Ltd. - Kullu|900,000,000'
    ],
    '1000': [
        'ICICI Bank Ltd. - Ranchi|1000,000,000'
    ],
    '1100': [
        'ICICI Bank Ltd. - Bangalore - M G Road|1100,000,000'
    ],
    '1200': [
        'ICICI Bank Ltd. - Kochi - Kadavantara|1200,000,000'
    ],
    '1300': [
        'ICICI Bank Ltd. - Bhopal - M P Nagar - Zone II|1300,000,000'
    ]
};
window.onload = function () {
    // console.log(cityObject);
    createOption("city-select", cityObject);
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
