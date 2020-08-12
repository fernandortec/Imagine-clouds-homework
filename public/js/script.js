document.querySelector('.search-container').onmouseover = () => {
   makeItBlue()
};
document.querySelector('.search-container').onmouseout = () => {
    makeItWhite()
};
document.querySelector('input').onkeyup = (event) => {
    if(!event.target.value){
        makeItWhite()
    }
    makeItBlue();
};


function makeItBlue(){
    document.querySelector('i').style.color = 'var(--secondary-color)'
    document.querySelector('label').style.top = '-12px';
    document.querySelector('label').style.color = 'var(--secondary-color)';
    document.querySelector('.search-container').style.borderTop = 'none';
    document.querySelector('.search-container').style.borderBottom = '3px solid var(--secondary-color)';
};

function makeItWhite(){
    document.querySelector('i').style.color = '#fff';
    document.querySelector('label').style.top = '12px';
    document.querySelector('label').style.color = '#FFF';
    document.querySelector('.search-container').style.borderTop = '3px solid #fff';
    document.querySelector('.search-container').style.borderBottom = '3px solid #fff';
}