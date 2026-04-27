async function sendMessage() {
  let input = document.getElementById("user-input");
  let message = input.value;

  addMessage("You", message, "user");

  const res = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message})
  });

  const data = await res.json();

  addMessage("Assistant", data.reply, "bot");

  input.value = "";
}

function addMessage(sender, text, type) {
  let box = document.getElementById("chat-box");
  box.innerHTML += `<div class="message ${type}"><b>${sender}:</b> ${text}</div>`;
}
