export default class User {

    constructor(userInfo) {
        this.name = userInfo.login;
        this.avatar_url = userInfo.avatar_url;
        this.profile_url = userInfo.html_url;

        this.company = userInfo.company;
        this.blog = userInfo.blog;
        this.location = userInfo.location;
        this.created_at = userInfo.created_at;

        this.public_repos = userInfo.public_repos;
        this.public_gists = userInfo.public_gists;
        this.followers = userInfo.followers;
        this.following = userInfo.following;

        Object.freeze(this);
    }

}
