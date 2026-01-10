function checkCode() {
  const secretCode = "UMA2026"; // 🔐 sirf tumhe pata hoga
  const userCode = document.getElementById("codeInput").value;
  const error = document.getElementById("error");

  if (userCode === secretCode) {
    localStorage.setItem("umaAccess", "granted");
    window.location.href = "index.html";
  } else {
    error.textContent = "Wrong code ❌";
  }
}
