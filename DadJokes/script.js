  fetch('https://icanhazdadjoke.com/slack')
    .then(response => response.json())
    .then(response => {
        const headTag = document.getElementById("title-tag");
        const title = response.attachments[0].text;
        headTag.innerHTML = title;
    })
    