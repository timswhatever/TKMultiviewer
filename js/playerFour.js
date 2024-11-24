document.getElementById('url4').addEventListener("url4", submitOne);

function submitFour() {
    let channelFour = document.getElementById('url4').value
    var combined = "https://player.twitch.tv/?channel=" + channelFour + "&parent=timswhatever.github.io"
    if (checkbox4.checked == true) {
        var combined2 = "https://player.kick.com/" + channelFour
        document.getElementById('channel4').setAttribute("src", combined2)
    } else {
        var combined = "https://player.twitch.tv/?channel=" + channelFour + "&parent=timswhatever.github.io"
        document.getElementById('channel4').setAttribute("src", combined)
    }
    channelFour = "";
}