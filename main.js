console.log('God bless this code')

let juan=new Traveler('Juan')
let henrietta=new Traveler('Henrietta')
let maude=new Traveler('Maude')

let wagon =new Wagon(2)

console.log(wagon)

console.log('First Wagon Seat Count?: ' + wagon.getAvailableSeatCount());

wagon.join(juan)
wagon.join(henrietta)
wagon.join(maude)


console.log('Juan Eats: '); 
juan.eat()

console.log('Henrietta Hunts: ')
henrietta.hunt()

console.log(juan)

wagon.shouldQuarantine()
// wagon.totalFood()



    //Stretch Goals
        // Add the wagons and the travelers to the DOM.
        // Display relevent information in the DOM about the wagons and traveler – for example: travelers name/food/isHealthy, and/or Wagon's passengers/capacity.
        // Add buttons to your classes – for example: make a traveler eat, add a traveler to a wagon, check if a wagon should quarantine, etc.
        // Add a button to create a new traveler based on a name the user inputs.
        // Add animations simulating travel, etc.
        // Generally just make your game feel more like the original Oregon Trail.
    
    
    
    