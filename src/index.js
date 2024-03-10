const ratingBtn = document.querySelectorAll('#ratingBtn')
const submitBtn = document.getElementById('submitBtn')
const rateSelected = document.getElementById('rateSelected')
const ratingSection = document.getElementById('ratingSection')
const ThanksSection = document.getElementById('ThanksSection')

// Adding event listener to each rating button
ratingBtn.forEach(button => {
    button.addEventListener( 'click', ()=>{
// Getting the value of the selected rating
    const ratingValue = button.getAttribute('data-value')
// Updating selected rating to Dom
    rateSelected.innerText = ratingValue
    })
})

// Adding event listener for submit button
submitBtn.addEventListener('click', ()=>{
    ratingSection.classList.add('hidden')
    ThanksSection.classList.remove('hidden')
})