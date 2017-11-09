import axios from 'axios';

class Users {
    getUsers(hendler) {
        axios.get('https://api.github.com/search/users?q=marko').then(function (obj1) {
            hendler(obj1.data.items);   
     
        });
    }
}
export default Users;
