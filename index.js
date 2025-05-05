// URLSearchParams allows for retrieving and working with data in URL query params
const params = new URLSearchParams(window.location.search);

// logging query parameter
// console.log(params.get('provider'));

// getting the provider from the url
const provider = params.get('provider');

// grabbing the provider-title element using DOM manipulation
// and then selecting the textContent to assign it the provider value
// so = provider it will update the text

const h1 = document.getElementById('provider-title');
console.log(h1)
h1.textContent = provider; 

// our button will listen for click events and redirect us to this random stackoverflow page
const button = document.getElementById('my-button')
button.addEventListener('click', () => {
    console.log('clicked')
window.location.href = 'https://stackoverflow.com/questions/55119960/inserting-html-tags-in-template-literals-in-react';
})