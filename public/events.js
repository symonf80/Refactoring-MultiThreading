let count = 0;
const counterEl = document.querySelector('[data-id="counter"]');
const incEl = document.querySelector('[data-action="inc"]');

incEl.addEventListener('click', () => {
   count++;
   counterEl.textContent = `${count}`;
<<<<<<< HEAD
});
=======
});
>>>>>>> 285b27dde8ccc071862f21fbd8a02fbeab86662f
