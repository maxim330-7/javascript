'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const numInput = document.getElementById('num');
    const countBtn = document.getElementById('countBtn');

    countBtn.addEventListener('click', function() {
        const num = parseInt(numInput.value);
        
        if (isNaN(num) || num < 0) {
            alert('Пожалуйста, введите корректное число (0 или больше)');
            return;
        }

        const crowWord = getCrowWord(num);
        alert(`На ветке сидит ${num} ${crowWord}`);
    });

    function getCrowWord(num) {
        // Правила для русского языка:
        // 1 ворона, 2-4 вороны, 5-20 ворон, потом повторяется (21 ворона, 22-24 вороны и т.д.)
        const lastDigit = num % 10;
        const lastTwoDigits = num % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'ворон';
        }

        if (lastDigit === 1) {
            return 'ворона';
        }

        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'вороны';
        }

        return 'ворон';
    }
});