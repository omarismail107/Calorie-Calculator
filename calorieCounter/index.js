var calories = 0;
var halfPound = 0;
var onePound = 0;
var twoPound = 0;

activityLevel = null;
howManyFeet = null;
howManyInches = null;
ageCheck = false;
weightCheck = false;

feet = null;
inches = null;
age = null;
cm = null;

errorCheckerAge = false;
errorCheckerGender = false;
errorCheckerWeight = false;
errorCheckerActivity = false;
errorCheckerCm = false;

const calculate = document.querySelector(".calculateCalories");


calculate.addEventListener('click', e => {
    
    age = document.getElementById('age').valueAsNumber;
    weight = document.getElementById('weight').valueAsNumber;
    howManyFeet = document.getElementById('feet').value;
    howManyInches = document.getElementById('inches').value;
    var sedentaryVal = document.getElementById('Sedentary');
    var lightVal = document.getElementById('Light');
    var moderateVal = document.getElementById('Moderate');
    var activeVal = document.getElementById('Active');
    var veryActiveVal = document.getElementById('veryActive');
    var extraActiveVal = document.getElementById('extraActive');
    var Male = document.getElementById('male');
    var Female = document.getElementById('female');

    if (sedentaryVal.checked == true)
        activityLevel = 1.1;
    else if (lightVal.checked == true)
        activityLevel = 1.25;
    else if (moderateVal.checked == true)
        activityLevel = 1.4;
    else if (activeVal.checked == true)
        activityLevel = 1.55;
    else if (veryActiveVal.checked == true)
        activityLevel = 1.7;
    else if (extraActiveVal.checked == true)
        activityLevel = 1.85;

    Gender = null;
    totalCalories = 0;

    if (weight <= 79 || weight >= 1001)
        weightCheck = true;

    weight = weight / 2.205;

    if (Male.checked == true)
        Gender = "Male";
    else if (Female.checked == true)
        Gender = "Female";

    if (howManyFeet == "3ft")
        feet = 3;
    if (howManyFeet == "4ft")
        feet = 4;
    if (howManyFeet == "5ft")
        feet = 5;
    if (howManyFeet == "6ft")
        feet = 6;
    if (howManyFeet == "7ft")
        feet = 7;
    if (howManyFeet == "8ft")
        feet = 8;

    if (howManyInches == "0in")
        inches = 0;
    else if (howManyInches == "1in")
        inches = 1;
    else if (howManyInches == "2in")
        inches = 2;
    else if (howManyInches == "3in")
        inches = 3;
    else if (howManyInches == "4in")
        inches = 4;
    else if (howManyInches == "5in")
        inches = 5;
    else if (howManyInches == "6in")
        inches = 6;
    else if (howManyInches == "7in")
        inches = 7;
    else if (howManyInches == "8in")
        inches = 8;
    else if (howManyInches == "9in")
        inches = 9;
    else if (howManyInches == "10in")
        inches = 10;
    else if (howManyInches == "11in")
        inches = 11;

    if (feet >= 3 && feet <= 8 && feet != null)
        if (inches >= 0 && inches <= 11 && inches != null) {
            cm = feet * 30.48;
            cm = cm + (2.54 * inches);
        }
        else
            cm = null;

    if (Gender == "Female")
        totalCalories = 655.1 + (9.563 * weight) + (1.850 * cm) - (4.676 * age);
    if (Gender == "Male")
        totalCalories = 66.47 + (13.75 * weight) + ((5.003 * cm) - (6.755 * age));

    if (Gender == "Male")
        compareCalories = 88.362 + (13.397 * weight) + (4.799 * cm) - (5.677 * age);
    if (Gender == "Female")
        compareCalories = 447.593 + (9.247 * weight) + (3.098 * cm) - (4.33 * age);

    if (!age)
        errorCheckerAge = true;
    if (!Gender)
        errorCheckerGender = true;
    if (!weight)
        errorCheckerWeight = true;
    if (cm == null)
        errorCheckerCm = true;
    if (activityLevel == null)
        errorCheckerActivity = true;
    if (age <= 14 || age >= 101)
        ageCheck = true;

    totalCalories = totalCalories * activityLevel;

    calories = Math.floor(totalCalories);

    halfPound = Math.floor(.90 * calories);
    onePound = Math.floor(.80 * calories);
    twoPound = Math.floor(.61 * calories);

})

calculate.addEventListener('click', e => {
    let calorieContent = document.querySelector('p');

    if (ageCheck == true) {
        errorCheckerAge = false;
        errorCheckerGender = false;
        errorCheckerWeight = false;
        errorCheckerActivity = false;
        errorCheckerCm = false;
        weightCheck = false;
        ageCheck = false;
        calorieContent.innerText = "Please input a valid age between 15-100";
        return;
    }

    if (weightCheck == true) {
        errorCheckerAge = false;
        errorCheckerGender = false;
        errorCheckerWeight = false;
        errorCheckerActivity = false;
        errorCheckerCm = false;
        weightCheck = false;
        ageCheck = false;
        calorieContent.innerText = "Please input a valid weight between 80-1000 pounds";
        return;
    }

    if (errorCheckerGender == true) {
        errorCheckerAge = false;
        errorCheckerGender = false;
        errorCheckerWeight = false;
        errorCheckerActivity = false;
        errorCheckerCm = false;
        weightCheck = false;
        ageCheck = false;
        calorieContent.innerText = "Please select your gender and try again";
        return;
    }

    if (errorCheckerAge == true) {
        errorCheckerAge = false;
        errorCheckerGender = false;
        errorCheckerWeight = false;
        errorCheckerActivity = false;
        errorCheckerCm = false;
        weightCheck = false;
        ageCheck = false;
        calorieContent.innerText = "Please input your age and try again";
        return;
    }

    if (errorCheckerWeight == true) {
        errorCheckerAge = false;
        errorCheckerGender = false;
        errorCheckerWeight = false;
        errorCheckerActivity = false;
        errorCheckerCm = false;
        weightCheck = false;
        ageCheck = false;
        calorieContent.innerText = "Please input your weight and try again";
        return;
    }

    if (errorCheckerCm == true) {
        errorCheckerAge = false;
        errorCheckerGender = false;
        errorCheckerWeight = false;
        errorCheckerActivity = false;
        errorCheckerCm = false;
        weightCheck = false;
        ageCheck = false;
        calorieContent.innerText = "Please select your height in feet/inches and try again";
        return;
    }

    if (errorCheckerActivity == true) {
        errorCheckerAge = false;
        errorCheckerGender = false;
        errorCheckerWeight = false;
        errorCheckerActivity = false;
        errorCheckerCm = false;
        weightCheck = false;
        ageCheck = false;
        calorieContent.innerText = "Please select your activity level and try again";
        return;
    }

    calorieContent.innerText = "Maintenance Calories: " + calories + "\nLose Half a Pound: " + halfPound +
        "\nLose One Pound: " + onePound + "\nLose Two Pounds: " + twoPound;

})

