function mostrarTabela() {
    fetch("http://127.0.0.1:5000/")
        .then(function(response) {
            console.log(response)
            response.json().then(function(data) {
                console.log(data);
                if (data.length > 0) {
                    var temp = "";

                    data.forEach((u) => {
                        temp += "<tr>";
                        temp += "<th>" + u + "<th/>";



                    });

                    document.getElementById("name").innerHTML = temp;
                }
            });
        })
        .catch(function(err) {
            console.error('Failed retrieving information', err);
        });


}
document.addEventListener('DOMContentLoaded', function() {
    mostrarTabela();
}, false);