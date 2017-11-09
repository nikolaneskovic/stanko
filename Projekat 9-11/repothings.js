import Repos from "./repoService"
import Thing from "./thing"

class repoThings{
    getThings(thingsHandler){
        let repos = new Repos();
        repos.getRepos((repos)=> {
         var things = [];
            
            for (var i = 0; i < repos.length; i++) {
                var name = repos[i].name;
                var url = repos[i].url;
                var thing = new Thing (name,url);
                things.push(thing);
            }
          thingsHandler(things);
        })
    }
}

export default repoThings;