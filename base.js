let userData = [
    {
    userPass: '123',
    userLogin: 'Dima'
    }, {
    userPass: '456',
    userLogin: 'Sasha'
    }, {
    userPass: 'Tequila',
    userLogin: 'Leo'
    }
];

function userLogin() {
    let userInData = null;    
    let verificateLogin = prompt('Enter your login');
    console.log(verificateLogin);
    if (verificateLogin === null){
        return;
    }
    let verificatePass = prompt('Enter your password');
    console.log(verificatePass);
     if (verificatePass === null){
        return;
    }
    for (let value of userData) {
        console.log(value);
        if (verificateLogin === value.userLogin && verificatePass === value.userPass) {
            alert("Welcome, " + value.userLogin );
            userInData = true;
        } 
    }
    console.log(userInData);
    if (userInData === null){
        alert('Try again');
        userLogin();
    }
};