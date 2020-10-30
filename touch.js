
function main(){

    console.log("Aqui deberias empezar la ejecucion del js")

    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click", "alert('click');");
    el.addEventListener("click", click);

    window.onload = inicio;
    function handleStart(evt) {
        evt.preventDefault();
        document.getElementById("log").innerHTML = "Touchstart"
    }

    function handleEnd(evt) {
        evt.preventDefault();
        document.getElementById("log").innerHTML = "Touchend"
    }

    function handleMove(evt) {
        evt.preventDefault();
        document.getElementById("log").innerHTML = "Touchmove"
    }
    
    function click(){
        alert("click");
    }
    
    function orientacion(e){
        document.getElementById("log").innerHTML = e.alpha;        
    }

}