    document.getElementById('breedSelect').addEventListener('change', function() {
            const breed = this.value;
        const imageContainer = document.getElementById('imageContainer');
            
            imageContainer.innerHTML = '';

            if (breed) {
                fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                    .then(response => response.json())
                    .then(data => {
                        const img = document.createElement('img');
                        img.src = data.message;
                        img.alt = breed;
                        img.style.width = '300px';
                        imageContainer.appendChild(img);
                    })
                    .catch(error => {
                        console.error('Error fetching the image:', error);
                        imageContainer.innerHTML = '<p>Could not load the image. Please try again.</p>';
                    });
            } else {
                imageContainer.innerHTML = '<p>Select a breed to see an image</p>';
            }
        });
