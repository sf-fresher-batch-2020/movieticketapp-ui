var cityObject = [
    "Chennai|1","Coimbatore|2","Dindigul|3","Erode|4","Kanniyakumari|5",
    "Karur|6","Madurai|7","Salem|8","Trichy|9",
    "Tirunelveli|10","Tirupur|11","Vellore|12","Virudhunagar|13"
];

var theatreObject = {
    '1' : [
        'Mayajal|100','The Forum Vijaya Mall|101','Luxe Cinemas|102'             
    ],
    '2' : [
        'INOX Prozone Mall INOX Theatre|200', 'The Cinema Brookefields |201',' Fun Cinemas|202','Central Theatre|203','Sakthi Theatre|204'              
    ],
    '3' : [
        'Carnival Cinemas|300','J Cinemas|301'            
    ],
    '4' : [
        'Maharaja Cinemas|400','Vsp Cinema Hall|401'
    ],
    '5' : [
        'FOIN XD CINEMA|500','Government Open Air Theathre|501'
    ],
    '6' : [
        'Thinnappa Theatre|600','Ajantha Ellora Cinemas|601'
    ],
    '7' : [
        'Ambika Cinemas|700','Jazz & Arsh|701',' INOX Vishaal De Mall|702','Ganesh Theatre|703'
    ],
    '8' : [
        'Arrs Cinemas|800','Big Cinemas|801'
    ],
    '9' : [
        'L A Cinemas|900','Cauvery Cinema Hall|901'
    ],
    '10': [
        'PVR Cinemas|1000','RAM MUTHURAM CINEMAS|1001','Bombay Theatre|1002','TPV Multiplex|1003'
    ],
    '11': [
        'Usha Multiplex|1100','Cine Park Theatre|1101'
    ],
    '12': [
        'PVR Cinemas|1200','Aascars Cinemas Vellore|1201'
    ],
    '13': [
        'Apsara Cinema Hall |1300','Chitras Cinema Hall|1301'
    ]
};



window.onload = function() {
    console.log(cityObject);
    createOption("city-select", cityObject);			
}
function createOption(elem, array) {            
    var sel = document.getElementById(elem);
    var fragment = document.createDocumentFragment();

    array.forEach(function(array, index) {
        var opt = document.createElement('option');
        var item = array.split("|");
        opt.innerHTML = item[0];
        opt.value = item[1];
        fragment.appendChild(opt);
    });
    sel.appendChild(fragment);
}	
$('#city-select').on('change', function(e) {
    var value = $(this).val();
    console.log(theatreObject[""+value+""]);
    $('#theatre-select').find("option:gt(0)").remove();
    createOption('theatre-select', theatreObject[''+value+'']);
   
});

