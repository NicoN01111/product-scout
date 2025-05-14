
document.querySelectorAll('.save-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        btn.textContent = '✓ Gespeichert';
        btn.style.backgroundColor = '#28a745';
    });
});

document.getElementById('category').addEventListener('change', function () {
    const category = this.value;
    document.querySelectorAll('.card').forEach(card => {
        if (category === 'alle' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
