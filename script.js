// FUNÇÃO PARA ROLAGEM DE SCROLL


const go = (e) => {
    window.scroll({
        top: document.querySelector( e )
        .offsetTop,
        left: 0,
        behavior: 'smooth'
     });
  }