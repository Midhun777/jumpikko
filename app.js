let player = document.getElementById("player");
let blockDiv = document.getElementById("block");

function jump() {

    if (player.classList != "jump-class") {
        player.classList.add("jump-class");
    }
    setTimeout(function () {
        player.classList.remove("jump-class")
    }, 500)
}

var checkDead = setInterval(function () {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(blockDiv).getPropertyValue("left"));
    console.log(playerTop);
    console.log(blockLeft);

    // if(blockLeft>50 && blockLeft<=80 && playerTop>=330){
    //     blockDiv.style.animation="none";
    //     blockDiv.style.display="none";
    //     alert("oombi!")
    // }

}, 10)