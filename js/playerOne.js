document.getElementById('url1').addEventListener("url1", submitOne);

function submitOne() {
    let channelOne = document.getElementById('url1').value
    var checkbox1 = document.getElementById('checkbox1');
    if (checkbox1.ariaChecked == true) {
        var combined2 = "https://player.kick.com/" + channelOne
        document.getElementById('channel1').setAttribute("src", combined2)
    } else {
        var combined = "https://player.twitch.tv/?channel=" + channelOne + "&parent=timswhatever.github.io"
        document.getElementById('channel1').setAttribute("src", combined)
    }
}


