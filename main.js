//main variables

let theInput = document.querySelector(".get-repos input");
let buttonrepos = document.querySelector(".get-button");
let reposdata = document.querySelector(".show-data");

//get repos function

buttonrepos.onclick = function () {

    getRepos();

};

function getRepos() {

    //if Value is the empty
    if (theInput.value == "") {

        reposdata.innerHTML = "<span>Please Write Github Username.</span>";

    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((response) => response.json())

            .then((repositries) => {
                //empty the container
                reposdata.innerHTML = '';

                //loop on repsotiries
                repositries.forEach(repo => {

                    let maindiv = document.createElement("div");

                    let reponame = document.createTextNode(repo.name);
                    maindiv.appendChild(reponame);

                    let theUrl = document.createElement("a");
                    let UrlText = document.createTextNode(" visit ");
                    theUrl.appendChild(UrlText);
                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
                    theUrl.setAttribute("target", "_blank");
                    maindiv.appendChild(theUrl);

                    console.log(repo);
                    //crate star account
                    let starsspan = document.createElement("span");
                    let starstext = document.createTextNode(`stars ${repo.stargazers_count}`);

                    starsspan.appendChild(starstext);
                    maindiv.appendChild(starsspan);

                    maindiv.className = "repo-box";

                    reposdata.appendChild(maindiv);
                });
            });


    }
}