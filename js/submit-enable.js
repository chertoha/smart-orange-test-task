const label = document.querySelector('.js-label');
const checkbox = document.querySelector('.js-checkbox');
const submit = document.querySelector('.js-submit');

label.addEventListener('click', () => {
  submit.disabled = !checkbox.checked;
});
