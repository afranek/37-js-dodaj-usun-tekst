let p = document.getElementById("tekst");
let b1 = document.getElementById("dodaj");
let b2 = document.getElementById("usun");


b1.onclick = function (){
    p.textContent = "dowolny tekst";

}

b2.onclick = function (){
    p.textContent = "";
}

// 2 rozwiązanie
// document.getElementById("dodaj").onclick = function (){
//     document.getElementById("tekst").textContent = "dowolny tekst";

// }

// document.getElementById("usun").onclick = function (){
//     document.getElementById("tekst").textContent = "";
// }
