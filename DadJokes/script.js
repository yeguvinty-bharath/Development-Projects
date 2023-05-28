const options = {
    method: 'GET',
    headers: {'X-RapidAPI-Key': 'd8818db931msh8f36f90618e900ap183bddjsn434e3a6a48ee'}
  };
  
  

  fetch('https://icanhazdadjoke.com/slack')
    .then(response => response.json())
    .then(response => {
        const headTag = document.getElementById("title-tag");
        const title = response.attachments[0].text;
        headTag.innerHTML = title;
    })
    