import axios from "axios";

class Repos {
    getRepos(hendler) {
        axios.get('https://api.github.com/search/repositories?q=explore').then(function (obj2) {
            hendler(obj2.data.items);  
        

        });
    }
}
export default Repos;
