const userImage = document.getElementById('avatar');
const Name = document.getElementById('name');
const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userLoaction = document.getElementById('loaction');
const memberSince = document.getElementById('created_at');
const repo = document.getElementById('repos');

const  xmlHTTP = new XMLHttpRequest();
const api = 'https://api.github.com/users/praveenprope';

xmlHTTP.onreadystatechange = function () {
    console.log(xmlHTTP.readyState)
    if(xmlHTTP.readyState == 4){
        let stringToObject = JSON.parse(this.responseText);
        console.log(stringToObject)
        userName.innerText = stringToObject.login;
        userImage.setAttribute('src', stringToObject.avatar_url);
        Name.innerText = stringToObject.name;
        memberSince.innerText = stringToObject.created_at;
        repo.innerText = stringToObject.public_repos;
    }
}

xmlHTTP.open('GET', api);
xmlHTTP.send();
