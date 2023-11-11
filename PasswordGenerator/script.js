var passwordLength = 15;



window.onload = function () {
    document.getElementById('outputText').setAttribute('readonly', 'readonly')
    const slider = document.getElementById('lengthSlider');
    const sliderValueLabel = document.getElementById('sliderValue');
    // Set initial value
    sliderValueLabel.textContent = "Length: " + slider.value;

    // Add event listener to update value on slider change
    slider.addEventListener('input', () => {
        sliderValueLabel.textContent = "Length: " + slider.value;
        passwordLength = slider.value;
    });
};


function generatePassword() {
    var password = [];
    var tempLength = passwordLength;
    if (document.querySelector('#upperCaseSwitch').checked) {
        password.push(getRandomLetter().toUpperCase());
        tempLength--;
    }
    if (document.querySelector('#lowerCaseSwitch').checked) {
        password.push(getRandomLetter().toLowerCase());
        tempLength--;
    }
    if (document.querySelector('#numberSwitch').checked) {
        const numbers = '123456789';
        password.push(numbers.charAt(Math.random() * numbers.length));
        tempLength--;
    }
    if (document.querySelector('#specialSwitch').checked) {
        const specs = '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/';
        password.push(specs.charAt(Math.random() * specs.length));
        tempLength--;
    }
    for (var i = 0; i < tempLength; i++) {
        var num = Math.random() * 3;
        if (num <= 1) {
            password.push(getRandomLetter());
        } else if (num <= 2) {
            const numbers = '123456789';
            password.push(numbers.charAt(Math.random() * numbers.length));
        } else {
            const specs = '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/';
            password.push(specs.charAt(Math.random() * specs.length));
        }
    }
    shuffle(password);
    var temp = "";
    for (var i = 0; i < password.length; i++) {
        temp += password[i];
    }
    document.getElementById('outputText').value = temp;
}

function getRandomLetter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters.charAt(Math.random() * characters.length);
}


//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

function copyToClipboard() {
    var text = document.getElementById('outputText');
    text.select();
    text.setSelectionRange(0,99999); //for mobile devices thx W3schools

    navigator.clipboard.writeText(text.value);

    alert("Password Copied to Clipboard!");
}