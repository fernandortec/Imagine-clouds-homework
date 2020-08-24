document.querySelector('.search-container').onmouseover = () => {
   makeItBlue()
};
document.querySelector('.search-container').onmouseout = () => {
    makeItWhite()
};
document.querySelector('input').onfocus = () => {
    makeItBlue();
};
document.querySelector('input').onkeyup = (event) => {
    if(!event.target.value){
        makeItWhite()
    }
    makeItBlue();
};

document.getElementsByClassName('.animation').onmouseover = () => {
    document.getElementById('cart').style.visibility = 'visible';
    alert('ya');
}

function makeItBlue(){
    document.querySelector('i').style.color = 'var(--secondary-color)'
    document.querySelector('label').style.top = '-22px';
    document.querySelector('label').style.color = 'var(--secondary-color)';
    document.querySelector('.search-container').style.borderBottom = '3px solid var(--secondary-color)';
};

function makeItWhite(){
    document.querySelector('i').style.color = '#fff';
    document.querySelector('label').style.top = '12px';
    document.querySelector('label').style.color = '#FFF';
    document.querySelector('.search-container').style.borderBottom = '3px solid #fff';
}

function redirect(redirect){
    window.location.href = `${redirect}.html`;
}

