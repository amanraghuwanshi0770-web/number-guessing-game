let input = document.querySelector("input");
let button = document.querySelector("button");
let container = document.querySelector(".container");

let qrImg = document.createElement("img");
container.appendChild(qrImg);

button.addEventListener("click", () => {
    let text = input.value.trim();

    if(text === ""){
        alert("Please enter text or URL");
        return;
    }

    // QR API
    let qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`;
    
    qrImg.src = qrURL;
});