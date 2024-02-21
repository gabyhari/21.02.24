const sortear = () => {
    var nome = ["gabriel","isa","gigi","vitoria"];

    let h1nome = document.getElementById("nome");
    
    let achouNumero = false;
    let numerosorteado;

    while (achouNumero = false) {
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        }
    } 

    switch (numerosorteado) {
     case 0;
        h1nome.innerText = nomes[numeroSorteado];
        break;

     case 1;
        h1nome.innerText = nomes[numeroSorteado];
        break;

    case 2;
        h1nome.innerText = nomes[numeroSorteado];
        break;

     case 3;
        h1nome.innerText = nomes[numeroSorteado];
        break;

    case 4;
        h1nome.innerText = nomes[numeroSorteado];

    default:
        h1nome.innertext = " o numero sorteado foi " + numerosorteado;
    
    }
    h1nome.inner
}