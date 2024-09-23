export default class Repository {
    
    constructor(repoInfo) {
        this.name = repoInfo.name;
        this.html_url = repoInfo.html_url;

        this.stars = repoInfo.stargazers_count;
        this.watchers = repoInfo.watchers_count;
        this.forks = repoInfo.forks_count;

        Object.freeze(this);
    }
}