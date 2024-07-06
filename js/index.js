let burger = document.querySelector('.burger');
let exit = document.querySelector('.exit');
let header = document.querySelector('header');
let ancors = document.querySelectorAll('nav a');
let wraper = document.querySelector('.wraper');
// при нажатии на ссылку burgerNav пропадает

ancors.forEach(a => {
    a.addEventListener('click', () => {
        header.classList.remove('open');
    });
});

// при нажатии на бургер burgerNav появляется
burger.addEventListener('click', () => {
    header.classList.add('open');
});

// при нажатии на крестик burgerNav пропадает
exit.addEventListener('click', () => {
    header.classList.remove('open');
});

wraper.addEventListener('click', (e) => {
    const click = e.composedPath().includes(header);
    if (!click) {
        header.classList.remove('open');
    }

});


// Карусель
// let imagesСontainer = document.querySelector('.images-container');
// let aboutImages = imagesСontainer.querySelectorAll('img');
// let leftArrow;
// let rightArrow;

// aboutImages.forEach(img => {
//     img.style.display = 'none';
// })

// let currImages = [0, 1, 2];

// changeImages(currImages);

// function changeImages() {


//     for (let i = 0; i < aboutImages.length; i++) {
//         if (currImages.includes(i)) {
//             aboutImages[i].style.display = 'unset';
//         } else {
//             aboutImages[i].style.display = 'none';
//         }
//     }
// }

// if (document.documentElement.clientWidth < 1010) {
//     currImages = [currImages[0]];
//     leftArrow = imagesСontainer.querySelector('.left');
//     rightArrow = imagesСontainer.querySelector('.right');
// } else {
//     currImages = [currImages[0], (currImages[0] + 1) % 5, (currImages[0] + 2) % 5];
// }
// changeImages(currImages)
// window.addEventListener('resize', function(event) {
//     if (document.documentElement.clientWidth < 1010) {
//         currImages = [currImages[0]];
//         leftArrow = imagesСontainer.querySelector('.left');
//         rightArrow = imagesСontainer.querySelector('.right');
//     } else {
//         currImages = [currImages[0], (currImages[0] + 1) % 5, (currImages[0] + 2) % 5];
//     }

//     changeImages()
// }, true);

// leftArrow.addEventListener(`click`, () => {
//     for (let i = 0; i < currImages.length; i++) {
//         console.log(currImages[i])
//         currImages[i]--;
//         console.log(currImages[i])
//     }

//     rightArrow.disabled = false;
//     if (currImages[0] === 0) {
//         leftArrow.disabled = true;
//         console.log(leftArrow, rightArrow)
//     }

//     changeImages()
// });


// rightArrow.addEventListener(`click`, () => {
//     for (let i = 0; i < currImages.length; i++) {
//         console.log(currImages[i])
//         currImages[i]++;
//         console.log(currImages[i])
//     }

//     leftArrow.disabled = false;
//     if (currImages[currImages.length - 1] === 4) {
//         rightArrow.disabled = true;
//     }

//     changeImages()
// });

let iconProfile = document.querySelector('.profile');
let smallPopup = document.querySelector('.small-popup');


iconProfile.addEventListener('click', () => {
    smallPopup.style.transform = 'scaleX(1)';
});

iconProfile.addEventListener('click', () => {
    header.classList.remove('open');
});


wraper.addEventListener('click', (e) => {
    const click = e.composedPath().includes(iconProfile) || e.composedPath().includes(smallPopup);
    if (!click) {
        smallPopup.style.transform = 'scaleX(0)';
    }
});

let registerLink = document.querySelector('.register-link');
let loginLink = document.querySelector('.login-link');

let registerPopup = document.querySelector('.register-popup');
let loginPopup = document.querySelector('.login-popup');

let darkBackground = document.querySelector('.dark-background');

function showPopup(popup) {
    popup.style.transform = 'scaleX(1)';
    popup.style.zIndex = 110;
    darkBackground.style.display = 'block';
    smallPopupLogined.style.transform = 'scaleX(0)';
    smallPopup.style.transform = 'scaleX(0)';
}

function hidePopup(popup) {
    popup.style.transform = 'scaleX(0)';
    popup.style.zIndex = 100;
    darkBackground.style.display = 'none';
    registerError.innerHTML = ``;
    loginError.innerHTML = ``;
    buyCardError.innerHTML = ``;
}

darkBackground.addEventListener('mousedown', (e) => {
    const click = e.composedPath().includes(registerPopup);
    if (!click) {
        hidePopup(registerPopup);
    }
});

darkBackground.addEventListener('mousedown', (e) => {
    const click = e.composedPath().includes(loginPopup);
    if (!click) {
        hidePopup(loginPopup);
    }
});

registerLink.addEventListener('click', () => {
    showPopup(registerPopup);

});

loginLink.addEventListener('click', () => {
    showPopup(loginPopup);
});

let changeFormLogin = document.querySelector('.change-form-login')
let changeFormRegister = document.querySelector('.change-form-register');

changeFormRegister.addEventListener('click', () => {
    hidePopup(loginPopup);
    showPopup(registerPopup);
});

changeFormLogin.addEventListener('click', () => {
    hidePopup(registerPopup);
    showPopup(loginPopup);
});


let signUpLc = document.querySelector('.sign-up-lc');
let logInLc = document.querySelector('.log-in-lc');

signUpLc.addEventListener('click', () => {
    showPopup(registerPopup);
});

logInLc.addEventListener('click', () => {
    showPopup(loginPopup);
});

document.querySelector('.login-popup .close-popup').addEventListener('click', () => {
    hidePopup(loginPopup);
});

document.querySelector('.register-popup .close-popup').addEventListener('click', () => {
    hidePopup(registerPopup);
});

let firstLettersCircle = document.querySelector('.first-letters-circle');

firstLettersCircle.addEventListener('click', () => {
    header.classList.remove('open');
});

let registerError = document.querySelector('.register-error');

let isLogined = false;
let LoginedUser;

