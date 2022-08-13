// debut nav

const menur = () => {
    const btnresponsive =
    document.querySelector('.burger');
    
    const nav = document.querySelector('.nav-links');

    // le clic

    btnresponsive.addEventListener('click' , () => {
// Lancera animation css

btnresponsive.classList.toggle('active');
nav.classList.toggle('nav-active');

    })


}
menur();