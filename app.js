let player = document.getElementById("player");
let blockDiv = document.getElementById("block");

function jump(){
    player.classList.add("jump-class");
    setTimeout(function(){
        player.classList.remove("jump-class")
    },500)
}
