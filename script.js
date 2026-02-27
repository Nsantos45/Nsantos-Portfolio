document.querySelectorAll('.card').forEach(card => {
card.addEventListener('mouseenter', () => {
card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
});
card.addEventListener('mouseleave', () => {
card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
});
});
