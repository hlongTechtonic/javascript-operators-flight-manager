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

    function calculateBonusPoints(busTravelArr, econTravelArr, busBonus, econBonus) {

        let totalBusBonus;
        let totalEconBonus;
        let totalPoints;

        totalBusBonus = calculateTotalDistance(busTravelArr) * (busBonus / 100);

        totalEconBonus = calculateTotalDistance(econTravelArr) * (econBonus / 100);
        
        totalPoints = totalBusBonus + totalEconBonus;

        return totalPoints;

    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};

}

module.exports = Util();

