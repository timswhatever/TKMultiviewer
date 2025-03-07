// sorry mobile users

window.addEventListener("load", function() {
  if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Silk|Opera Mini/i.test(navigator.userAgent)) {
    const notificationElem = this.document.querySelector('.mobile-block')

    notificationElem.style['visibility'] = 'visible'
  }
});

window.addEventListener("load", function() {
  if (/Android|webOS|iPhone|iPod|iPad|Kindle|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Silk|Opera Mini/i.test(navigator.userAgent)) {

    const openCloseBtn = document.querySelector('.open-close-chat')

    openCloseBtn.setAttribute('style', 'display: none;')
  }
});