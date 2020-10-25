let xhr = new XMLHttpRequest();
let root = document.querySelector('.root');
let a = document.querySelector('a');


function handler(event) {
    root.innerHTML = '';
    xhr.open('GET',`https://api.unsplash.com/photos/random/?client_id=xhD5sNxcCBe09Fun2jGNRq1g1sMHjNvVCl1z4JaK7Hs`);
    
    xhr.onload = function () {
        let dataJson = JSON.parse(xhr.response);
        console.log(dataJson);
        let img = document.createElement('img');
        img.src = dataJson.urls.regular;
        img.alt = dataJson.alt_description;
    
        root.append(img)
    }
    
    xhr.onerror = function () {
        console.log('error');
    }
    
    xhr.send();
}

a.addEventListener('click',handler);