//koristi Thing

import Users from "./userService"
import Thing from "./thing"

class UserThings {

    getThings(thingsHandler){
        let users = new Users();
        users.getUsers((users) => {
            let things = [];
            
            for (var i = 0; i < users.length; i++) {
                var name = users[i].login;
                var url = users[i].avatar_url;
                var thing = new Thing (name,url);
                things.push(thing);
            } 
          thingsHandler(things);    
        })
    }
}
export default UserThings;
