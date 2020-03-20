//alert("funcionou cara")

function consultaCep(){
    var cep = document.getElementById("cep").value
    var url = "http://viacep.com.br/ws/" + cep + "/json/"
    console.log(url)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#logradouro").html(response.logradouro)
            //document.getElementById("logradouro").innerHTML = response.logradouro
            $("#bairro").html(response.bairro)
            //document.getElementById("bairro").innerHTML = response.bairro
            $("#localidade").html(response.localidade)
            //document.getElementById("localidade").innerHTML = response.localidade
            $("#uf").html(response.uf)
            //document.getElementById("uf").innerHTML = response.uf
        }
    })
}