registerPopup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let firstNameInput = document.querySelector(".register-popup input[name=firstName]");
    let lastNameInput = document.querySelector(".register-popup input[name=lastName]");
    let eMailInput = document.querySelector(".register-popup input[name=eMail]");
    let passwordInput = document.querySelector(".register-popup input[name=password]");

    if (!firstNameInput.value || !lastNameInput.value || !eMailInput.value || !passwordInput.value) {
        registerError.innerHTML = 'Заполните все поля!';
        return;
    }

    if (passwordInput.value.length < 8) {
        registerError.innerHTML = 'Длина пароля меньше 8!';
        return;
    }

    let cardNumber = '';
    let chars = '01234567890ABCDEF';
    for (let i = 0; i < 9; i++) {
        cardNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    let user = {
        firstName: firstNameInput.value.charAt(0).toUpperCase() + firstNameInput.value.slice(1).toLowerCase(),
        lastName: lastNameInput.value.charAt(0).toUpperCase() + lastNameInput.value.slice(1).toLowerCase(),
        eMail: eMailInput.value,
        password: passwordInput.value,
        cardNumber: cardNumber,
        visits: 1,
        bonuses: 0,
        rentedBooks: [],
        hasSubscription: false,
    };

    localStorage.setItem(eMailInput.value + '***' + cardNumber, JSON.stringify(user));
    isLogined = true;
    LoginedUser = user;
    document.querySelector('.small-popup-logined-card-number').innerHTML = LoginedUser.cardNumber;
    iconProfile.style.display = 'none';
    firstLettersCircle.innerHTML = user.firstName[0] + user.lastName[0];
    firstLettersCircle.style.display = 'flex';
    firstLettersCircle.title = `${user.firstName} ${user.lastName}`;
    // changeFavorites('Winter');

    document.querySelector('.get h3').innerHTML = 'Visit your profile';
    document.querySelector('.get p').innerHTML = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
    document.querySelector('.get .sign-up-lc').style.display = 'none';
    document.querySelector('.get .log-in-lc').style.display = 'none';
    document.querySelector('.get .show-profile-lc').style.display = 'unset';
    document.querySelector('.get .show-profile-lc').addEventListener('click', () => {
        let booksList = ``;
        if (LoginedUser.rentedBooks.length == 0) {
            booksList = `<li>No rented books</li>`;
        } else {
            LoginedUser.rentedBooks.forEach(book => {
                booksList += `<li>${book}</li>`;
            });
        }

        profileInfo.innerHTML = `
    <svg class="close-popup" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path d="M2 16.8507L17 2.00001" stroke="#0C0C0E" stroke-width="3"/>
    <path d="M2 2.14928L17 17" stroke="#0C0C0E" stroke-width="3"/>
    </svg>
    <div class="left">
    <div class="name">
    <div class="first-letters">${LoginedUser.firstName[0] + LoginedUser.lastName[0]}</div>
    <div class="full">${LoginedUser.firstName} ${LoginedUser.lastName}</div>
    </div>
    </div>
    
    <div class="right">
    
    <p class="title">MY PROFILE</p>
    <div class="user-values">
    <div class="visits_info">
    <span class="text">
    Visits
    </span>
    <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd"
    d="M10.5 10C13.2614 10 15.5 7.76143 15.5 5C15.5 2.23857 13.2614 0 10.5 0C7.73857 0 5.5 2.23857 5.5 5C5.5 7.76143 7.73857 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5H0.5C0.5 18.3478 1.55357 15.8043 3.42894 13.9289C5.30429 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z"
    fill="#BB945F" />
    </svg>
    </span>
    <span class="number">
    ${LoginedUser.visits}
                        </span>
                    </div>

                    <div class="bonuses_info">
                    <span class="text">
                    Bonuses
                    </span>
                    <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                    d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z"
                    fill="#BB945F" />
                    </svg>
                    </span>
                    <span class="number">
                    ${LoginedUser.bonuses}
                    </span>
                    </div>
                    
                    <div class="book_info">
                        <span class="text">
                        Books
                        </span>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <rect width="20" height="21" fill="#BB945F" />
                                <rect x="2" width="1" height="19" fill="#826844" />
                                <rect x="1" width="1" height="21" fill="white" />
                                </svg>
                                </span>
                                <span class="number">
                                ${LoginedUser.rentedBooks.length}
                                </span>
                                </div>
                                </div>
                                <p class="rented-books-text">Rented books</p>
                                <ul class="rented-books">
                                ${booksList}
                                </ul>
                                
                                <p class="card-number-p">
                                <span class="card-number-text">Card number</span>
                                <span class="card-number">${LoginedUser.cardNumber}</span>
                                <svg class="copy-card-number" xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                <rect x="2.46826" y="0.25" width="10.5917" height="9.5" rx="0.75" stroke="black"
                                stroke-width="0.5" />
                                <rect x="0.25" y="2.25" width="10.5917" height="9.5" rx="0.75" fill="white" stroke="black"
                                stroke-width="0.5" />
                                </svg>
                                <span class="copy-result"></span>
                                </p>
                                </div>
                                `;
        copyCardNumber = document.querySelector('.copy-card-number');
        console.log(copyCardNumber)
        copyCardNumber.addEventListener('click', () => {
            console.log('click');
            navigator.clipboard.writeText(LoginedUser.cardNumber);
            document.querySelector('.copy-result').innerHTML = 'Copied!';
        });
        let closeMyProfile = document.querySelector('.my-profile .close-popup');
        closeMyProfile.addEventListener('click', () => {
            hidePopup(profileInfo);
        });
        showPopup(profileInfo)
    });
    let result = document.querySelector(".find .result");
    let check = document.querySelector(".find button");
    document.querySelector(".find input[name=name]").value = `${LoginedUser.firstName} ${LoginedUser.lastName}`;
    document.querySelector(".find input[name=name]").disabled = true;
    document.querySelector(".find input[name=number]").value = LoginedUser.cardNumber;
    document.querySelector(".find input[name=number]").disabled = true;
    result.innerHTML = `<div class="user-values">
        <div class="visits_info">
        <span class="text">
        Visits
        </span>
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
        d="M10.5 10C13.2614 10 15.5 7.76143 15.5 5C15.5 2.23857 13.2614 0 10.5 0C7.73857 0 5.5 2.23857 5.5 5C5.5 7.76143 7.73857 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5H0.5C0.5 18.3478 1.55357 15.8043 3.42894 13.9289C5.30429 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z"
        fill="#BB945F" />
        </svg>
        </span>
        <span class="number">
        ${user.visits}
        </span>
        </div>

        <div class="bonuses_info">
        <span class="text">
        Bonuses
        </span>
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path
        d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z"
        fill="#BB945F" />
        </svg>
        </span>
        <span class="number">
        ${user.bonuses}
        </span>
        </div>
        <div class="book_info">
        <span class="text">
        Books
        </span>
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <rect width="20" height="21" fill="#BB945F" />
        <rect x="2" width="1" height="19" fill="#826844" />
        <rect x="1" width="1" height="21" fill="white" />
        </svg>
        </span>
        <span class="number">
        ${user.rentedBooks.length}
        </span>
        </div>
        </div>`;
    check.style.display = 'none';
    result.style.display = 'flex';
    firstNameInput.value = ``;
    lastNameInput.value = ``;
    eMailInput.value = ``;
    passwordInput.value = ``;
    winterLable.querySelector('input').checked = true;
    updateBuyButtons();
    console.log('-------------> !!!')
    hidePopup(registerPopup);
});

