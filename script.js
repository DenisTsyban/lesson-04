// Homework 1
var cars = {
    models : ['BMW','Mercedes','Жигули','Nissan','Opel','Fiat','Skoda'],

    addItems : function (modelCar){
        this.models.push(modelCar)
    },

    deleteItems : function (modelCar) {
        for (var i in this.models){ 
            this.models[i] === modelCar ? this.models.splice (i, 1) : null
        }
    }
}

undefined
console.log(cars.models)
VM1032:1 (7) ["BMW", "Mercedes", "Жигули", "Nissan", "Opel", "Fiat", "Skoda"]
undefined
cars.addItems('Kia')
undefined
cars.deleteItems("Жигули")
undefined
console.log(cars.models)
VM1133:1 (7) ["BMW", "Mercedes", "Nissan", "Opel", "Fiat", "Skoda", "Kia"]

// Homework 2



// Homework 3
function Construct () {}
Construct.prototype.addProperty = function (propItem, propValue) { 
	this [propItem] = propValue 
}
var item = new Construct ()
item.addProperty ('name', 'Denis')
console.log (item)
VM1282:7 Construct {name: "Denis"}