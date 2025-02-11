const slider = document.getElementById('before-after-slider');
const before = document.getElementById('before-image');
const resizer = document.getElementById('resizer');

let active = false;

resizer.addEventListener('mousedown', () => (active = true));
document.body.addEventListener('mouseup', () => (active = false));
document.body.addEventListener('mouseleave', () => (active = false));

document.body.addEventListener('mousemove', e => {
	if (!active) return;
	updateSlider(e.pageX);
});

resizer.addEventListener('touchstart', () => (active = true));
document.body.addEventListener('touchend', () => (active = false));
document.body.addEventListener('touchcancel', () => (active = false));

document.body.addEventListener('touchmove', e => {
	if (!active) return;
	let touchX = e.touches[0].pageX;
	updateSlider(touchX);
});

function updateSlider(x) {
	let rect = slider.getBoundingClientRect();
	let newWidth = Math.max(0, Math.min(x - rect.left, rect.width));
	before.style.width = `${newWidth}px`;
	resizer.style.left = `${newWidth}px`;
}