let loginError = document.querySelector('.login-error');

loginPopup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let eMailOrNumber = document.querySelector(".login-popup input[name=eMailOrNumber]");
    let passwordInput = document.querySelector(".login-popup input[name=password]");

    if (!eMailOrNumber.value || !passwordInput.value) {
        loginError.innerHTML = 'Заполните все поля!';;
        return;
    }

    if (passwordInput.value.length < 8) {
        loginError.innerHTML = 'Длина пароля меньше 8!';
        return;
    }

    for (let key in localStorage) {
        if (key.split('***').includes(eMailOrNumber.value)) {
            LoginedUser = JSON.parse(localStorage.getItem(key));
        }
    }

    if (!LoginedUser) {
        loginError.innerHTML = 'Не корректный логин!';
        return;
    }


    console.log(LoginedUser.password, passwordInput.value)
    if (LoginedUser.password != passwordInput.value) {
        loginError.innerHTML = 'Не правильный пароль!';
        return;
    }

    document.querySelector('.small-popup-logined-card-number').innerHTML = LoginedUser.cardNumber;

    isLogined = true;
    LoginedUser.visits += 1;
    localStorage.setItem(`${LoginedUser.eMail}***${LoginedUser.cardNumber}`, JSON.stringify(LoginedUser));
    iconProfile.style.display = 'none';
    firstLettersCircle.innerHTML = LoginedUser.firstName[0] + LoginedUser.lastName[0];
    firstLettersCircle.style.display = 'flex';
    firstLettersCircle.title = `${LoginedUser.firstName} ${LoginedUser.lastName}`;
    // changeFavorites('Winter');

    document.querySelector('.get h3').innerHTML = 'Visit your profile';
    document.querySelector('.get p').innerHTML = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
    document.querySelector('.get .sign-up-lc').style.display = 'none';
    document.querySelector('.get .log-in-lc').style.display = 'none';
    document.querySelector('.get .show-profile-lc').style.display = 'unset';
    document.querySelector('.get .show-profile-lc').addEventListener('click', () => {
        let booksList = ``;
        if (LoginedUser.rentedBooks.length == 0) {
            booksList = `<li>No rented books</li>`;
        } else {
            LoginedUser.rentedBooks.forEach(book => {
                booksList += `<li>${book}</li>`;
            });
        }

        profileInfo.innerHTML = `
    <svg class="close-popup" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path d="M2 16.8507L17 2.00001" stroke="#0C0C0E" stroke-width="3"/>
    <path d="M2 2.14928L17 17" stroke="#0C0C0E" stroke-width="3"/>
    </svg>
    <div class="left">
    <div class="name">
    <div class="first-letters">${LoginedUser.firstName[0] + LoginedUser.lastName[0]}</div>
    <div class="full">${LoginedUser.firstName} ${LoginedUser.lastName}</div>
    </div>
    </div>
    
    <div class="right">
    
    <p class="title">MY PROFILE</p>
    <div class="user-values">
    <div class="visits_info">
    <span class="text">
    Visits
    </span>
    <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd"
    d="M10.5 10C13.2614 10 15.5 7.76143 15.5 5C15.5 2.23857 13.2614 0 10.5 0C7.73857 0 5.5 2.23857 5.5 5C5.5 7.76143 7.73857 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5H0.5C0.5 18.3478 1.55357 15.8043 3.42894 13.9289C5.30429 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z"
    fill="#BB945F" />
    </svg>
    </span>
    <span class="number">
    ${LoginedUser.visits}
                        </span>
                    </div>

                    <div class="bonuses_info">
                    <span class="text">
                    Bonuses
                    </span>
                    <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                    d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z"
                    fill="#BB945F" />
                    </svg>
                    </span>
                    <span class="number">
                    ${LoginedUser.bonuses}
                    </span>
                    </div>
                    
                    <div class="book_info">
                        <span class="text">
                        Books
                        </span>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <rect width="20" height="21" fill="#BB945F" />
                                <rect x="2" width="1" height="19" fill="#826844" />
                                <rect x="1" width="1" height="21" fill="white" />
                                </svg>
                                </span>
                                <span class="number">
                                ${LoginedUser.rentedBooks.length}
                                </span>
                                </div>
                                </div>
                                <p class="rented-books-text">Rented books</p>
                                <ul class="rented-books">
                                ${booksList}
                                </ul>
                                
                                <p class="card-number-p">
                                <span class="card-number-text">Card number</span>
                                <span class="card-number">${LoginedUser.cardNumber}</span>
                                <svg class="copy-card-number" xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                <rect x="2.46826" y="0.25" width="10.5917" height="9.5" rx="0.75" stroke="black"
                                stroke-width="0.5" />
                                <rect x="0.25" y="2.25" width="10.5917" height="9.5" rx="0.75" fill="white" stroke="black"
                                stroke-width="0.5" />
                                </svg>
                                <span class="copy-result"></span>
                                </p>
                                </div>
                                `;
        copyCardNumber = document.querySelector('.copy-card-number');
        console.log(copyCardNumber)
        copyCardNumber.addEventListener('click', () => {
            console.log('click');
            navigator.clipboard.writeText(LoginedUser.cardNumber);
            document.querySelector('.copy-result').innerHTML = 'Copied!';
        });
        let closeMyProfile = document.querySelector('.my-profile .close-popup');
        closeMyProfile.addEventListener('click', () => {
            hidePopup(profileInfo);
        });
        showPopup(profileInfo);
    });

    let result = document.querySelector(".find .result");
    let check = document.querySelector(".find button");
    document.querySelector(".find input[name=name]").value = `${LoginedUser.firstName} ${LoginedUser.lastName}`;
    document.querySelector(".find input[name=name]").disabled = true;
    document.querySelector(".find input[name=number]").value = LoginedUser.cardNumber;
    document.querySelector(".find input[name=number]").disabled = true;
    result.innerHTML = `<div class="user-values">
        <div class="visits_info">
        <span class="text">
        Visits
        </span>
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
        d="M10.5 10C13.2614 10 15.5 7.76143 15.5 5C15.5 2.23857 13.2614 0 10.5 0C7.73857 0 5.5 2.23857 5.5 5C5.5 7.76143 7.73857 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5H0.5C0.5 18.3478 1.55357 15.8043 3.42894 13.9289C5.30429 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z"
        fill="#BB945F" />
        </svg>
        </span>
        <span class="number">
        ${LoginedUser.visits}
        </span>
        </div>

        <div class="bonuses_info">
        <span class="text">
        Bonuses
        </span>
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path
        d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z"
        fill="#BB945F" />
        </svg>
        </span>
        <span class="number">
        ${LoginedUser.bonuses}
        </span>
        </div>
        <div class="book_info">
        <span class="text">
        Books
        </span>
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <rect width="20" height="21" fill="#BB945F" />
        <rect x="2" width="1" height="19" fill="#826844" />
        <rect x="1" width="1" height="21" fill="white" />
        </svg>
        </span>
        <span class="number">
        ${LoginedUser.rentedBooks.length}
        </span>
        </div>
        </div>`;
    check.style.display = 'none';
    result.style.display = 'flex';
    eMailOrNumber.value = ``;
    passwordInput.value = ``;
    createCards()
    seasonRadios = document.querySelectorAll('.radio');
    seasonRadios.forEach(onTabClick);
    updateBuyButtons();
    hidePopup(loginPopup);
});

