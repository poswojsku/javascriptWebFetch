var pokazNaStronie = document.getElementById('root');

    fetch('./file.json')
      .then(response => response.json())
      .then(data => {console.log(data);
            pokazNaStronie.innerHTML = data.name}
          )
      .catch(err => console.error(err))

      fetch('./file.json')
        .then(response => {
            console.log(response.url)
            console.log(response.headers.get('Content-Type'))
            console.log(response.headers.get('Date'))
          })
