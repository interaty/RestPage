// module for creating contact page
const createContactPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const form = document.createElement("form");
  form.classList.add("contact-form");
  
  const headingInput = document.createElement("input");
  headingInput.type = "text";
  headingInput.placeholder = "enter heading";
  form.appendChild(headingInput);

  const adressInput = document.createElement("input");
  adressInput.type = "text";
  adressInput.placeholder = "enter adress";
  form.appendChild(adressInput);

  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.placeholder = "enter phone";
  form.appendChild(phoneInput);

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Submit";
  form.appendChild(submitBtn);

  pageContent.appendChild(form);

  content.appendChild(pageContent);
}

export default createContactPage;