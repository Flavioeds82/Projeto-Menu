function abrirMenu(){
    let elemento = document.getElementById("menu-area");
    if (elemento.style.width == "0px"){
         elemento.style.width ="200px";
    }else{
         elemento.style.width = "0px";
    }

}