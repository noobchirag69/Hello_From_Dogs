let url = 'https://dog.ceo/api/breeds/image/random/50';

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let Button = document.querySelector("button");
        Button.addEventListener("click", () => {
            let RandomImage = Math.floor(Math.random() * data.message.length);
            let image = (data.message[RandomImage]);
            document.querySelector("img").src = image;
            document.querySelector('.surprise').style.display = 'block';
        })
    })
    .catch(err => console.log(err));