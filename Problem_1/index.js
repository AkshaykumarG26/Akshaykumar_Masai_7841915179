let container = document.getElementById("container")

function apply(e){
    e.preventDefault();

    let data = document.getElementById("data")

    let top = data.top.value;
    let left = data.left.value;
    let square = data.square.value;
    let radius = data.radius.value;
    
    container.style.width = square + "px"
    container.style.height = square + "px";
    container.style.backgroundColor = "yellow";
    container.style.border = "2px solid black";

    container.style.marginLeft = left + "px";
    container.style.marginTop = top + "px";

    let n = square / radius

    for(var k = 0; k < 2; k++){

        
        for(let i = 0; i < n; i++){
            for(let j = 0; j < i; j++){
                
                let cir = document.createElement("span")
                cir.classList.add("cir")
                cir.style.width = radius + "px"
                cir.style.height = radius + "px"
                container.append(cir)
            }
        }
    }

}