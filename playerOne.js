let channelOne = "Twitch"

document.getElementById('url1').addEventListener("url1", submitOne);

new Twitch.Embed("twitch-embed", {
    width: 854,
    height: 480,
    channel: [channelOne],
    autoplay: true,
    layout: "video",
    muted: false,
    theme: "dark",
    });

function submitOne() {
    channelOne = document.getElementById('url1').value
    console.log(channelOne)
}


