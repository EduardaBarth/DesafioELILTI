function mudarCor(color){
    const divs = document.querySelectorAll("#div")
    divs.forEach(element => {
        element.style.backgroundColor = color
    })
}
function gerarCorAleatoria() {
    let letras = '0123456789ABCDEF'
    let cor = '#'
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 10)]
      //Math.floor arredonda o número para o número menor mais próximo 
      //Math.random()gera um número aleatório de 0 a 15
    }
    return cor
}
function aleatorio(){
    const divs = document.querySelectorAll("#div")
    divs.forEach(element => {
        element.style.backgroundColor = gerarCorAleatoria()
    })
}