document.getElementById('url4').addEventListener("url4", submitOne);

function submitOne() {
    let channelFour = document.getElementById('url4').value
    var combined = "https://player.twitch.tv/?channel=" + channelFour + "&parent=timswhatever.github.io"
    document.getElementById('channel4').setAttribute("src", combined)
}