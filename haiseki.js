'use strict'

function clickButton() {
    const name = document.getElementById("name").value;
    if(name === ""){
        document.getElementsByClassName("alert")[0].style.backgroundColor="red";
        document.getElementsByClassName("alert")[0].innerHTML="名前を入力してください"; 
    return;
    }
    for (let j = 1; j < 5; j++) {
        for (let k = 1; k < 5; k++) {
            let divId = `box${j}-${k}`
            let box = document.getElementById(divId);
            if (box.innerHTML === "") {
                for (let i = 0; i < 1;) {
                    let randomeNumber1 = Math.floor(Math.random() * 4) + 1
                    let randomeNumber2 = Math.floor(Math.random() * 4) + 1
                    let divId = `box${randomeNumber1}-${randomeNumber2}`
                    console.log(divId);
                    let box = document.getElementById(divId);
                    if (box.innerHTML === "") {
                        box.innerHTML = name;
                    box.style.backgroundColor="yellow";
                        return;
                    }
                }
            }
        }
    }  
       document.getElementsByClassName("alert")[0].innerHTML="もう配置できません";
       document.getElementsByClassName("alert")[0].style.backgroundColor="red";
}

// function clickBox (){
//         (this).innerHTML ="";
// }

// document.querySelector("div").addEventListener('selectstart', function(){			
//     console.log("テキストが選択されました");
// });