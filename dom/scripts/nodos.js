

//CREAMOS LOS NODOS PARA EL DOCUMENTO HTML::

var addLista = function () {
    var item = document.createElement("li");        //creo el elemento
    var texto = document.createTextNode("Me han creado nuevo"); //creo el texto
    item.appendChild(texto);    //agrego el texto al nodo item

    document.getElementById("hijo1").appendChild(item); //agrego el elemento item a la capa hijo1
}

var borrarNodo = function (id) {
    var nodo = document.getElementById(id);
    var padre = nodo.parentNode;

    padre.removeChild(nodo);
}

var cambiarColor = function (id) {
    var nodo = document.getElementById(id);
    nodo.className = "rosita";      //className hace referencia a las clases de css

}

//buscar el padre y borrar todo

var borrarTodos = function () {
    var p = document.getElementById("padre");

    while(p.childNodes.length>0){ 
        p.removeChild(p.childNodes[0]);     //seria 0 porque cada vez que borras un hijo, cambia el length, y así se va borrando siempre el primero
    }
    
}

var primerHijo = function (id) {
    var p = document.getElementById("padre");
    var hijo = p.firstChild;
}