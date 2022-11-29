const box = document.querySelector(".box")
const btn = document.querySelector("#btn")
const input = document.querySelector("#url")
const qrImg = document.querySelector(".qr-code img")
const qrdiv = document.querySelector(".qr-code")
btn.addEventListener("click", () => {
    let qrValue = input.value
    if (!qrValue) return
    btn.innerHTML = 'Generating QR Code'
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    box.classList.add("active")
    qrImg.addEventListener("load", () => {
        qrdiv.classList.add("qr")
        btn.innerText = 'Generate QR Code'
    })
    input.addEventListener("keyup", () => {
        box.classList.remove("active")
    })
})
