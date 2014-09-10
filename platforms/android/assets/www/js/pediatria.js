function medicineList() {
$(document).ready(function() {
    $('#hola').click(function(evento) {
        //alert("Has pulsado el enlace, pero vamos a cancelar el evento...nPor tanto, no vamos a llevarte a DesarrolloWeb.com");
        var l="prueba";
        $('#medList').append("<li> <a>"+l+"</a></li>");
        //evento.preventDefault();
    });
});
// lista de medicamentos en dependencia del tipo de dosis 
function medicineList() {
    var temp = $("#dosis").val();
    var listofBolus = ["Analgesics ,hipnotics & sedatives", "Antiarrythmics", "Antidotes", "Antipertensive", "Bronchodilators", "\n\
Diuritis", "Muscle relaxants", "Vasoactives amines"];
    var listOfBolus = ["hola", "como ", "estás"];
    cleanList(listofBolus.length);
    cleanList(listOfBolus.length);
    if (temp == "IV Bolus") {
        listBolus(listofBolus);
    } else if (temp == "IV Pumps") {
        listBolus(listOfBolus);
    } else {
        alert( "mensaje","debe seleccionar la dosis a suministrar");

    }
}
//pinta las filas en la tabla de las familias de medicamentos 
function listBolus(medicamentArray) {
    for (var i = 0; i < medicamentArray.length; i++) {
        $("#medList").append("<li  id=li" + i + "><a>" + medicamentArray[i] + "</a></li>").listview("refresh");
    }
}
//limpia las lista
function cleanList(size) {
    for (i = 0; i < size; i++) {
        $("#li" + i).remove();
        
    }
}

