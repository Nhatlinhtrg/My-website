// JavaScript for opening and closing sidebar (if needed)
function openNav() {
    document.querySelector('.sidebar').classList.add('open');
    document.querySelector('.main-content').style.marginLeft = "300px";
}

function closeNav() {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.main-content').style.marginLeft = "0";
}

