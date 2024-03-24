const form = document.querySelector(".feedback-form");
const localStorageKey = "feedbackFormData";


const loadFormData = () => {
    const savedFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    form.elements.email.value = savedFormData.email || '';
    form.elements.message.value = savedFormData.message || '';
}

const saveFormData = () => {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
};
window.addEventListener('DOMContentLoaded', loadFormData);
form.addEventListener(`input`, (event) => {
    saveFormData();
})

form.addEventListener(`submit`, (event) => {
event.preventDefault();
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    console.log(formData);

    
    form.reset();
    localStorage.removeItem(localStorageKey);
});