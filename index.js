var d = new Date();
var t = d.getTime();
var counter = t;






function crearusuario(manzana, cmanzana) {
    var manzana = document.getElementById("manzana").value;
    var cmanzana = document.getElementById("cmanzana").value;
    console.log(counter);
    counter += 1;
    console.log(counter);
    var usuario = {
        id: counter,
        manzana: manzana,
        cmanzana: cmanzana

    }
    let db = firebase.database().ref("usuario/" + counter);
    db.set(usuario);
    document.getElementById("manzana").innerHTML = '';
    document.getElementById("cmanzana").innerHTML = '';

}
console.log(t);

function manzana() {
    document.getElementById("nombremanzana").innerHTML = "Manzanas"
    var candidadmanzana = Number(document.getElementById("cmanzana").value);
    document.getElementById("totalmanzanas").innerHTML = candidadmanzana;
    var costomanzana = candidadmanzana * 1000;
    document.getElementById("costomanzanas").innerHTML = costomanzana;
    document.getElementById("borrarmanzanas").innerHTML = `<p><button type="button" class="btn btn-danger" onclick="restarmanzana(), borrarmanzanas()"><i class="fa fa-trash"></i></button></p>`
    document.getElementById("numerodemanzanas").value = candidadmanzana;
}

function borrarmanzanas() {
    document.getElementById("nombremanzana").innerHTML = " ";
    document.getElementById("totalmanzanas").innerHTML = " ";
    document.getElementById("costomanzanas").innerHTML = " ";
    document.getElementById("borrarmanzanas").innerHTML = " ";
    document.getElementById("cmanzana").value = 0;
    document.getElementById("numerodemanzanas").value = 0;

}
//naranjas
function naranja() {

    document.getElementById("nombrenaranja").innerHTML = "Naranjas"
    var candidadmanzana = Number(document.getElementById("cnaranja").value);
    document.getElementById("totalnaranjas").innerHTML = candidadmanzana;
    var costomanzana = candidadmanzana * 2000;
    document.getElementById("costonaranjas").innerHTML = costomanzana;
    document.getElementById("borrarnaranjas").innerHTML = `<p><button type="button" class="btn btn-danger" onclick="restarnaranja(), borrarnaranjas()"><i class="fa fa-trash"></i></button></p>`
    document.getElementById("numerodenaranjas").value = candidadmanzana;
}

function borrarnaranjas() {
    document.getElementById("nombrenaranja").innerHTML = " ";
    document.getElementById("totalnaranjas").innerHTML = " ";
    document.getElementById("costonaranjas").innerHTML = " ";
    document.getElementById("borrarnaranjas").innerHTML = " ";
    document.getElementById("cnaranja").value = 0;
    document.getElementById("numerodenaranjas").value = 0;

}
//Uvas
function uva() {

    document.getElementById("nombruva").innerHTML = "Uvas"
    var candidadmanzana = Number(document.getElementById("cuva").value);
    document.getElementById("totaluvas").innerHTML = candidadmanzana;
    var costomanzana = candidadmanzana * 1500;
    document.getElementById("costouvas").innerHTML = costomanzana;
    document.getElementById("borraruvas").innerHTML = `<p><button type="button" class="btn btn-danger" onclick="restaruva(), borraruvas()"><i class="fa fa-trash"></i></button></p>`
    document.getElementById("numerodeuvas").value = candidadmanzana;
}

function borraruvas() {
    document.getElementById("nombruva").innerHTML = " ";
    document.getElementById("totaluvas").innerHTML = " ";
    document.getElementById("costouvas").innerHTML = " ";
    document.getElementById("borraruvas").innerHTML = " ";
    document.getElementById("cuva").value = 0;
    document.getElementById("numerodeuvas").value = 0;

}

function totalPagar() {
    var nummanzanas = Number(document.getElementById("cmanzana").value) * 1000;
    var numnaranjas = Number(document.getElementById("cnaranja").value) * 2000;
    var numuvas = Number(document.getElementById("cuva").value) * 1500;
    var totalpagar = nummanzanas + numnaranjas + numuvas;
    return document.getElementById("Total").innerHTML = totalpagar;

}

function restarmanzana() {
    var totales = totalPagar()
    var menosmanzana = totales - (Number(document.getElementById("cmanzana").value) * 1000);
    return document.getElementById("Total").innerHTML = menosmanzana;
}

function restarnaranja() {
    var totales = totalPagar()
    var menosmanzana = totales - (Number(document.getElementById("cnaranja").value) * 2000);
    return document.getElementById("Total").innerHTML = menosmanzana;
}

function restaruva() {
    var totales = totalPagar()
    var menosmanzana = totales - (Number(document.getElementById("cuva").value) * 1500);
    return document.getElementById("Total").innerHTML = menosmanzana;
}



function validarbtnmanzana() {
    if ((Number(document.getElementById("cmanzana").value) * 1000) == 0 || (Number(document.getElementById("cmanzana").value) * 1000) < 0) {
        alert("la Cantidad es cero o negativa");
        document.getElementById("cmanzana").value = 0;
    } else {
        manzana();
        totalPagar();
    }
}

function validarbtnnaranja() {
    if ((Number(document.getElementById("cnaranja").value) * 2000) == 0 || (Number(document.getElementById("cnaranja").value) * 2000) < 0) {
        alert("la Cantidad es cero o negativa");
        document.getElementById("cnaranja").value = 0;
    } else {
        naranja();
        totalPagar();
    }
}

function validarbtnuva() {
    if ((Number(document.getElementById("cuva").value) * 1500) == 0 || (Number(document.getElementById("cuva").value) * 1500) < 0) {
        alert("la Cantidad es cero o negativa");
        document.getElementById("cuva").value = 0;
    } else {
        uva();
        totalPagar();
    }
}
var counter = 1;

function increment() {
    return counter++;

}



function alerta() {
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    document.getElementById("ordendecompra").value = counter;
    alert("Su Orden de Compra es" + counter);

}

function restear() {
    location.href = 'https://scharss.github.io/z5/'

}

function carritollleno() {
    document.getElementById("vacio").innerHTML = " ";
}
