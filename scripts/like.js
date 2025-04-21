document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.card__like-button');

  likeButtons.forEach(button => {
    // находим именно спан с текстом
    const textEl = button.querySelector('.button__text');

    button.addEventListener('click', () => {
      button.classList.toggle('is-liked');

      setTimeout(() => {
        const liked = button.classList.contains('is-liked');
        textEl.textContent = liked ? 'Unlike' : 'Like';
      }, 500);
    });
  });
});
