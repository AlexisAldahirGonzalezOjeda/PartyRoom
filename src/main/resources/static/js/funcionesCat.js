function traerInformacionCat() {
    $.ajax(
        {
            url: "http://localhost:8080/api/Category/all",
            type: "GET",
            datatype: "JSON",
            success: function(respuesta){ 
                verRespuestaCat(respuesta);
            }
        }
    );
}

function verRespuestaCat(items){

    $("#resultadoCat").empty();

    let myTable="<table>";
    myTable += "<tr><th>Id</th><th>Nombre</th><th>Descripción</th><tr>";
    
    for(i=0; i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].name+"</td>";
        myTable += "<td>"+items[i].description+"</td>"; 
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultadoCat").append(myTable);
}

function guardarInformacionCat(){

    $("#resultadoCat").empty();

    let myData = {name:$("#nameCat").val(), description:$("#descriptionCat").val()};
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url: "http://localhost:8080/api/Category/save",
            type: "POST",
            data: dataToSend,
            datatype: "JSON",
            contentType: "application/json",
            success: function(respuesta){
                alert("Insercion exitosa");
                $("#nameCat").val('');
                $("#descriptionCat").val('');
            },
            error: function(xhr, status){
                alert("Operacion no satisfactoria", + xhr.status);
            }
        }
    );

}
 

 
