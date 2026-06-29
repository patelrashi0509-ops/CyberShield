function showMessage() {
    alert("Welcome to CyberGuard! Stay Safe Online.");
}

function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (password.length < 6) {
        result.innerHTML = "❌ Weak Password";
    } else if (password.length < 10) {
        result.innerHTML = "⚠️ Medium Password";
    } else {
        result.innerHTML = "✅ Strong Password";
    }
}