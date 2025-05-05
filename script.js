document.getElementById("openCard").addEventListener("click", function() {
  document.getElementById("content").classList.remove("hidden");
  this.style.display = "none"; // sembunyikan kartu setelah diklik
});

function blowCandle() {
  const flame = document.getElementById('flame');
  const confettiWrapper = document.getElementById('confettiWrapper');

  if (flame) flame.style.display = 'none';

  // Tambah konfeti 30 buah
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = randomColor();
    confettiWrapper.appendChild(confetti);

    setTimeout(() => {
      confetti.remove(); // hapus konfeti setelah jatuh
    }, 2000);
  }
}

function randomColor() {
  const colors = ['#f06292', '#ba68c8', '#ffd54f', '#4dd0e1', '#81c784'];
  return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("openCard").addEventListener("click", function() {
  document.getElementById("content").classList.add("show");
  this.style.display = "none";
});

function zoomImage(img) {
  const modal = document.getElementById("zoomModal");
  const zoomedImage = document.getElementById("zoomedImage");
  
  zoomedImage.src = img.src;
  modal.style.display = "flex";
}

function closeZoom() {
  document.getElementById("zoomModal").style.display = "none";
}

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * 300);
  const randomY = Math.floor(Math.random() * 300);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
  const phoneNumber = "62881038800897"; // Ganti dengan nomor kamu
  const message = "aku mau jadi pacar kamu";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
