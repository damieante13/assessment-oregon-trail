class Wagon{

    constructor(capacity){
    this.capacity=capacity
    this.passengers=[]
     }

    getAvailableSeatCount(){
   return this.capacity-this.passengers.length;
    }

    join(traveler){
        if(this.getAvailableSeatCount()>0){
         this.passengers.push(traveler)
   console.log(traveler.name + ' Has Joined the Wagon')
        }else{
       console.log('There is no more room on wagon for ' + traveler.name)
     }
    }

    shouldQuarantine(){ 
    //- Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    if (traveler.isHealthy===false){
    console.log(traveler.name + ' is unhealthy. Please Quarantine')
    }//else{
    // console.log(traveler.name + ' is healthy') 
    // }

    }

//     totalFood(){ 
//     //Returns the total amount of food among all passengers in the wagon.
//     for (let counter=0; counter<passengers.length; counter+=1){
//         sumFood += this.Food
//     }
// console.log('Total Food on Wagon '  )
//     }
};

