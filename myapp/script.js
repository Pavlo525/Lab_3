function User(first,last){
    this.first=first;
    this.last=last;
}
User.prototype.fullName=function(){
    console.log('fullname: '+this.first+" "+this.last)
}
var user=new User('Petro','Petrenko');
console.log('firstname:'+user.first);
console.log('lastname:'+user.last);
user.fullName();

var User=require('./user');
var user=new User('Petro','Petrenko');
console.log('firstname:'+user.first);
console.log('lastname:'+user.last);
user.fullName();