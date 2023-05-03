function vermelho(){
    const div1 = document.getElementById("div1")
    const div2 = document.getElementById("div2")
    const div3 = document.getElementById("div3")
    const div4 = document.getElementById("div4")
    div1.style.backgroundColor = "red"
    div2.style.backgroundColor = "red"
    div3.style.backgroundColor = "red"
    div4.style.backgroundColor = "red"
}
function azul(){
    const div1 = document.getElementById("div1")
    const div2 = document.getElementById("div2")
    const div3 = document.getElementById("div3")
    const div4 = document.getElementById("div4")
    div1.style.backgroundColor = "blue"
    div2.style.backgroundColor = "blue"
    div3.style.backgroundColor = "blue"
    div4.style.backgroundColor = "blue"
}
function amarelo(){
    const div1 = document.getElementById("div1")
    const div2 = document.getElementById("div2")
    const div3 = document.getElementById("div3")
    const div4 = document.getElementById("div4")
    div1.style.backgroundColor = "yellow"
    div2.style.backgroundColor = "yellow"
    div3.style.backgroundColor = "yellow"
    div4.style.backgroundColor = "yellow"
}

function gerarCorAleatoria() {
    let letras = '0123456789ABCDEF'
    let cor = '#'
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)]
      //Math.floor arredonda o número para o número menor mais próximo 
      //Math.random()gera um número aleatório de 0 a 15
    }
    return cor
}

function aleatorio(){
    const div1 = document.getElementById("div1")
    const div2 = document.getElementById("div2")
    const div3 = document.getElementById("div3")
    const div4 = document.getElementById("div4")
    div1.style.backgroundColor = gerarCorAleatoria()
    div2.style.backgroundColor = gerarCorAleatoria()
    div3.style.backgroundColor = gerarCorAleatoria()
    div4.style.backgroundColor = gerarCorAleatoria()
}