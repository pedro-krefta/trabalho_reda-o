function MostrarEsconder(conteudo1){
    let conteudo = document.getElementById(conteudo1)

    if(conteudo.classList.contains("escondido")){
        conteudo.classList.remove("escondido")
    }else{
        conteudo.classList.add("escondido")
    }
}
