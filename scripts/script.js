$(document).ready(function(){
    $.get("scripts/libreria.xml", {}, function(xml){
        $('libreria', xml).each(function(){
            var n = (xml.getElementsByTagName('nombre'));
            for(index in n){
                var ide = document.querySelector("#ide");
                if(index < n.length){
                    var id = ((xml.getElementsByTagName('id')[index]).childNodes[0]).nodeValue;

                    var parrafo = document.createElement("tr");
                    parrafo.append(id);
                    ide.append(parrafo);
                }
            }

            for(index in n){
                var nom = document.querySelector("#nom");
                if(index < n.length){
                    var nombre = n[index].childNodes[0].nodeValue;

                    var parrafo = document.createElement("tr");
                    parrafo.append(nombre);
                    nom.append(parrafo);
                }
            }

            for(index in n){
                var ano = document.querySelector("#ano");
                if(index < n.length){
                    var year = ((xml.getElementsByTagName('año')[index]).childNodes[0]).nodeValue;

                    var parrafo = document.createElement("tr");
                    parrafo.append(year);
                    ano.append(parrafo);
                }
            }
        });
    });
});