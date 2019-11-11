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
        .then(Response => {
            console.log(Response.body);
            if (Response.status === 200) {
                return Response.json();
            } else {
                throw new Error(`Something went wrong.  Error code ${Response.status}`);
            }
        })
        .then(ResponseJson => {
            $('.dog-images').empty();
            $('.dog-images').append(`<img class="dog-pic" src="${ResponseJson.message}">`);
        })
        .catch(e => alert(e));
}
$(initSite);