const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

function openModal(title, text) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

document.getElementById("continueBtn").onclick = () => {
  openModal(
    "Welcome",
    "This interface is ready for your own application functionality."
  );
};

document.getElementById("privacy").onclick = (e) => {
  e.preventDefault();
  openModal(
    "Privacy",
    "This front-end does not transmit or store passwords, PINs, OTPs, or payment credentials."
  );
};

document.getElementById("terms").onclick = (e) => {
  e.preventDefault();
  openModal(
    "Terms",
    "This page is a front-end interface and contains no real payment processing."
  );
};

document.getElementById("menuBtn").onclick = () => {
  openModal(
    "Menu",
    "Additional navigation can be added here for your own application."
  );
};

document.getElementById("close").onclick = closeModal;
document.getElementById("okBtn").onclick = closeModal;

modal.onclick = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};
