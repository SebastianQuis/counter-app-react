


console.log('FETCH - HTTP GIPHY');

const api_key = 'drMsi6w7DcbBdMhn1URZPZXZy9m2aAQb';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

peticion
    .then( resp => resp.json() )
    .then( data => {
        const { url } = data.data.images.original;
        console.log(url);
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch( err => console.log(err));



