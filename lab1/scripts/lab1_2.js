'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const numInput = document.getElementById('num');
    const countBtn = document.getElementById('countBtn');

    countBtn.addEventListener('click', showCrowCount);
    
    numInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            showCrowCount();
        }
    });

    function showCrowCount() {
        const num = parseInt(numInput.value);
        
        if (isNaN(num)) {
            alert('Введите корректное число');
            return;
        }
        
        if (num < 0) {
            alert('Число ворон не может быть отрицательным');
            return;
        }

        alert(`На ветке сидит ${num} ${getCrowWord(num)}`);
    }

    function getCrowWord(num) {
        if (num % 100 >= 11 && num % 100 <= 14) {
            return 'ворон';
        }
 
        const lastDigit = num % 10;
        switch (lastDigit) {
            case 1:
                return 'ворона';
            case 2:
            case 3:
            case 4:
                return 'вороны';
            default:
                return 'ворон';
        }
    }
});