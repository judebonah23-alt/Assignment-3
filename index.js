function analyzeText() {
    var text = document.getElementById("inputText").value;

    if (text.trim() === "") {
        alert("Please enter some text to analyze.");
        return;
    }

    var vowelCount = countVowels(text);
    var consonantCount = countConsonants(text);

    document.getElementById("vowelResults").innerHTML = "Vowel Count: " + vowelCount;
    document.getElementById("consonantResults").innerHTML = "Consonant Count: " + consonantCount;
}

function countVowels(text) {
    var vowels = 'aeiouAEIOU';
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if (vowels.indexOf(text[i]) !== -1) {
            count++;
        }
    }
    return count;
}

function countConsonants(text) {
    var consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if (consonants.indexOf(text[i]) !== -1) {
            count++;
        }
    }
    return count;
}

function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var heightInInches = parseFloat(document.getElementById("heightInInches").value);

    if (isNaN(weight) || isNaN(height) || isNaN(heightInInches)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    var totalHeight = (height * 12) + heightInInches;
    var bmi = (weight / (totalHeight * totalHeight)) * 703;

    document.getElementById("bmiResults").innerHTML = "Your BMI is: " + bmi.toFixed(2);
}