let smallPopupLogined = document.querySelector('.small-popup-logined');
firstLettersCircle.addEventListener('click', () => {
    smallPopupLogined.style.transform = 'scaleX(1)';
});


wraper.addEventListener('click', (e) => {
    const click = e.composedPath().includes(firstLettersCircle) || e.composedPath().includes(smallPopupLogined);
    if (!click) {
        smallPopupLogined.style.transform = 'scaleX(0)';
    }
});

document.querySelector('.small-popup-logined-logout').addEventListener('click', () => {
    isLogined = false;
    LoginedUser = undefined;
    iconProfile.style.display = 'inline';
    firstLettersCircle.style.display = 'none';
    smallPopupLogined.style.transform = 'scaleX(0)';
    document.querySelector('.get h3').innerHTML = 'Get a reader card';
    document.querySelector('.get p').innerHTML = 'You will be able to see a reader card after logging into account or you can register a new account';
    document.querySelector('.get .sign-up-lc').style.display = 'inline-block';
    document.querySelector('.get .log-in-lc').style.display = 'inline-block';
    document.querySelector('.get .show-profile-lc').style.display = 'none';
    document.querySelector('.get .sign-up-lc').addEventListener('click', () => {
        showPopup(registerPopup);
    });
    document.querySelector('.get .log-in-lc').addEventListener('click', () => {
        showPopup(loginPopup);
    });

    document.querySelector(".find .result").style.display = 'none';
    document.querySelector(".find button").style.display = 'block';
    let nameInput = document.querySelector(".find input[name=name]");
    let numberInput = document.querySelector(".find input[name=number]");

    nameInput.value = ``;
    numberInput.value = ``;

    nameInput.disabled = false;
    numberInput.disabled = false;
    createCards()
    seasonRadios = document.querySelectorAll('.radio');
    seasonRadios.forEach(onTabClick);
    updateBuyButtons();
    // changeFavorites('Winter')
});

let profileInfo = document.querySelector('.my-profile');
let smallPopupLoginedProfile = document.querySelector('.small-popup-logined-profile');

let copyCardNumber;

