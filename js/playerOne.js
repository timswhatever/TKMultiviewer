document.getElementById('url1').addEventListener("url1", submitOne);

function submitOne() {
    let channelOne = document.getElementById('url1').value
    var combined = "https://player.twitch.tv/?channel=" + channelOne + "&parent=timswhatever.github.io"
    document.getElementById('channel1').setAttribute("src", combined)
}


