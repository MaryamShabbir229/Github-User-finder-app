let API_KEY = "https://api.github.com/users";

let userInput = document.getElementById("input");

let showDiv = document.getElementById("showdiv")

let searchUser = async () => {
try {
     let API_URL = `https://api.github.com/users/${userInput.value}`;

    let response = await fetch(API_URL);

    let data = await response.json();

    console.log(data);

    showData(data);
} catch (error) {
    console.log(error);
    
}
   
    

}

let showData = (data) =>{
 showDiv.innerHTML = `<div >
                <img class="image " width=300 height="300" src="${data.avatar_url}">
                <h1 class="pname">${data.name}</h1>
                <h3 class="loginName">${data.login}</h3>
                <h4>${data.bio}</h4>
                <p>Followers: ${data.followers} , following: ${data.following}</p>
                <p> <i class="fa-solid fa-location-dot icon" ></i>${data.location}</p>
                <p> <i class="fa-solid fa-blog icon"></i>${data.blog || "No blog listed"}<p/>
                <p> <i class="fa-solid fa-building icon"></i>${data.company || "Company not listed"}<p/>
                <p> <i class="fa-brands fa-x-twitter icon"></i>${data.twitter_username}</p>
                <h2>Github Stats</h2>
                <p>Public repoistory:  ${data.public_repos}</p>
                <p>Public gists:  ${data.public_gists}</p>
                <p>Created at:  ${data.created_at}</p>
                <p>Updated at:  ${data.updated_at}</p>

                <a href="${data.html_url}" target="_blank" class="btn btn-outline-danger mt-3">View GitHub Profile</a>



            </div>`
}

