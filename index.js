const submitContainer = document.getElementById('Selected-Rating');
const btnSelector = document.getElementsByClassName('btn');

function submitRating() {
  for (let i = 0; i < btnSelector.length; i += 1) {
    btnSelector[i].addEventListener('click', () => {
      submitContainer.innerHTML = `You Selected ${i += 1} out of 5`;
    });
  }
}

document.getElementById('submit').addEventListener('click', () => {
  if (submitContainer.childNodes.length === 0) {
    document.getElementById('display-error').style.display = 'block';
  } else {
    document.getElementById('Select-container').style.display = 'none';
    document.getElementById('Submit-Window').style.display = 'flex';
  }
});

submitRating();