smallPopupLoginedProfile.addEventListener('click', () => {

    let booksList = ``;
    if (LoginedUser.rentedBooks.length == 0) {
        booksList = `<li>No rented books</li>`;
    } else {
        LoginedUser.rentedBooks.forEach(book => {
            booksList += `<li>${book}</li>`;
        });
    }

    profileInfo.innerHTML = `
    <svg class="close-popup" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path d="M2 16.8507L17 2.00001" stroke="#0C0C0E" stroke-width="3"/>
    <path d="M2 2.14928L17 17" stroke="#0C0C0E" stroke-width="3"/>
    </svg>
    <div class="left">
    <div class="name">
    <div class="first-letters">${LoginedUser.firstName[0] + LoginedUser.lastName[0]}</div>
    <div class="full">${LoginedUser.firstName} ${LoginedUser.lastName}</div>
    </div>
    </div>
    
    <div class="right">
    
    <p class="title">MY PROFILE</p>
    <div class="user-values">
    <div class="visits_info">
    <span class="text">
    Visits
    </span>
    <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd"
    d="M10.5 10C13.2614 10 15.5 7.76143 15.5 5C15.5 2.23857 13.2614 0 10.5 0C7.73857 0 5.5 2.23857 5.5 5C5.5 7.76143 7.73857 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5H0.5C0.5 18.3478 1.55357 15.8043 3.42894 13.9289C5.30429 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z"
    fill="#BB945F" />
    </svg>
    </span>
    <span class="number">
    ${LoginedUser.visits}
                        </span>
                    </div>

                    <div class="bonuses_info">
                    <span class="text">
                    Bonuses
                    </span>
                    <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                    d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z"
                    fill="#BB945F" />
                    </svg>
                    </span>
                    <span class="number">
                    ${LoginedUser.bonuses}
                    </span>
                    </div>
                    
                    <div class="book_info">
                        <span class="text">
                        Books
                        </span>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <rect width="20" height="21" fill="#BB945F" />
                                <rect x="2" width="1" height="19" fill="#826844" />
                                <rect x="1" width="1" height="21" fill="white" />
                                </svg>
                                </span>
                                <span class="number">
                                ${LoginedUser.rentedBooks.length}
                                </span>
                                </div>
                                </div>
                                <p class="rented-books-text">Rented books</p>
                                <ul class="rented-books">
                                ${booksList}
                                </ul>
                                
                                <p class="card-number-p">
                                <span class="card-number-text">Card number</span>
                                <span class="card-number">${LoginedUser.cardNumber}</span>
                                <svg class="copy-card-number" xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                <rect x="2.46826" y="0.25" width="10.5917" height="9.5" rx="0.75" stroke="black"
                                stroke-width="0.5" />
                                <rect x="0.25" y="2.25" width="10.5917" height="9.5" rx="0.75" fill="white" stroke="black"
                                stroke-width="0.5" />
                                </svg>
                                <span class="copy-result"></span>
                                </p>
                                </div>
                                `;
    copyCardNumber = document.querySelector('.copy-card-number');
    console.log(copyCardNumber)
    copyCardNumber.addEventListener('click', () => {
        console.log('click');
        navigator.clipboard.writeText(LoginedUser.cardNumber);
        document.querySelector('.copy-result').innerHTML = 'Copied!';
    });
    let closeMyProfile = document.querySelector('.my-profile .close-popup');
    closeMyProfile.addEventListener('click', () => {
        hidePopup(profileInfo);
    });
    showPopup(profileInfo);
});


darkBackground.addEventListener('mousedown', (e) => {
    const click = e.composedPath().includes(profileInfo);
    if (!click) {
        hidePopup(profileInfo);
    }
});


let findLibraryCard = document.querySelector('.find');
findLibraryCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('find');
    let nameInput = document.querySelector(".find input[name=name]");
    let numberInput = document.querySelector(".find input[name=number]");

    let user;
    Object.keys(localStorage).forEach(key => {
        if (numberInput.value && key.includes(numberInput.value)) {
            user = JSON.parse(localStorage.getItem(key));
            console.log(user.firstName, user.lastName);
            console.log()
            if (nameInput.value.toLowerCase().split(' ')[0] != user.firstName.toLowerCase() || nameInput.value.toLowerCase().split(' ')[1] != user.lastName.toLowerCase()) {
                user = undefined;
            }
        }
    });

    let result = document.querySelector(".find .result");
    let check = document.querySelector(".find button");
    if (user) {
        console.log(user);
        document.querySelector(".find input[name=name]").value = `${user.firstName} ${user.lastName}`;
        document.querySelector(".find input[name=name]").disabled = true;
        document.querySelector(".find input[name=number]").value = user.cardNumber;
        document.querySelector(".find input[name=number]").disabled = true;
        result.innerHTML = `<div class="user-values">
        <div class="visits_info">
        <span class="text">
        Visits
        </span>
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
        d="M10.5 10C13.2614 10 15.5 7.76143 15.5 5C15.5 2.23857 13.2614 0 10.5 0C7.73857 0 5.5 2.23857 5.5 5C5.5 7.76143 7.73857 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5H0.5C0.5 18.3478 1.55357 15.8043 3.42894 13.9289C5.30429 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z"
        fill="#BB945F" />
        </svg>
        </span>
        <span class="number">
        ${user.visits}
        </span>
        </div>

        <div class="bonuses_info">
        <span class="text">
        Bonuses
        </span>
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path
        d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z"
        fill="#BB945F" />
        </svg>
        </span>
        <span class="number">
        ${user.bonuses}
        </span>
        </div>
        <div class="book_info">
        <span class="text">
        Books
        </span>
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <rect width="20" height="21" fill="#BB945F" />
        <rect x="2" width="1" height="19" fill="#826844" />
        <rect x="1" width="1" height="21" fill="white" />
        </svg>
        </span>
        <span class="number">
        ${user.rentedBooks.length}
        </span>
        </div>
        </div>`;
        check.style.display = 'none';
        result.style.display = 'flex';

        setTimeout(() => {
            result.innerHTML = ``;
            result.style.marginTop = '15px';
            check.style.display = 'block';
            nameInput.value = ``;
            nameInput.disabled = false;
            numberInput.value = ``;
            numberInput.disabled = false;
        }, 10000);
    } else {
        result.style.marginTop = '5px';
        result.innerHTML = 'Некорректные данные!';
        result.style.display = 'flex';
        console.log('Nothing to show(')
    }
});


