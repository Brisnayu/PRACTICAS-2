const REQUEST = [
    {
        name: 'Brisna',
        location: 'Barcelona',
        email: 'brisna@gmail.com',
        number: +12344556,
        messege: 'Me encantaría adoptar',
    },
    {
        name: 'Miguel',
        location: 'Madrid',
        email: 'miguel@gmail.com',
        number: 98776543,
        messege: 'Necesito una mascota en mi vida',
    },
];

// [ name, location, email, number, messege ] 

const CONTACTS = [
    {
        icon: './assets/2-logo/icon-email.png',
        type: 'Email',
        info: 'migatita@hermosa.com',
    },
    {
        icon: './assets/2-logo/icon-tel.png',
        type: 'Teléfono',
        info: +123456789,
    },
    {
        icon: './assets/2-logo/icon-whatsapp.png',
        type: 'WhatsApp',
        info: +987654321,
    },
];



// [ icon, type, info]

const requestList = document.querySelector('#request-list');
const contactList = document.querySelector('#contacts-list')

// SECTION 1 REQUEST

const getRequestTemplate = (name, location, email, number, messege) => {
    return `
    <div class="request-block">
        <h3>Datos del solicitante</h3>
        <h4>Nombre: ${name}</h4>
        <h4>Localidad: ${location}</h4>
        <p>Contactos: ${email} - ${number}</p>
        <p>Mensaje: ${messege}</p>
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
        newRequest.messege);

    event.target.reset();
};

// SECTION 2 CONTACTS

const getContact = (icon, type, info) => {
    return `
    <div class="container-contacts">
    <img src=${icon} alt=${type} />
    <h3>${type}</h3>
    <p>${info}</p>
    </div>
    `;
};

const setupContactList = () => {

    for (let i = 0; i < CONTACTS.length; i++) {
        const contactElement = CONTACTS[i];

            contactList.innerHTML += getContact (
            contactElement.icon,
            contactElement.type,
            contactElement.info,
        );
    };
};


const form = document.querySelector('#request-form');

form.addEventListener('submit', handledFormSubmit);

setupRequestList();
setupContactList();