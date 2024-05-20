document.addEventListener("DOMContentLoaded", function() {
    initializePage();
});

function initializePage() {
    displayDateTime();
    checkCookie();
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(`Cookie set: ${cname}=${cvalue}`);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    console.log("Checking cookie...");
    let user = getCookie("username");
    if (user !== "") {
        document.getElementById("greeting").innerText = "Welcome back, " + user + "!";
        console.log("User found: " + user);
    } else {
        console.log("No user found, prompting for name...");
        user = prompt("Please enter your name:", "");
        if (user !== "" && user !== null) {
            setCookie("username", user, 365);
            document.getElementById("greeting").innerText = "Welcome, " + user + "!";
            console.log("User set: " + user);
        }
    }
}

function displayDateTime() {
    const now = new Date();
    document.getElementById("datetime").innerText = now.toLocaleString();
    console.log("Current date and time displayed: " + now.toLocaleString());
    setTimeout(displayDateTime, 1000);
}

function showPopup() {
    const dogFacts = [
        "Dogs have a sense of time. They know the difference between an hour and five.",
        "Your dog is as smart as a two-year-old toddler.",
        "Dogs and cats both slurp water the same way.",
        "Your dog does have a sense of time and misses you when youre gone.",
        "A dogs sense of smell is legendary, but did you know that his nose has as many as 300 million receptors?",
        "Dogs noses can sense heat/thermal radiation, which explains why blind or deaf dogs can still hunt."
    ];
    const randomFact = dogFacts[Math.floor(Math.random() * dogFacts.length)];
    alert(randomFact);
}

function calculateDogAge() {
    const dogAge = document.getElementById("dogAge").value;
    if (dogAge) {
        const humanAge = dogAge * 7;
        document.getElementById("humanAge").innerText = `Your dog's age in human years is approximately: ${humanAge}`;
        console.log("Dog age entered: " + dogAge + ". Calculated human age: " + humanAge);
    } else {
        document.getElementById("humanAge").innerText = "Please enter your dog's age.";
        console.log("No dog age entered.");
    }
}

