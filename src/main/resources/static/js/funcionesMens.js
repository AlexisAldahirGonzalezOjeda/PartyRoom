function traerInformacionMens() {
    $.ajax(
            {
                url: "http://localhost:8080/api/Message/all",
                type: "GET",
                datatype: "JSON",
                success: function (respuesta) {
                    verRespuestaMens(respuesta);
                }
            }
    );
}

function verRespuestaMens(items) {

    $("#resultadoMens").empty();

    let myTable = "<table>";
    myTable += "<tr><th>Id</th><th>Cliente</th><th>Salón</th><th>Mensaje</th><tr>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idMessage + "</td>";
        myTable += "<td>" + items[i].client["name"] + "</td>";
        myTable += "<td>" + items[i].partyroom["name"] + "</td>";
        myTable += "<td>" + items[i].messageText + "</td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultadoMens").append(myTable);
}

function guardarInformacionMens() {

    let idCliente = $("#idCli").val();
    $.ajax(
            {
                url: "http://localhost:8080/api/Client/" + idCliente,
                type: "GET",
                datatype: "JSON",
                success: function (respuesta) {
                    if (respuesta === null) {
                        alert("Operacion no satisfactoria");
                    } else {
                        guardarInformacionMens2(respuesta);
                    }
                }
            }
    );

}

function guardarInformacionMens2(cliente) {

    let idPartyroom = $("#idRoom").val();
    $.ajax(
            {
                url: "http://localhost:8080/api/Partyroom/" + idPartyroom,
                type: "GET",
                datatype: "JSON",
                success: function (respuesta) {
                    if (respuesta === null) {
                        alert("Operacion no satisfactoria");
                    } else {
                        guardarInformacionMens3(cliente, respuesta);
                    }
                }
            }
    );

}

function guardarInformacionMens3(cliente, partyroom) {

    $("#resultadoMens").empty();

    let myData = {partyroom: partyroom, client: cliente,
        messageText: $("#messageText").val()};
    let dataToSend = JSON.stringify(myData);

    $.ajax(
            {
                url: "http://localhost:8080/api/Message/save",
                type: "POST",
                data: dataToSend,
                datatype: "JSON",
                contentType: "application/json",
                success: function (respuesta) {
                    alert("Insercion exitosa");
                    $("#idCli").val('');
                    $("#idRoom").val('');
                    $("#messageText").val('');
                },
                error: function (xhr, status) {
                    alert("Operacion no satisfactoria", +xhr.status);
                }
            }
    );

} 