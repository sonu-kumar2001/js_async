let xhr = new XMLHttpRequest();
let root = document.querySelector('#root');
let form = document.querySelector('form');

function handler(event) {
    root.innerText = ''
    event.preventDefault();
    xhr.open('GET',`https://api.github.com/users/${event.target.username.value}`);
    console.log(event.target.username.value);
    xhr.onload = function () {
        let dataJson = JSON.parse(xhr.response);
        console.log(dataJson);
        if(dataJson.login == event.target.username.value) {
            let card = document.createElement('div');
            card.classList.add('card');
            let flex = document.createElement('div');
            flex.classList.add('flex');
            let img = document.createElement('img');
            img.setAttribute('src',`${dataJson.avatar_url}`);
            let username = document.createElement('h1');
            username.innerText = dataJson.name;
            let details = document.createElement('div');
            let followers = document.createElement('h3');
            followers.innerText = `Followers: ${dataJson.followers}`;
            let following = document.createElement('h3');
            following.innerText = `Following: ${dataJson.following}`;
            let publicRepo = document.createElement('h3');
            publicRepo.innerText = `Repositories: ${dataJson.public_repos}`;
    
            card.append(flex);
            flex.append(img,details);
            details.append(username,followers,following,publicRepo);
            root.append(card);
        } else {
            alert('user not found');
        }
    }
    
    xhr.onerror = function () {
        console.log('error');
    }
    
    xhr.send();
}

form.addEventListener('submit',handler);
