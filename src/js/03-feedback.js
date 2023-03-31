import throttle from 'lodash.throttle';

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
  localStorage.setItem('feedback-form-state', formDataStr);
}

function onPopulateFormData() {
  const savedData = localStorage.getItem('feedback-form-state');

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
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
}
