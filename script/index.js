var muted = true;
var current_player = "b";
var player_a;
var player_b;
var player = null;
var gainNode = null; 
var player0;
var player1;
var player2;
var player3;
var player4;
var player5;
var player6;
var player7;
var player8;
var player9;
var player10;

function allowDrop(ev){
    ev.preventDefault();
}
  
function drag(ev){
    ev.dataTransfer.setData("id", ev.target.id);
}
  
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    console.log(ev.dataTransfer)
    ev.target.appendChild(document.getElementById(data));
    if (ev.target.classList == "trackSlot"){
        switch(data){
            case "track1":
                player0.volume.gain.value = 1
                break;
            case "track2":
                player1.volume.gain.value = 1
                break;
            case "track3":
                player2.volume.gain.value = 1
                break;
            case "track4":
                player3.volume.gain.value = 1
                break;
            case "track5":
                player4.volume.gain.value = 1
                break;
            case "track6":
                player5.volume.gain.value = 1
                break;
            case "track7":
                player6.volume.gain.value = 1
                break;
            case "track8":
                player7.volume.gain.value = 1
                break;
            case "track9":
                player8.volume.gain.value = 1
                break;
            case "track10":
                player9.volume.gain.value = 1
                break;
            case "track11":
                player10.volume.gain.value = 1
                break;
        }
        muted = false;
    }else{
        switch(data){
            case "track1":
                player0.volume.gain.value = -1
                break;
            case "track2":
                player1.volume.gain.value = -1
                break;
            case "track3":
                player2.volume.gain.value = -1
                break;
            case "track4":
                player3.volume.gain.value = -1
                break;
            case "track5":
                player4.volume.gain.value = -1
                break;
            case "track6":
                player5.volume.gain.value = -1
                break;
            case "track7":
                player6.volume.gain.value = -1
                break;
            case "track8":
                player7.volume.gain.value = -1
                break;
            case "track9":
                player8.volume.gain.value = -1
                break;
            case "track10":
                player9.volume.gain.value = -1
                break;
            case "track11":
                player10.volume.gain.value = -1
                break;
        }       muted = true;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("start").addEventListener("click", async function(){
        document.getElementById("start").remove();
        player0 = await makeSound("media/track0.wav");
        player1 = await makeSound("media/track1.wav");
        player2 = await makeSound("media/track2.wav");
        player3 = await makeSound("media/track3.wav");
        player4 = await makeSound("media/track4.wav");
        player5 = await makeSound("media/track5.wav");
        player6 = await makeSound("media/track6.wav");
        player7 = await makeSound("media/track7.wav");
        player8 = await makeSound("media/track8.wav");
        player9 = await makeSound("media/track9.wav");
        player10 = await makeSound("media/track10.wav");

        player0.player.start();
        player1.player.start();
        player2.player.start();
        player3.player.start();
        player4.player.start();
        player5.player.start();
        player6.player.start();
        player7.player.start();
        player8.player.start();
        player9.player.start();
        player10.player.start();
    })
});

async function makeSound(url){
    const audioCtx = new window.AudioContext();
    const source = audioCtx.createBufferSource();
    const arrayBuffer = await fetch(
        url,
        ).then((res) => res.arrayBuffer());
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    source.buffer = audioBuffer;
    source.loop = true;
    source.connect(audioCtx.destination);
    console.log(url)
    console.log(source.buffer.duration)
    gainNode = audioCtx.createGain()
    source.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    gainNode.gain.value = -1

    let obj = {
        player: source,
        volume: gainNode
    }
    return obj
}