import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const formInputRef = document.querySelector('.feedback-form input');
const formTextareaRef = document.querySelector('.feedback-form textarea');

onPopulateFormData();

formRef.addEventListener('input', throttle(onInputForm, 500));
formRef.addEventListener('submit', onSubmitForm);

function onInputForm(e) {
  const formDataStr = JSON.stringify({
    email: formInputRef.value,
    message: formTextareaRef.value,
  });
  localStorage.setItem(STORAGE_KEY, formDataStr);
}

function onPopulateFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formInputRef.value = JSON.parse(savedData).email;
    formTextareaRef.value = JSON.parse(savedData).message;
  }
}

function onSubmitForm(e) {
  e.preventDefault();

  if (formInputRef.value === '' || formTextareaRef.value === '') {
    return;
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}
