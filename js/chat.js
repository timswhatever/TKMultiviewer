// Adds a chat tab for each video player
function addChatTab(i) {

  const channelName = document.querySelector(`.js-url-input-${i}`).value

  if (channelName == null || channelName == undefined) {
  } else {
    document.querySelector('.chat-tabs').insertAdjacentHTML('beforeend', 
      `
      <div class="username-tab username-tab-${i}" style="display: none;">
        <button class="chat-tab-button js-chat-user-${i}" onclick="changeChatBox(${i})">${channelName}</button>
      </div>
      `
    )
  }
}

// Sets it to use either twitch or kick , allows each button to store if the video-player
// toggle is set to twitch or kick and auto updates it to switch chats
function changeChatBox(i) {

  const channelNameBtn = document.querySelector(`.js-chat-user-${i}`)

  const channelName = document.querySelector(`.js-url-input-${i}`).value

  const channelToggle = document.querySelector(`.js-site-checkbox-${i}`)

  if(channelToggle.checked) {
    if(channelName == undefined || channelName == null || channelName == '') {
    } else {
      for(i=0; i < videoArray.length; i++) {
        document.querySelector('.chat-iframe').setAttribute('src', `https://kick.com/popout/${channelNameBtn.innerHTML}/chat`)
        channelNameBtn.style.borderColor = "rgb(83, 252, 24)"
        }
      }
  } else {
    if(channelName == undefined || channelName == null || channelName == '') {
    } else {
      for(i=0; i < videoArray.length; i++) {
        document.querySelector('.chat-iframe').setAttribute('src', `https://www.twitch.tv/popout/${channelNameBtn.innerHTML}/chat`)
        channelNameBtn.style.borderColor = "rgb(163, 51, 255)"
      }
    }
  }
}

// Updates the tabs username from video-player channel input
function updateUsername(i) {
  const channelBtn = document.querySelector(`.js-chat-user-${i}`)

  const channelName = document.querySelector(`.js-url-input-${i}`).value

  channelBtn.innerHTML = channelName

  if(channelName == undefined || channelName == null || channelName == '') {
  } else {
    document.querySelector('.chat-iframe').style.display = 'flex';
    document.querySelector(`.username-tab-${i}`).style.display = 'flex';
  }

  // Fires function to set iframe src
  changeChatBox(i)
}

// Delete
function removeChatTab(i) {
    const channelNameBtn = document.querySelector(`.username-tab-${i}`)
    channelNameBtn.parentElement.removeChild(channelNameBtn)

}

function openCloseChat() {
    const openCloseBtn = document.querySelector('.open-close-chat')

    const chatElem = document.querySelector('.chat-box')

      if (chatElem.style.display == 'none') {
        chatElem.style.display = "flex"
        openCloseBtn.innerHTML = '&gt'
        openCloseBtn.style.right = "380px"
      } else if(chatElem.style.display == 'flex') {
        chatElem.style.display = "none"
        openCloseBtn.innerHTML = '&lt'
        openCloseBtn.style.right = "5px"
      }
}
