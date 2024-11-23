let channelOne = "Twitch"

document.getElementById('url1').addEventListener("url1", submitOne);

function submitOne() {
    channelOne = document.getElementById('url1').value
    document.getElementById('Channel1').src = 'https://player.twitch.tv/?channel='+channelOne+'&parent=timswhatever.github.io'
}


