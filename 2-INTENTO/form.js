const REQUEST = [

];

// [ name, location, email, number, messege ] 

const requestList = document.querySelector('#request-list');

const getRequestTemplate = (name, location, email, number, messege) => {
    return `
    <div class="request-block">
        <h2>${name}</h2>
        <h3>${location}</h3>
        <p>${email} - ${number}</p>
        <p>${messege}</p>
    </div>
    `;
};

const setupRequestList = () => {

    for (let i = 0; i < REQUEST.length; i++) {
        const requestElement = REQUEST[i];

        requestList.innerHTML += getRequestTemplate (
            requestElement.name,
            requestElement.location,
            requestElement.email,
            requestElement.number,
            requestElement.messege,
        );
    };
};


const handledFormSubmit = (event) => {
    event.preventDefault();
    const formElements = event.target.elements;

    const newRequest = {
        name: formElements.name.value,
        location: formElements.location.value,
        email: formElements.email.value,
        number: formElements.number.value,
        messege: formElements.messege.value,
    }

    requestList.innerHTML += getRequestTemplate(
        newRequest.name,
        newRequest.location,
        newRequest.email,
        newRequest.number,
        newRequest.number,
        newRequest.messege);

    event.target.reset();
};

const form = document.querySelector('#request-form');
form.addEventListener('submit', handledFormSubmit);

setupRequestList();
