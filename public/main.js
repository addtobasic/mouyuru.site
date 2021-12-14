const strItem = ["人生", "課題", "社会"];
let rand = Math.floor(Math.random() * strItem.length);

let randText = document.getElementById("rand_text");
randText.innerHTML = strItem[rand];
