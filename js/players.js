window.onload = function () {

    document.getElementById('url1').addEventListener("url1", submitOne);
    document.getElementById('url2').addEventListener("url2", submitTwo);
    document.getElementById('url3').addEventListener("url3", submitThree);
    document.getElementById('url4').addEventListener("url4", submitFour);

};

function submitOne() {
    let channelOne = document.getElementById('url1').value
    var checkbox1 = document.getElementById('checkbox1');
    if (checkbox1.checked == true) {
        var combined2 = "https://player.kick.com/" + channelOne
        document.getElementById('channel1').setAttribute("src", combined2)
    } else {
        var combined = "https://player.twitch.tv/?channel=" + channelOne + "&parent=timswhatever.github.io"
        document.getElementById('channel1').setAttribute("src", combined)
    }
    channelOne = "";
}


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