function openModal(title, html) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").innerHTML = html;
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your message!");
    this.reset();
  });
  