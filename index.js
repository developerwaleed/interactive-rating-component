const submitContainer = document.getElementById('Selected-Rating');

document.getElementById('btn1').addEventListener('click', () => {
  submitContainer.innerHTML = 'You Selected 1 out of 5';
});
document.getElementById('btn2').addEventListener('click', () => {
  submitContainer.innerHTML = 'You Selected 2 out of 5';
});
document.getElementById('btn3').addEventListener('click', () => {
  submitContainer.innerHTML = 'You Selected 3 out of 5';
});
document.getElementById('btn4').addEventListener('click', () => {
  submitContainer.innerHTML = 'You Selected 4 out of 5';
});
document.getElementById('btn5').addEventListener('click', () => {
  submitContainer.innerHTML = 'You Selected 5 out of 5';
});

document.getElementById('submit').addEventListener('click', () => {
  if (submitContainer.childNodes.length === 0) {
    document.getElementById('display-error').style.display = 'block';
  } else {
    document.getElementById('Select-container').style.display = 'none';
    document.getElementById('Submit-Window').style.display = 'flex';
  }
});