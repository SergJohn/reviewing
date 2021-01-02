
console.log('Hello World');

const form = document.querySelector('form');
const API_URL = 'https://3000-d3f322ab-7404-43e7-aab7-5032e8f9499b.ws-eu03.gitpod.io/reviews';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let reviewerBook = document.getElementById('book').value;
    let reviewerName = document.getElementById('name').value;
    let reviewerContent = document.getElementById('content').value;

    console.log(reviewerBook);
    console.log(reviewerName);
    console.log(reviewerContent);

    let rev = {
        reviewerBook,
        reviewerName,
        reviewerContent
    }
    console.log(rev);

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(rev),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(createdReview => {
            console.log(createdReview);
            // form.reset();
        });
    form.reset();
});