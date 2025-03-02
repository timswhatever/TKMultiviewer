window.addEventListener("load", function() {
  const plusButton = document.querySelector('.plus-button')
});

let videoArray = []

// Adds a new div to the grid with a class based on index number
function addToGrid() {

  let videoPlayerHTML = '';

  for(i=0; i < videoArray.length; i++) {

    const videoObject = videoArray[i];
    const { indexNumber } = videoObject;

  }

  document.querySelector('.embed-grid').insertAdjacentHTML('beforeend', 
    `
    <div class="video-player player-${i}">
      <button class="minus-button js-minus-button" onclick="removePlayer(${i})">-</button>
      <input type="text" class="url-input js-url-input-${i}" maxlength="25" placeholder="Channel Name" onkeydown="channelChange(event, ${i})">
      <label class="switch">
        <input class="js-site-checkbox-${i}" type="checkbox" onchange="channelChangeToggle(event, ${i})" tabindex="0">
        <span class="slider round"></span>
      </label>
      <iframe class="iframe-${i}" src="assets/placeholder-img.webp" frameborder='0' allowfullscreen="true" scrolling="no"></iframe>
    </div>
    `
  )
}

// Pushes new index to array then executes addtogrid with a limit of 6 embeds
function addPlayer() {

  let indexNumber = videoArray.length

  if(videoArray.length <= 49) {
      videoArray.push({
        indexNumber
      })
      addToGrid()
      showElements()
  } else {
      console.log('too many embeds (the limit is 50) (what are you doing)')
  }
}

// Removing player div class based on index number, prevents all embeds from reloading
// when removing one
function removePlayer(i) {

  const playerNumber = document.querySelector(`.player-${i}`)

  for(i = videoArray.length; i >=0; --i) {
      videoArray.splice(i, 1)
      showElements()
        if (playerNumber.parentNode == null) {
          return
        } else {
            playerNumber.parentNode.removeChild(playerNumber)
        }
  }
}


// Changes between twitch and kick
function channelChange (event, i) {
  let channelInput = document.querySelector(`.js-url-input-${i}`)

  const iframeSource = document.querySelector(`.iframe-${i}`)

  const siteCheckbox = document.querySelector(`.js-site-checkbox-${i}`)
    
    if(event.key === "Enter") {
      if(siteCheckbox.checked) {
        iframeSource.setAttribute("src", "https://player.kick.com/" + channelInput.value)
      } else {
        iframeSource.setAttribute("src", "https://player.twitch.tv/?channel=" + channelInput.value + "&parent=timswhatever.github.io")
      }
    }
}


// Changes between twitch and kick, but happens when the toggle switch is changed
// i'll have to integrate it with the function above somehow, couldn't figure it out lol
function channelChangeToggle(event, i) {
  let channelInput = document.querySelector(`.js-url-input-${i}`)

  const iframeSource = document.querySelector(`.iframe-${i}`)

  const siteCheckbox = document.querySelector(`.js-site-checkbox-${i}`)
  
      if(siteCheckbox.checked) {
        iframeSource.setAttribute("src", "https://player.kick.com/" + channelInput.value)
      } else {
        iframeSource.setAttribute("src", "https://player.twitch.tv/?channel=" + channelInput.value + "&parent=timswhatever.github.io")
      }
}


// makes the embed grid and + button on the button visible which is helpful when you got lotta embeds
function showElements() {

   const addButton = document.querySelector('.bottom-plus-button')
   const videoGrid = document.querySelector('.embed-grid')

  if(videoArray.length >= 1) {
    if(addButton.classList.contains('active')) {
      return
    } else {
    addButton.classList.add('active')
    videoGrid.classList.add('active')
    }
  } else if(videoArray.length <= 0) {
    addButton.classList.remove('active')
    videoGrid.classList.remove('active')
  }
}