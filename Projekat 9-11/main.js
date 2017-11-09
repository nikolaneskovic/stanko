//koristi getMem
//koristi getThing

import UserThings from "./userthings"
import RepoThings from "./repothings"
class Main {
}

var userthings = new UserThings();
userthings.getThings((things)=>{
    console.log(things);
})