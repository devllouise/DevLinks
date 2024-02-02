function mudarModo() {

    const html = document.documentElement
    html.classList.toggle('dark')

    //pegar a tag img 
    const img = document.querySelector('#profile img')

    // substituir a imagem
    if(html.classList.contains('dark')){
        //se tiver sem light mode, mantem a imagem
        img.setAttribute('src', './assets/profile_dark.jpeg')
        img.setAttribute('alt', 'Imagem do autor no GitHub em modo escuro')

    } else {
        // se tiver light mode, adiciona a maira branca
        img.setAttribute('src', './assets/profile.jpeg')
        img.setAttribute('alt', 'Imagem do autor no GitHub em modo claro')
    }
    

    
    
    
    
}