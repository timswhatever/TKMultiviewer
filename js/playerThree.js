document.getElementById('url3').addEventListener("url3", submitOne);

function submitThree() {
    let channelThree = document.getElementById('url3').value
    var combined = "https://player.twitch.tv/?channel=" + channelThree + "&parent=timswhatever.github.io"
    if (checkbox3.checked == true) {
        var combined2 = "https://player.kick.com/" + channelThree
        document.getElementById('channel3').setAttribute("src", combined2)
    } else {
        var combined = "https://player.twitch.tv/?channel=" + channelThree + "&parent=timswhatever.github.io"
        document.getElementById('channel3').setAttribute("src", combined)
    }
    channelThree = "";
}