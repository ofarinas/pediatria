

$(document).ready(function() {
    $('#familiaMedicamento').click(function(evento) {
        var dosis = $("#dosis").val();
        var weith = $("#weith").val();
        var typeWeith = $("#typeWeith").val();
        if (dosis == "Menu") {
            alert("Pleace enter way of manage of medicine")
            evento.preventDefault();
        }
        else if (weith == "") {
            alert("Pleace enter the weigth of the child")
            evento.preventDefault();
        }
        else if (typeWeith == "Menu") {
            evento.preventDefault();
            alert("Pleace enter the weigth of the child")
        }
        medicineList(dosis);
        ////////////////////////////////////////////////////////////////////////////////

    });
//    $("#Antidotes").click(function(evento) {
//        test();
//
//    });
});
// lista de medicamentos en dependencia del tipo de dosis 
function medicineList(temp) {
    var listofBolus = ["Analgesics ,hipnotics & sedatives", "Antiarrythmics", "Antidotes", "Antipertensive", "Bronchodilators", "\n\
Diuritis", "Muscle relaxants", "Vasoactives amines"];
    var listOfBolus = ["Analgesics ,hipnotics & sedatives ", "Antiarrythmics", "Antiarrythmics & Vasodilators", "\n\
Bronchodilators", "Diuretics", "Muscle relaxants", "Vasoactives amines"];
    cleanList(listofBolus.length);
    cleanList(listOfBolus.length);
    if (temp == "IV Bolus") {
        listBolus(listofBolus);
    } else if (temp == "IV Pumps") {
        listBolus(listOfBolus);
    }
}
//pinta las filas en la tabla de las familias de medicamentos 
function listBolus(medicamentArray) {
    for (var i = 0; i < medicamentArray.length; i++) {
        $("#medList").append("<li  id=li" + i + "><a data-transition=slide onclick=a() href=#pagePumpDosis  id=" + medicamentArray[i] + ">" + medicamentArray[i] + "</a></li>");
    }
    $("#medList").listview("refresh");
}
//limpia las lista
function cleanList(size)
{
    for (i = 0; i < size; i++) {
        $("#li" + i).remove();

    }
}
function a() {
    var lista = ["Fentanyl", "Etomidate", "Ketamine", "Midazolam", "Morphine", "Propofol", "Remifentayl"];
    rellenarCol(lista);

}
function  rellenarCol(lista1) {
    for (i = 0; i < lista1.length; i++) {
        $("#table1").add("tr").attr("id", "tr" + i);
        $("#tr" + i).append("  <td>" + lista[i] + "</td> <td >1</td>  <td >1</td> ");

    }

    $("#table1").table("refresh");

}
function test() {
    alert("entro al evento");

}

