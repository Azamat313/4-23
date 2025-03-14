document.addEventListener('DOMContentLoaded', () => {
    const birthYearInput = document.getElementById('birthYear');
    const resultsDiv = document.getElementById('results');
    const ageResult = document.getElementById('ageResult');
    
    const daysLived = document.getElementById('daysLived');

    const currentYear = new Date().getFullYear();
    birthYearInput.setAttribute('max', currentYear);

    function calculateAge(year) {
        return currentYear - year;
    }

    function isAdult(age) {
        return age >= 18;
    }

    function calculateDaysLived(year) {
        const today = new Date();
        const birthDate = new Date(year, 0, 1);
        const diffTime = Math.abs(today.getTime() - birthDate.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    function updateResults() {
        const birthYear = parseInt(birthYearInput.value);
        
        if (birthYear && birthYear >= 1900 && birthYear <= currentYear) {
            const age = calculateAge(birthYear);
            const days = calculateDaysLived(birthYear);
            
            ageResult.textContent = age;
            adultStatus.textContent = isAdult(age) ? 'Совершеннолетний' : 'Несовершеннолетний';
            adultStatus.className = isAdult(age) ? 'adult' : 'minor';
            daysLived.textContent = days.toLocaleString('ru-RU');
            
            resultsDiv.classList.remove('hidden');
        } else {
            resultsDiv.classList.add('hidden');
        }
    }

    birthYearInput.addEventListener('input', updateResults);
}); 