function askPassword() {
    const passWord = "MikasaAckerman";
    let user;

    do {
        user = prompt("Enter your password");
        if (user !== passWord) {
            alert("Incorrect, please try again.");
        }
    } while (user !== passWord);

    alert("Permission Successful.");

}

askPassword();