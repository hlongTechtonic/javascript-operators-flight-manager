function Util() {

    function calculateTotalDistributedPassengers(seating) {
        let total = 0;
        
        for (param in seating) {
            total += seating[param];
        }

        return total;
    }

    function calculateTotalNumberOfPassengers(arr) {
        let total = 0;

        arr.forEach(element => {
            total += element;
        });

        return total;
    }

    function checkInput(input) {
        try{
            if(!input) {
                throw new Error("The input should not be empty");
            }
            if(isNaN(input)) {
                throw new Error("The input should be a number");
            }
        } catch(e) {
            return error;
        }
        
    }

    function calculateTotalDistance(distArr) {
        
        let totalDist = 0;

        distArr.forEach(element => {


            if(element < 0) {

            } else {
                totalDist += element;
            }
            
        });

        return totalDist;
    }

    function CalculateBonusPoints(busTravelArr, econTravelArr, busBonus, econBonus) {
        
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance};

}

module.exports = Util();

