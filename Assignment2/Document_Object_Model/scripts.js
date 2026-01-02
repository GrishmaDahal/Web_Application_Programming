/* Document Object Model */

// Selecting Elements through DOM
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const addressInput = document.getElementById("address");
const entryForm = document.getElementById("entryform");
const transcript = document.querySelector("aside");
const show_data = document.querySelector(".show_data");
const btn_output = document.querySelector(".btn_output");

let counter = parseInt(localStorage.getItem("counter")) || 0;

// Function to create description list UI
function description_list(obj) {
    return `
        <dl class="details">
            <dt>Name:</dt>
            <dd>${obj.data_name}</dd>

            <dt>Roll:</dt>
            <dd>${obj.data_roll}</dd>

            <dt>Address:</dt>
            <dd>${obj.data_address}</dd>
        </dl>
    `;
}

// Update Transcript section (latest entry)
function updateTranscript(obj) {
    transcript.innerHTML = `
        <h2>Transcript</h2>
        ${description_list(obj)}
    `;
}

// Show all stored data
function showOutput(obj, index) {
    show_data.innerHTML += `
        <div class="border">
            <h3>User ${index}</h3>
            ${description_list(obj)}
        </div>
    `;
}

// Handle Form Submission
entryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const rollValue = Number(rollInput.value);

    // Validation
    if (rollValue < 0) {
        alert("Roll number cannot be negative");
        return;
    }

    for (let i = 1; i <= counter; i++) {
        const storedUser = localStorage.getItem(`user${i}`);
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser.data_roll === rollValue) {
                alert("This roll number already exists");
                return;
            }
        }
    }

    counter++;
    localStorage.setItem("counter", counter);

    const user_object = {
        data_name: nameInput.value,
        data_roll: rollValue,
        data_address: addressInput.value
    };

    // Save to localStorage
    localStorage.setItem(`user${counter}`, JSON.stringify(user_object));

    // Update transcript
    updateTranscript(user_object);

    // Reset form
    entryForm.reset();
});

// Handle Show Output Button
btn_output.addEventListener("click", function () {
    show_data.innerHTML = "";

    for (let i = 1; i <= counter; i++) {
        const storedUser = localStorage.getItem(`user${i}`);
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            showOutput(parsedUser, i);
        }
    }
});
