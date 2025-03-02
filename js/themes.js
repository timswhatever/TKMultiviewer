window.addEventListener('load', function(){

  const themeMenu = document.querySelector('.themes')

  const addButton = this.document.querySelector('.plus-button')

  themeMenu.addEventListener('change', function(){
    changeTheme()
  })

  addButton.addEventListener('click', function(){
    changeTheme()
  })
})

function changeTheme() {

    const themeMenu = document.querySelector('.themes')

    const selectedTheme = themeMenu.value

    const elements = document.querySelectorAll('body, html, h1, p, .button-wrapper, .embed-grid, .url-input, .header')

    for(i=0; i < elements.length; i++) {
        elements[i].setAttribute("data-theme", selectedTheme)
    }
}