let booksInformation = [
    {
        season: `Winter`,
        title: `The Book Eaters`,
        author: `Sunyi Dean`,
        description: `An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.`,
        image: `winter-1.png`,
    },
    {
        season: `Winter`,
        title: `Cackle`,
        author: `Rachel Harrison`,
        description: `Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.`,
        image: `winter-2.png`,
    },
    {
        season: `Winter`,
        title: `Dante: Poet of the Secular World`,
        author: `Erich Auerbach`,
        description: `Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.`,
        image: `winter-3.png`,
    },
    {
        season: `Winter`,
        title: `The Last Queen`,
        author: `Clive Irving`,
        description: `A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.`,
        image: `winter-4.png`,
    },
    {
        season: `Spring`,
        title: `The Body`,
        author: `Stephen King`,
        description: `Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.`,
        image: `spring-1.png`,
    },
    {
        season: `Spring`,
        title: `Carry: A Memoir of Survival on Stolen Land`,
        author: `Toni Jenson`,
        description: `This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.`,
        image: `spring-2.png`,
    },
    {
        season: `Spring`,
        title: `Days of Distraction`,
        author: `Alexandra Chang`,
        description: `A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.`,
        image: `spring-3.png`,
    },
    {
        season: `Spring`,
        title: `Dominicana`,
        author: `Angie Cruz`,
        description: `A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.`,
        image: `spring-4.png`,
    },
    {
        season: `Summer`,
        title: `Crude: A Memoir`,
        author: `Pablo Fajardo & ​​Sophie Tardy-Joubert`,
        description: `Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people`,
        image: `summer-1.png`,
    },
    {
        season: `Summer`,
        title: `Let My People Go Surfing`,
        author: `Yvon Chouinard`,
        description: `Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.`,
        image: `summer-2.png`,
    },
    {
        season: `Summer`,
        title: `The Octopus Museum: Poems`,
        author: `Brenda Shaughnessy`,
        description: `This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.`,
        image: `summer-3.png`,
    },
    {
        season: `Summer`,
        title: `Shark Dialogues: A Novel`,
        author: `Kiana Davenport`,
        description: `An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.`,
        image: `summer-4.png`,
    },
    {
        season: `Autumn`,
        title: `Casual Conversation`,
        author: `Renia White`,
        description: `White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity.`,
        image: `autumn-1.png`,
    },
    {
        season: `Autumn`,
        title: `The Great Fire`,
        author: `Lou Ureneck`,
        description: `The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide`,
        image: `autumn-2.png`,
    },
    {
        season: `Autumn`,
        title: `Rickey: The Life and Legend`,
        author: `Howard Bryant`,
        description: `With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?`,
        image: `autumn-3.png`,
    },
    {
        season: `Autumn`,
        title: `Slug: And Other Stories`,
        author: `Megan Milks`,
        description: `Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.`,
        image: `autumn-4.png`,
    },
];

let bookCardsActive = document.querySelector('.cards-active');
let bookCardsHidden = document.querySelector('.cards-hidden');

let winterLable = document.querySelector('#winter');
let springLable = document.querySelector('#spring');
let summerLable = document.querySelector('#summer');
let autumnLable = document.querySelector('#autumn');

// document.addEventListener('click', (e) => {
//     let season;
//     if (e.composedPath().includes(winterLable)) {
//         season = 'Winter';
//     } else if (e.composedPath().includes(springLable)) {
//         season = 'Spring';
//     } else if (e.composedPath().includes(summerLable)) {
//         season = 'Summer';
//     } else if (e.composedPath().includes(autumnLable)) {
//         season = 'Autumn';
//     }
//     if (season) {
//         changeFavorites(season)
//     }
// });


function createCards() {
    winterLable.querySelector('input').checked = true;
    // let winterCards = `<div class="cards winter">`;
    let winterCards = `<div class="cards cards-active winter">`;
    let springCards = `<div class="cards spring">`;
    let summerCards = `<div class="cards summer">`;
    let autumnCards = `<div class="cards autumn">`;

    booksInformation.forEach(book => {
        buttonText = 'Buy';
        buttonClass = 'buy';
        buttonDisabled = '';
        if (LoginedUser && LoginedUser.rentedBooks.includes(`${book.title}, ${book.author}`)) {
            buttonText = 'Own';
            buttonClass = 'own';
            buttonDisabled = 'disabled';
        }

        let bookhtml = `
        <div class="card">
            <h3>Staff Picks</h3>
            <div class="line"></div>
            <h4>${book.title}<br>
                <span>By ${book.author}</span>
            </h4>
            <p>${book.description}</p>
            <button class="${buttonClass}" id="${book.title}" ${buttonDisabled}>${buttonText}</button>
            <img src="assets/${book.image}" alt="${book.title}">
        </div>
        `;
        if (book.season == 'Winter') {
            winterCards += bookhtml;
        } else if (book.season == 'Spring') {
            springCards += bookhtml;
        } else if (book.season == 'Summer') {
            summerCards += bookhtml;
        } else if (book.season == 'Autumn') {
            autumnCards += bookhtml;
        }
    });
    winterCards += `</div>`;
    springCards += `</div>`;
    summerCards += `</div>`;
    autumnCards += `</div>`;
    document.querySelector('.cards-wrapper').innerHTML = winterCards + springCards + summerCards + autumnCards;
}

createCards()


let seasonRadios = document.querySelectorAll('.radio');
seasonRadios.forEach(onTabClick);

function onTabClick(item) {
    let seasonCards = document.querySelectorAll('.cards');
    item.addEventListener('click', () => {
        let currentRadio = item;
        currentRadio.querySelector('input').checked = true
        // console.log(currentRadio);
        let currentCards = document.querySelector(`.cards.${currentRadio.id}`);
        // console.log(tab);
        seasonCards.forEach(r => {
            r.classList.remove('cards-active');
        });
        if (!currentCards.classList.contains('cards-active')) {
            
            currentCards.classList.add('cards-active');
        }
    });
}







// function changeFavorites(season) {
//     if (season == 'Winter') {
//         winterLable.querySelector('input').checked = true;
//     } else if (season == 'Spring') {
//         springLable.querySelector('input').checked = true;
//     } else if (season == 'Summer') {
//         summerLable.querySelector('input').checked = true;
//     } else if (season == 'Autumn') {
//         autumnLable.querySelector('input').checked = true;
//     }

//     let seasonRadios = document.querySelectorAll('.radio');
//     let seasonCards = document.querySelectorAll('.cards');

//     seasonRadios.forEach(radio => {
//         radio.addEventListener('click', () => {
//             let currentCards = document.querySelector(`.card.${radio.id}`);
//             console.log(currentCards)
//         });
//     });
// }


// setInterval(() => {console.log(bookCards.style.opacity)}, 10);

