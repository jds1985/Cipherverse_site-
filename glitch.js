// Simple glitch canvas effect
const canvas = document.getElementById('glitch-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGlitch() {
  ctx.fillStyle = "#0b0b0f";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (Math.random() > 0.97) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
    ctx.fillRect(x, y, Math.random()*200, 5);
  }
  requestAnimationFrame(drawGlitch);
}
drawGlitch();
