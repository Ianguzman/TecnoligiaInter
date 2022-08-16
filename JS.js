function sumarnumeros(){
        let varnumero1;
        let varnumero2;
        let varresultado;

        varnumero1 = Number(document.getElementById("numero1").value);
        varnumero2 = Number(document.getElementById("numero2").value);
        varresultado = varnumero1 + varnumero2;

        let imprimir = document.getElementById("imprimirresultadosuma");
        imprimir.innerText = varresultado;
    }
    