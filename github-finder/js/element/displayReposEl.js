const reposEl = document.getElementById("repos");

export default async function displayReposEl(repoInfos) {
  reposEl.innerHTML = '';

  for (const repoInfo of repoInfos) {
    const repoEl = getRepoEl(repoInfo);
    reposEl.appendChild(repoEl);
  }
}

function getRepoEl (repo) {
    const repoBox = document.createElement("li");
    repoBox.addEventListener("click", () => {
      window.open(repo.html_url, "_blank");
    });
    repoBox.classList.add("repo"); 
    repoBox.classList.add("box");
    
    const repoTitle = document.createElement("p");
    repoTitle.classList = "repo-title";
    repoTitle.innerText = repo.name;
    repoBox.appendChild(repoTitle);

    const tags = document.createElement("ul");
    tags.classList = "tags";
    tags.appendChild(getStarsTagEl(repo));
    tags.appendChild(getWatchersTagEl(repo));
    tags.appendChild(getForksTagEl(repo));
    repoBox.appendChild(tags);

    return repoBox;
}

function getStarsTagEl (repo) {
    const liEl = document.createElement("li");

    const btnEl = document.createElement("button");
    btnEl.classList = "tag";
    btnEl.innerText = `Stars: ${repo.stars}`;
    btnEl.addEventListener("click", (event) => {
      window.open(`${repo.html_url}/stargazers`, "_blank");
      event.stopPropagation();
    });
    liEl.appendChild(btnEl);

    return liEl;
}

function getWatchersTagEl (repo) {
    const liEl = document.createElement("li");

    const btnEl = document.createElement("button");
    btnEl.classList = "tag";
    btnEl.innerText = `Watchers: ${repo.watchers}`;
    btnEl.addEventListener("click", (event) => {
      window.open(`${repo.html_url}/watchers`, "_blank");
      event.stopPropagation();
    });
    liEl.appendChild(btnEl);

    return liEl;
}

function getForksTagEl (repo) {
    const liEl = document.createElement("li");

    const btnEl = document.createElement("button");
    btnEl.classList = "tag";
    btnEl.innerText = `Forks: ${repo.forks}`;
    btnEl.addEventListener("click", (event) => {
      window.open(`${repo.html_url}/forks`, "_blank");
      event.stopPropagation();
    });
    liEl.appendChild(btnEl);

    return liEl;
}