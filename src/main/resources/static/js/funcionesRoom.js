function traerInformacionRoom() {
    $.ajax(
            {
                url: "http://localhost:8080/api/Partyroom/all",
                type: "GET",
                datatype: "JSON",
                success: function (respuesta) {
                    verRespuestaRoom(respuesta);
                }
            }
    );

}



function verRespuestaRoom(items) {

    $("#resultadoRoom").empty();

    let myTable = "<table>";
    myTable += "<tr><th>Id</th><th>Categoria</th><th>Nombre</th>\n\
                <th>Propietario</th>\n\
                <th>Capacidad</th>\n\
                <th>Descripción</th><tr>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].category["name"] + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].owner + "</td>";
        myTable += "<td>" + items[i].capacity + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultadoRoom").append(myTable);
}


function guardarInformacionRoom() {

    let idCategoria = $("#idCat").val();
    $.ajax(
            {
                url: "http://localhost:8080/api/Category/" + idCategoria,
                type: "GET",
                datatype: "JSON",
                success: function (respuesta) {
                    if (respuesta === null) {
                        alert("Operacion no satisfactoria");
                    } else {
                        guardarInformacionRoom2(respuesta);
                    }
                }
            }
    );

}

function guardarInformacionRoom2(categoria) {

    $("#resultadoRoom").empty();

    let myData = {owner: $("#ownerRoom").val(), capacity: $("#capacityRoom").val(), category: categoria,
        name: $("#nameRoom").val(), description: $("#descriptionRoom").val()};
    let dataToSend = JSON.stringify(myData);

    $.ajax(
            {
                url: "http://localhost:8080/api/Partyroom/save",
                type: "POST",
                data: dataToSend,
                datatype: "JSON",
                contentType: "application/json",
                success: function (respuesta) {
                    alert("Insercion exitosa");
                    $("#idCat").val('');
                    $("#ownerRoom").val('');
                    $("#capacityRoom").val('');
                    $("#nameRoom").val('');
                    $("#descriptionRoom").val('');
                },
                error: function (xhr, status) {
                    alert("Operacion no satisfactoria", +xhr.status);
                }
            }
    );

}

