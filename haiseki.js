'use strict'
let testBoolian = false;

function clickButton() {
    const name = document.getElementById("name").value;
    let inputPossible1 = false;
    let inputPossible2 = true;
    document.getElementsByClassName("alert")[0].innerHTML = "";
    //document.getElementsByClassName("alert")[0].style.backgroundColor = "";

    if (name === "") {
        //document.getElementsByClassName("alert")[0].style.backgroundColor = "red";
        document.getElementsByClassName("alert")[0].innerHTML = "名前を入力してください";
        return;
    }
    for (let j = 1; j < 5; j++) {
        for (let k = 1; k < 5; k++) {
            let divId = `box${j}-${k}`
            let box = document.getElementById(divId);
            if (box.innerHTML === "") {
                inputPossible1 = true;
            }//console.log(divId);
            if (box.innerHTML === name) {
                if ( testBoolian === false){
                inputPossible2 = false;
                document.getElementsByClassName("alert")[0].innerHTML = "既に入力されている名前です";
               // document.getElementsByClassName("alert")[0].style.backgroundColor = "red";
            }}
        }
    }
    // console.log(inputPossible1);
    console.log(inputPossible2);
    if (inputPossible1) {
        if (inputPossible2) {
            for (let i = 0; i < 1;) {
                let randomeNumber1 = Math.floor(Math.random() * 4) + 1
                let randomeNumber2 = Math.floor(Math.random() * 4) + 1
                let divId = `box${randomeNumber1}-${randomeNumber2}`
                //console.log(divId);
                let box = document.getElementById(divId);
                if (box.innerHTML === "") {
                    box.innerHTML = name;
                    box.style.backgroundColor = "yellow";
                    return;
                }
            }
        }
    } else {

        document.getElementsByClassName("alert")[0].innerHTML = "もう配置できません";
       // document.getElementsByClassName("alert")[0].style.backgroundColor = "red";
    }
};

function namedelete(id) {
    //alert ("この席のIDは"+id+"です")
    let name = document.getElementById(id).innerHTML
    if (name !== "") {
        let flag = confirm("名前を削除してよろしいでしょうか？");
        if (flag === true) {
            console.log(name);
            document.getElementById(id).innerHTML = "";
            document.getElementById(id).style.backgroundColor = "lightblue";
        }
    }
};

function testMode(id){
    if ( testBoolian === false){
        testBoolian = true;
  document.getElementById(id).style.backgroundColor = "red";
    }else{
        testBoolian = false;
        document.getElementById(id).style.backgroundColor = "";
    }

};