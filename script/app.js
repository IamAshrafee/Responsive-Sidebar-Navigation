const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('toggle-rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach( ul =>{
        ul.classList.remove('show')
        ul.nextElementSibling.classList.remove('rotate')
    })
}

function toggleSubMenu(button) {
button.nextElementSibling.classList.toggle('show')
button.classList.toggle('rotate')

if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('toggle-rotate')
}
}