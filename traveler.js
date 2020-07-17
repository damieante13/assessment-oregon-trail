class Traveler{

    constructor(name){
    this.name=name;
    this.isHealthy=true;
    this.food=1;
    }
    
    hunt(){
        this.food+=2;
    console.log('Food Amount: ' + this.food)
    }

    eat(){
    if (this.food<=0){
    this.isHealthy=false;
    console.log('You need to Eat:' + this.isHealthy);
     }else if(this.food>0){
        this.isHealthy=true;
          this.food-=1;
          console.log('Ate a Filling Meal:' + this.isHealthy);
        }
        return
        }    
    };
    
   