document.addEventListener('DOMContentLoaded', () => {
  // 1. Находим все кнопки
  const likeButtons = document.querySelectorAll('.card__like-button');

  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 2. Переключаем класс is-liked у самой кнопки
      button.classList.toggle('is-liked');

      // 3. Меняем текст с 500 мс задержкой (чтобы дать CSS‑анимации сыграть)
      setTimeout(() => {
        const liked = button.classList.contains('is-liked');
        button.textContent = liked ? 'Unlike' : 'Like';
      }, 500);
    });
  });
});