// document.querySelector('#winter').addEventListener('click', () => {
//     bookCards.style.opacity = '0';
//     setTimeout(() => {
//         bookCards.innerHTML = ``;
//         booksInformation.forEach(book => {
//             if (book.season == 'Winter') {

//                 bookCards.innerHTML += `
//             <div class="card">
//             <h3>Staff Picks</h3>
//             <div class="line"></div>
//                         <h4>${book.title}<br>
//                             <span>By ${book.author}</span>
//                         </h4>
//                         <p>${book.description}</p>

//                         <button class="buy" id="${book.title}">Buy</button>
//                         <img src="assets/${book.image}" alt="${book.title}">
//                         </div>
//             `;
//             }
//         });
//         bookCards.style.opacity = '1';
//         updateBuyButtons();
//     }, 1000);
// });


// document.querySelector('#spring').addEventListener('click', () => {
//     bookCards.style.opacity = '0';
//     setTimeout(() => {
//         bookCards.innerHTML = ``;
//         booksInformation.forEach(book => {
//             if (book.season == 'Spring') {
//                 bookCards.innerHTML += `
//             <div class="card">
//             <h3>Staff Picks</h3>
//             <div class="line"></div>
//             <h4>${book.title}<br>
//             <span>By ${book.author}</span>
//             </h4>
//             <p>${book.description}</p>

//             <button class="buy" id="${book.title}">Buy</button>
//             <img src="assets/${book.image}" alt="${book.title}">
//             </div>
//             `;
//             }
//         });
//         bookCards.style.opacity = '1';
//         updateBuyButtons();
//     }, 1000);
// });


// document.querySelector('#summer').addEventListener('click', () => {
//     bookCards.style.opacity = '0';
//     setTimeout(() => {
//         bookCards.innerHTML = ``;
//         booksInformation.forEach(book => {
//             if (book.season == 'Summer') {
//                 bookCards.innerHTML += `
//             <div class="card">
//             <h3>Staff Picks</h3>
//             <div class="line"></div>
//             <h4>${book.title}<br>
//             <span>By ${book.author}</span>
//             </h4>
//             <p>${book.description}</p>

//             <button class="buy" id="${book.title}">Buy</button>
//             <img src="assets/${book.image}" alt="${book.title}">
//             </div>
//             `;
//             }
//         });
//         bookCards.style.opacity = '1';
//         updateBuyButtons();
//     }, 1000);
// });


// document.querySelector('#autumn').addEventListener('click', () => {
//     bookCards.style.opacity = '0';
//     setTimeout(() => {
//         bookCards.innerHTML = ``;
//         booksInformation.forEach(book => {
//             if (book.season == 'Autumn') {
//                 bookCards.innerHTML += `
//             <div class="card">
//             <h3>Staff Picks</h3>
//             <div class="line"></div>
//             <h4>${book.title}<br>
//             <span>By ${book.author}</span>
//             </h4>
//             <p>${book.description}</p>

//             <button class="buy" id="${book.title}">Buy</button>
//             <img src="assets/${book.image}" alt="${book.title}">
//             </div>
//             `;
//             }
//         });
//         bookCards.style.opacity = '1';
//         updateBuyButtons();
//     }, 1000);
// });

let buyCardPopup = document.querySelector('.buy-card-popup');

darkBackground.addEventListener('mousedown', (e) => {
    const click = e.composedPath().includes(buyCardPopup);
    if (!click) {
        hidePopup(buyCardPopup);
    }
});

document.querySelector('.buy-card-popup .close-popup').addEventListener('click', () => {
    hidePopup(buyCardPopup);
});

buyCardError = document.querySelector('.buy-card-error');
buyCardPopup.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(12)
    let bankCardNumberInput = document.querySelector('.buy-card-popup input[name=bankCardNumber]')
    let expirationCode1Input = document.querySelector('.buy-card-popup input[name=expirationCode1]')
    let expirationCode2Input = document.querySelector('.buy-card-popup input[name=expirationCode2]')
    let CVCInput = document.querySelector('.buy-card-popup input[name=CVC]')
    let cardholderNameInput = document.querySelector('.buy-card-popup input[name=cardholderName]')
    let postalCodeInput = document.querySelector('.buy-card-popup input[name=postalCode]')
    let cityTownInput = document.querySelector('.buy-card-popup input[name=cityTown]')

    if (!bankCardNumberInput.value || !expirationCode1Input.value || !expirationCode2Input.value ||
        !CVCInput.value || !cardholderNameInput.value || !postalCodeInput.value || !cityTownInput.value) {
        buyCardError.innerHTML = 'Заполните все поля!';
        return;
    }
    if (bankCardNumberInput.value.replaceAll(' ', '').length != 16) {
        buyCardError.innerHTML = 'Номер карты должен содержать 16 цифр!';
        return;
    }
    if (expirationCode1Input.value.length != 2 || expirationCode2Input.value.length != 2) {
        buyCardError.innerHTML = '2 по 2';
        return;
    }

    if (CVCInput.value.length != 3) {
        buyCardError.innerHTML = 'CVC != 3';
        return;
    }

    LoginedUser.hasSubscription = true;

    bankCardNumberInput.value = ``;
    expirationCode1Input.value = ``;
    expirationCode2Input.value = ``;
    CVCInput.value = ``;
    cardholderNameInput.value = ``;
    postalCodeInput.value = ``;
    cityTownInput.value = ``;

    hidePopup(buyCardPopup);

});

updateBuyButtons();

function updateBuyButtons() {
    let buyButtons = document.querySelectorAll('.cards button');
    buyButtons.forEach(button => {
        button.onclick =  () => {
            if (!isLogined) {
                showPopup(loginPopup);
            } else if (!LoginedUser.hasSubscription) {
                showPopup(buyCardPopup);
            } else {
                let buyBook;
                booksInformation.forEach(book => {
                    if (book.title == button.id) {
                        buyBook = book;
                    }
                });
                LoginedUser.rentedBooks.push(`${buyBook.title}, ${buyBook.author}`);
                localStorage.setItem(`${LoginedUser.eMail}***${LoginedUser.cardNumber}`, JSON.stringify(LoginedUser));
                button.disabled = true;
                button.innerHTML = 'Own';
                button.classList.add('own');
                button.classList.remove('buy');
                console.log(document.querySelector('.find .book_info .number').innerHTML);
                document.querySelector('.find .book_info .number').innerHTML = LoginedUser.rentedBooks.length;
            }
        };
    });
}


