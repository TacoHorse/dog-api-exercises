'use strict'

function initSite() {
    handleUserInput();
}

function handleUserInput() {
    $('.dog-form').submit(e => {
        e.preventDefault();
        let breed = $('[name=breed]').val();
            if (breed) {
                getRandomDog(breed.toLowerCase());
            } else {
                alert("Please enter a dog breed");
            }
    });
}

function getRandomDog(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(Response => {Response.json();})
        .then(ResponseJson => {
            $('.dog-images').empty();
            $('.dog-images').append(`<img class="dog-pic" src="${ResponseJson.message}">`);
        })
        .catch(error => alert('Something went wrong please check the URL and try again'))
}
$(initSite);