const e=document.querySelector(".feedback-form"),t="feedbackFormData",m=()=>{const a=JSON.parse(localStorage.getItem(t))||{};e.elements.email.value=a.email||"",e.elements.message.value=a.message||""},l=()=>{const a={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(t,JSON.stringify(a))};window.addEventListener("DOMContentLoaded",m);e.addEventListener("input",a=>{l()});e.addEventListener("submit",a=>{a.preventDefault();const s={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};if(email===""||message===""){alert("Please fill in both email and message fields!");return}console.log(s),e.reset(),localStorage.removeItem(t)});
//# sourceMappingURL=2-form-90d2e50a.js.map
