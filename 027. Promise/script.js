// Promise One: Resolves after 1 second and logs the messages.
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise is Resolved");
        resolve(); // Successfully resolves the promise
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise is Consumed");
});

// Promise Two: Resolves after 1 second and logs the messages.
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise Task 2 is Resolved");
        resolve(); // Successfully resolves the promise
    }, 1000);
}).then(() => {
    console.log("Promise Task 2 is Consumed");
});

// Promise Three: Resolves after 1 second with an object and logs the resolved value.
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "unknownMan", age: 46 }); // Resolves with an object
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user); // Logs the resolved object
});

// Promise Four: Resolves or rejects based on a condition and logs appropriate messages.
const promiseFour = new Promise(function (resolve, reject) {
    function promoise() {
        let error = true; // Toggle this to test both resolve and reject paths
        if (!error) {
            resolve({ userName: "John Cena", weight: 100 + " Killo" }); // Successful resolution
        } else {
            reject("Something Went Wrong"); // Rejection
        }
    }
    promoise(); // Call the inner function
});

promiseFour
    .then(function (user) {
        return user.weight; // Extract the weight property
    })
    .then(function (weight) {
        console.log(weight); // Logs the weight if resolved
    })
    .catch(function (error) {
        console.log(error); // Handles errors if promise is rejected
    });

// Promise Five: Resolves after 1 second or rejects based on a condition.
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; // Toggle this to test resolve and reject paths
        if (!error) {
            resolve({
                userName: "Brock Lesnar",
                weight: 120 + " Killo",
                Achievement: "Former UFC Champ",
            }); // Resolves with an object
        } else {
            reject("Something went wrong in WWE Details"); // Rejection
        }
    }, 1000);
});

// Consuming Promise Five using async/await
async function promiseFiveConsumed() {
    try {
        const response = await promiseFive; // Await the promise resolution
        console.log(response); // Logs the resolved value
    } catch (error) {
        console.log(error); // Logs the error if the promise is rejected
    }
}

promiseFiveConsumed();

// Fetch API Example: Retrieves user data from GitHub API
async function getAllUsers() {
    try {
        const api = await fetch("https://api.github.com/users/praveenprope"); // Fetch the API data
        const data = await api.json(); // Convert the response to JSON
        console.log(data); // Logs the user data
    } catch (error) {
        console.log(error); // Logs the error if the fetch fails
    }
}

getAllUsers();
