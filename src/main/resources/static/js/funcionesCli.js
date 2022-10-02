function traerInformacionCli() {
    $.ajax(
        {
            url: "http://localhost:8080/api/Client/all",
            type: "GET",
            datatype: "JSON",
            success: function(respuesta){ 
                verRespuestaCli(respuesta);
            }
        }
    );
}

function verRespuestaCli(items){

    $("#resultadoCli").empty();

    let myTable="<table>";
    myTable += "<tr><th>Id</th><th>Nombre</th><th>Email</th><th>Edad</th><tr>";
    
    for(i=0; i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].idClient+"</td>";
        myTable += "<td>"+items[i].name+"</td>";
        myTable += "<td>"+items[i].email+"</td>"; 
        myTable += "<td>"+items[i].age+"</td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultadoCli").append(myTable);
}

function guardarInformacionCli(){

    $("#resultadoCli").empty();

    let myData = {name:$("#nameCli").val(), email:$("#emailCli").val(), 
                  password:$("#passwordCli").val(), age:$("#ageCli").val()};
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url: "http://localhost:8080/api/Client/save",
            type: "POST",
            data: dataToSend,
            datatype: "JSON",
            contentType: "application/json",
            success: function(respuesta){
                alert("Insercion exitosa");
                $("#nameCli").val('');
                $("#emailCli").val('');
                $("#passwordCli").val('');
                $("#ageCli").val('');
            },
            error: function(xhr, status){
                alert("Operacion no satisfactoria", + xhr.status);
            }
        }
    );

} 