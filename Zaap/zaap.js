let decbtn = document.getElementById("DeBtn")
let incbtn = document.getElementById("CeBtn")
let bal = document.getElementById("TotalBal")
let per = document.getElementById("Percent")
let add = document.getElementById("AmountAdd")
let cash = document.getElementById("CashBack")
let msg = document.getElementById("message")

let count = 0;
incbtn.addEventListener("click", function() {
    count = count + 100
    add.textContent = count
    bal.textContent = Number(bal.textContent) + 100
    cash.textContent = Number(cash.textContent) + 10
    per.textContent = Number(per.textContent) + 5
    msg.textContent = "+ 100 Credicted in your account"
    msg.classList.add("text-green-500")
})

decbtn.addEventListener("click", function() {
    count = count - 100
    add.textContent = count
    bal.textContent = Number(bal.textContent) - 100
    cash.textContent = Number(cash.textContent) - 10
    per.textContent = Number(per.textContent) - 5
    msg.textContent = "- 100 Debited from your account"
    msg.classList.add("text-red-500")
})