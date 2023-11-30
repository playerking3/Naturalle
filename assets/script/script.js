pontuacao = document.getElementById('pontuacao');
progresso = document.getElementById('progresso');
pts = Math.floor(Math.random()*100);
pontuacao.innerHTML = pts + " Pts"
progresso.style.width = pts + "%"

function avalia(elemento){
    let pai = elemento.parentElement;
    let qty = pai.childElementCount;
    let chave = false
    for (let i = 0; i < qty; i++){
        if (pai.children[i] != elemento && chave == false){
            pai.children[i].className = 'fa-solid fa-star fa-lg'
        }else if (pai.children[i] == elemento){
            pai.children[i].className = 'fa-solid fa-star fa-lg'
            chave = true
        }else if (pai.children != elemento && chave == true){
            pai.children[i].className = 'fa-regular fa-star fa-lg'
        }
    }
}


