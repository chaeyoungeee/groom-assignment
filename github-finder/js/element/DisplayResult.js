import { getUserByUserName, getRecentReposByUser } from '../api/GithubApi.js';
import ProfileView from './ProfileView.js';
import displayReposEl from './displayReposEl.js';
import { clearResults } from './displaySearchResultsEl.js';

const profileView = new ProfileView();

export default async function displayResult(userName) {

    const user = await getUserByUserName(userName);
    profileView.setAttribute(user);
    
    const reposInfo = await getRecentReposByUser(user, 5);
    await displayReposEl(reposInfo);
    
    clearResults();

    document.getElementById("profile").classList.remove("invisible");
    document.getElementById("repos-title").classList.remove("invisible");
}