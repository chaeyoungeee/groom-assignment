const profileImage = document.getElementById('profileImage');
const viewProfileBtn = document.getElementById('viewProfileBtn');

const publicReposBtn = document.getElementById('publicReposBtn');
const publicGistsBtn = document.getElementById('publicGistsBtn');
const followersBtn = document.getElementById('followersBtn');
const followingBtn = document.getElementById('followingBtn');

const company = document.getElementById('company');
const blog = document.getElementById('blog');
const location = document.getElementById('location');
const createdAt = document.getElementById('createdAt');

export default class ProfileView {

    constructor () {
    }

    setAttribute(user) {
        profileImage.setAttribute("src", user.avatar_url); 
        profileImage.addEventListener("click", () => window.open(user.profile_url, "_blank"));
        viewProfileBtn.addEventListener("click", () => window.open(user.profile_url, "_blank"));
        
        publicReposBtn.textContent = `Public Repos: ${user.public_repos}`;
        publicReposBtn.addEventListener("click", () => window.open(`${user.profile_url}?tab=repositories`, "_blank"));
        publicGistsBtn.textContent = `Public Gists: ${user.public_gists}`;
        publicGistsBtn.addEventListener("click", () => window.open(`https://gist.github.com/${user.name}`, "_blank"));
        followersBtn.textContent = `Followers: ${user.followers}`;
        followersBtn.addEventListener("click", () => window.open(`${user.profile_url}?tab=followers`, "_blank"));
        followingBtn.textContent = `Following: ${user.following}`;
        followingBtn.addEventListener("click", () => window.open(`${user.profile_url}?tab=following`, "_blank"));

        company.textContent = `Company: ${user.company ? user.company : ""}`;
        blog.textContent = `Blog: ${user.blog ? user.blog : ""}`;
        location.textContent = `Location: ${user.location ? user.location : ""}`;
        createdAt.textContent = `Member Since: ${user.created_at.split('T')[0]}`;
    }

}