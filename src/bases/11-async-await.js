


console.log('ASYNC - AWAIT');




export const getImage = async () => {
    
    try {
        const api_key = 'drMsi6w7DcbBdMhn1URZPZXZy9m2aAQb';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await res.json();
        const { url } = data.images.original;
        // console.log(url);

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append(img);

        return url;  // String
    } catch (error) {
        console.log(`Manejo de error : ${error}`);
        return null;
    }

}

// getImage().then(console.log);

