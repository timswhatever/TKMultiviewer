document.getElementById('url2').addEventListener("url2", submitTwo);

function submitTwo() {
    let channelTwo = document.getElementById('url2').value
    var combined = "https://player.twitch.tv/?channel=" + channelTwo + "&parent=timswhatever.github.io"
    if (checkbox2.checked == true) {
        var combined2 = "https://player.kick.com/" + channelTwo
        document.getElementById('channel2').setAttribute("src", combined2)
    } else {
        var combined = "https://player.twitch.tv/?channel=" + channelTwo + "&parent=timswhatever.github.io"
        document.getElementById('channel2').setAttribute("src", combined)
    }
    channelTwo = "";
}