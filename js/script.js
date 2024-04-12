
const toggleBtn = document.querySelector('.menu-toggle');
const toggleBtnIcon = document.querySelector('.menu-toggle button svg use');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open'); // open is a class name , dropdownMenu.classList.toggle('open') checks if the 'open' class is present on dropdownMenu. If it is present, it removes it; if it is not present, it adds it.

    const isOpen = dropdownMenu.classList.contains('open');

   isOpen ? document.querySelector('.menu-toggle button svg').innerHTML= `<use xlink:href="#xmark_icon"></use>` : document.querySelector('.menu-toggle button svg').innerHTML= `<use xlink:href="#menu_icon"></use>`; // if dropdown menu showing when button click xmark icon visible if not menu icon visible

}


