document.querySelectorAll('.dock-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.dock-item.active').classList.remove('active');
    item.classList.add('active');
  });
});
