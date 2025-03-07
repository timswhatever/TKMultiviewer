window.addEventListener('load', function() {
  const settingsBtn = document.querySelector('.settings-button')

  const settingsMenu = document.querySelector('.settings-menu')
  
  const settingsMenuClose = document.querySelector('.settings-close')

  settingsBtn.addEventListener('click', function(){
    settingsMenu.classList.add('active')
  })

  settingsMenuClose.addEventListener('click', function() {
    settingsMenu.classList.remove('active')
  })
})


function chatOpacity() {
  const chatOpacitySlider = document.querySelector('.opacity-slider')

  const chatBox = document.querySelector('.chat-box')

  chatBox.style.opacity = chatOpacitySlider.value / 100

  console.log(chatOpacitySlider.value)
} 