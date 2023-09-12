const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const phone = document.getElementById('phone');
const password = document.getElementById('password'); // Fixed the typo here
const seat = document.getElementById('seat');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateinputs();
});

const seterror = (Element, message) => {
    const input = Element; // Changed variable name to 'input'
    const errordisplay = input.parentElement.querySelector('.error'); // Find the error element in the parent
    errordisplay.innerText = message;
    input.classList.add('error'); // Add 'error' class to the input
    input.classList.remove('success');
}

const setsuccess = Element => {
    const input = Element; // Changed variable name to 'input'
    const errordisplay = input.parentElement.querySelector('.error'); // Find the error element in the parent
    errordisplay.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
};

const CheckPassword = password => {
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (password.value.match(paswd)) {
        return true;
    } else {
        return false;
    }
}

const validateinputs = () => {
    const fullnamevalue = fullname.value.trim();
    const phonevalue = phone.value.trim();
    const seatvalue = seat.value.trim();
    const passwordvalue = password.value.trim();
    
    if (fullnamevalue === '') {
        seterror(fullname, 'Full name is required');
    } else {
        setsuccess(fullname);
    }
    
    if (phonevalue === '') {
        seterror(phone, 'Please enter your phone number');
    } else {
        setsuccess(phone);
    }
    
    if (seatvalue === '') {
        seterror(seat, 'Please select your seat');
    } else {
        setsuccess(seat);
    }
    
    if (!CheckPassword(passwordvalue)) {
        seterror(password, 'Password should be at least 7 characters and contain at least one numeric digit and a special character');
    } else {
        setsuccess(password);
    }
}

