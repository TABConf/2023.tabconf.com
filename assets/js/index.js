const path = window.location.pathname.split('/')[1]
const selected = document.getElementById(path)
selected.className += ' selected'
