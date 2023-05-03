function handleClick() {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(response => {
        const residents = response.data.results[0].residents;
        
        residents.forEach(url => {
        axios.get(url)
            .then(response => {
            const residentName = response.data.name;
            const h2 = document.createElement('h2');
            h2.textContent = residentName;
            document.body.appendChild(h2);
            })
            .catch(error => console.error(error));
        });
    })
    .catch(error => console.error(error));
}

const button = document.querySelector('button');
button.addEventListener('click', handleClick);