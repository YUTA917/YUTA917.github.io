'use strict'

function clickButtun() {
    const name = document.getElementById("name").value;
    if(name === ""){
        document.getElementsByClassName("alert")[0].innerHTML="名前を入力してください"; 
    return;
    }
    for (let j = 1; j < 5; j++) {
        for (let k = 1; k < 5; k++) {
            let divClass = `box${j}-${k}`
            let box = document.getElementsByClassName(divClass)[0];
            if (box.innerHTML === "") {
                for (let i = 0; i < 1;) {
                    let randomeNumber1 = Math.floor(Math.random() * 4) + 1
                    let randomeNumber2 = Math.floor(Math.random() * 4) + 1
                    let divClass = `box${randomeNumber1}-${randomeNumber2}`
                    console.log(divClass);
                    let box = document.getElementsByClassName(divClass)[0];
                    if (box.innerHTML === "") {
                        box.innerHTML = name;
                    box.style.backgroundColor="yellow";
                        return;
                    }
                }
            }
        }
    }return  document.getElementsByClassName("alert")[0].innerHTML="もう配置できません";
}
