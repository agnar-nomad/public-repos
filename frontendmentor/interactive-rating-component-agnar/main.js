const mainContainer = document.querySelector('.container');
const ratingStateContent = document.querySelector('.rating-state');
const thanksStateContent = document.querySelector('.thanks-state');
const ratingValue = document.querySelector('.rating-value');
const voteButtons = document.querySelectorAll('.vote-btn');
const submitBtn = document.querySelector('.submit-rating');

mainContainer.appendChild = ratingStateContent;

thanksStateContent.classList.add('hidden');

let selectedRating = null;

voteButtons.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const clicked = e.target.dataset.value;
    console.log('line 16: ', clicked, typeof clicked);
    selectedRating = clicked;
  })
);

// voteButtons.forEach((btn) =>
//   btn.addEventListener('blur', () => {
//     selectedRating = '0';
//     console.log('line 27: ', selectedRating);
//   })
// );
// breaks the 'submit' functionality, because blur comes before the submit click event

submitBtn.addEventListener('click', () => {
  if (!selectedRating) return;

  ratingValue.innerHTML = selectedRating;

  ratingStateContent.classList.add('hidden');
  thanksStateContent.classList.remove('hidden');

  console.log('line 38: ', 'SUBMIT event ran');
});
