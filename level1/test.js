class User{
    constructor (name, email){
        this.name = name;
        this.email = email;
    }
    
}

user = new User ("Nick", "nick@mail.com");
console.log(user.name);
var date = new Date();
console.log(date.getDate() + "/"+ date.getMonth() + "/" + date.getFullYear());