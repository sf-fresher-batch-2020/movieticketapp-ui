var cityObject = [
    "Chennai|1","Coimbatore|2","Dindigul|3","Erode|4","Kanniyakumari|5",
    "Karur|6","Madurai|7","Salem|8","Trichy|9",
    "Tirunelveli|10","Tirupur|11","Vellore|12","Virudhunagar|13"
];

var theatreObject = {
    '1' : [
        'Mayajal|100','Bapulapadu|101','Vishakhapatnam|102'             
    ],
    '2' : [
        'Karpagam Cinemas|200', 'Shanthi-Saradha|201','Murugan|202','Central Theatre|203','Sakthi Theatre|204'              
    ],
    '3' : [
        'Duliyajan|300','Jorhat|301'            
    ],
    '4' : [
        ' Patna|400','Gaya|401'
    ],
    '5' : [
        'Raipur|500'
    ],
    '6' : [
        'Panaji|600'
    ],
    '7' : [
        'Ambika Cinemas|700','Jazz & Arsh|701','Priya Cinemas|702','Ganesh Theatre|703'
    ],
    '8' : [
        'Gurgaon|800'
    ],
    '9' : [
        'Kullu|900'
    ],
    '10': [
        'Ranchi|1000'
    ],
    '11': [
        'Bangalore|1100'
    ],
    '12': [
        'Kochi|1200'
    ],
    '13': [
        'Bhopal |1300'
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

