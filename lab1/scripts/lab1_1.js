'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.getElementById('age');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultTextarea = document.getElementById('result');

    calculateBtn.addEventListener('click', calculatePension);

    function calculatePension() {
        const age = parseInt(ageInput.value);
        const gender = document.querySelector('input[name="gender"]:checked').value;

        resultTextarea.value = getPensionMessage(age, gender);
    }

    function getPensionMessage(age, gender) {
        if (age < 0) return "Да кто ты такой?";
        if (age >= 0 && age <= 17) return "Вам работать ещё рано — учитесь";

        if (gender === 'male') {
            if (age >= 18 && age <= 59) return "Вам ещё работать и работать";
            if (age >= 60 && age <= 64) return "Скоро пенсия!";
            if (age >= 65) return "Вам пора на пенсию";
        } else {
            if (age >= 18 && age <= 54) return "Вам ещё работать и работать";
            if (age >= 55 && age <= 59) return "Скоро пенсия!";
            if (age >= 60) return "Вам пора на пенсию";
        }

        return "Да кто ты такой?";
    }
});