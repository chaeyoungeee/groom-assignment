export default class UserSearchResult {
    
    constructor(data) {
        this.name = data.login;
        this.thumbnail_url = data.avatar_url;
        
        Object.freeze(this);
    }
}