function chamar_api(){
    var url = "http://colormind.io/api/";
    var data = {
        model : "default",
        input : ["N","N","N","N","N"]
    }

    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var palette = JSON.parse(http.responseText).result;
            mudarCor(palette);
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));


}

function mudarCor(cores){

    document.getElementById("iBody").style.backgroundColor = "rgb(" + cores[0][0] + "," + cores[0][1] + "," + cores[0][2] + ")";


}