const dots = document.querySelectorAll('.dot');
const sliderLine = document.querySelector('.slider-line');
const leftButton = document.querySelector('.slider-left');
const rightButton = document.querySelector('.slider-right');
const sliderGap = 25;
const pickWidth = 450;

let dotIndex = 0;
let pos = 0;

dots[dotIndex].style.cursor = 'auto';
const leftSlide = () => {
    if (pos > 0) {
        dotIndex -= 1;
        pos -= pickWidth + sliderGap;
    } else {
        dotIndex = dots.length - 1;
        pos = (dots.length - 1) * (pickWidth + sliderGap);
    }
    sliderLine.style.left = -pos + 'px';
    thisSlide(dotIndex);
}

const rightSlide = () => {
    if (pos < ((dots.length - 1) * (pickWidth + sliderGap))) {
        dotIndex += 1;
        pos += pickWidth + sliderGap;
    } else {
        dotIndex = 0;
        pos = 0;
    }
    thisSlide(dotIndex);
    sliderLine.style.left = -pos + 'px';
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.style.cursor = 'pointer';
        dot.classList.remove('active');
    }

    rightButton.disabled = false;
    leftButton.disabled = false;

    if (index === 0) {
        leftButton.disabled = true;
    } else if (index === dots.length - 1) {
        rightButton.disabled = true
    } else {
        rightButton.disabled = false;
        leftButton.disabled = false;
    }

    dots[index].classList.add('active');
    dots[index].style.cursor = 'auto';
}

thisSlide(dotIndex);

rightButton.addEventListener('click', rightSlide);
leftButton.addEventListener('click', leftSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        pos = (pickWidth + sliderGap) * index;
        sliderLine.style.left = -pos + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
    })
});

let decktop = window.innerWidth >= 1440;
window.addEventListener('resize', () => {
    if (decktop && window.innerWidth > 1440) {
        decktop = false;
        dotIndex = 0
        pos = 0;
        sliderLine.style.left = 0;
    }
    if (!decktop && window.innerWidth >= 1440) {
        decktop = true;
        dotIndex = 0
        pos = 0;
        sliderLine.style.left = 0;
    }

    thisSlide(dotIndex);
})


function checkInputs() {
    let bankCardNumberInput = document.querySelector('.buy-card-popup input[name=bankCardNumber]');
    let expirationCode1Input = document.querySelector('.buy-card-popup input[name=expirationCode1]');
    let expirationCode2Input = document.querySelector('.buy-card-popup input[name=expirationCode2]');
    let CVCInput = document.querySelector('.buy-card-popup input[name=CVC]');
    let cardholderNameInput = document.querySelector('.buy-card-popup input[name=cardholderName]');
    let postalCodeInput = document.querySelector('.buy-card-popup input[name=postalCode]');
    let cityTownInput = document.querySelector('.buy-card-popup input[name=cityTown]');

    if (!bankCardNumberInput.value || !expirationCode1Input.value || !expirationCode2Input.value ||
        !CVCInput.value || !cardholderNameInput.value || !postalCodeInput.value || !cityTownInput.value) {
        document.querySelector('.buy-card-button').disabled = true;
    } else {
        document.querySelector('.buy-card-button').disabled = false;
    }
}



console.log(`
Я набрал 200 / 200 баллов

Ограниченная карусель в блоке About
Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15
На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2
Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2
Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии. +2
На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2
Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2
Слайдер в блоке Favorites
"Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15
На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие. +2
Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца. +2
Во время анимаций высота блока Favorites не должна меняться. +2
❗Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites. +2
До регистрации
Нажатие на кнопку Check the card ни к чему не приведёт.
До авторизации
Иконка юзера в хедере отображается в виде силуэта.
В блоке Favorites все кнопки должны иметь имя Buy, а не Own. +2
Этап 2: Пользователь на этапе регистрации
Меню авторизации при нажатии на иконку пользователя
Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2
То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации. +2
Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2
Модальное окно REGISTER
Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password. +2
При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER. +2
Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
В данном случае, ограничения по полям - все поля должны быть не пустыми. +2
Пароль должен быть не короче 8 символов. +2
В поле E-mail должна быть валидация типа email. +2
Окончание регистрации
Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя. +2
Иконка пользователя меняется на заглавные буквы имени. +2
Отображение страницы приходит в состояние после авторизации (этап 4). +2
Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа. +2
При наличии регистрации, но будучи не авторизованным
Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2
Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2
Этап 3: Пользователь на этапе входа в учётную запись после регистрации.
Модальное окно LOGIN
Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password. +2
При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN. +2
Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
Для авторизации все поля должны быть не пустыми. +2
Пароль должен быть не короче 8 символов. +2
Блок Favorites
Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN. +2
Этап 4: Пользователь после входа в учётную запись
Меню профиля при нажатии на иконку с инициалами пользователя
При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2
Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2
То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна. +2
Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля. +2
❗Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер, +2
Нажатие на кнопку My Profile открывает модальное окно MY PROFILE. +2
Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2
Модальное окно MY PROFILE
Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
В случае если имя и фамилия слишком длинные и не влазят в блок то должен произойти перенос фамилии на следующую строку.
Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2
Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16. +2
Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена. +2
Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2
Блок Favorites
При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD. +2
При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле. +2
Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен +2
Модальное окно BUY A LIBRARY CARD
❗Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще. +2
Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми. +2
Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет. +2
Expiration code содержит 2 поля с ограничением в 2 цифры. +2
CVC должен содержать 3 цифры. +2
После удачного нажатия на кнопку Buy, окно закрывается, и больше мы к нему не возвращаемся.
Блок Digital Library Cards
При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account. +2
`)
