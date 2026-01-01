const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
    return;
  }

  if (weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
    return;
  }

  const BMI = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = `<span>${BMI}</span>`;
});
