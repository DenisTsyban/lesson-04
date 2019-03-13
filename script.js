// Homework 1
function sayHello() {
	for (var i=0; i<arguments.length; i++) {
		console.log("Переданные аргументы: " + arguments[i]);
    }
}
undefined
sayHello(10, false, "google")
VM444:3 Переданные аргументы: 10
VM444:3 Переданные аргументы: false
VM444:3 Переданные аргументы: google

// Homework 2
function userInfo(){
    console.log ( this.registered ? 
        'Дата регистрации:'+` ${this.data}` : 
        'Незарегистрированный пользователь:'+` ${this.name}`)
};
var user1  = {
    name: 'Denis',
    registered: false, 
    data: new Date(),
    getInfo: userInfo,
};
var user2  = {
    name: 'Oleg',
    registered: true, 
    data: new Date(),
    getInfo: userInfo,
};
undefined
user1.getInfo()
VM237:2 Незарегистрированный пользователь: Denis
undefined
user2.getInfo()
VM237:2 Дата регистрации: Wed Mar 13 2019 10:07:40 GMT+0200 (Восточная Европа, стандартное время)