function Flights() {
    function calculateNumberOfFlights(numPass, cap) {
        
        let numFlights = 0;

        
            if(!Number.isInteger(numPass) || numPass <= 0) {

                throw new Error("The number of passengers must be a positive integer value");
                
            }

            if(!Number.isInteger(cap) || cap <= 0) {
    
                throw new Error("The capacity of the flight must be a positive integer value");
            
            }

            if((numPass % cap) === 0) {
            
                numFlights = numPass/cap;
                
            } else {
    
                numFlights = Math.floor(numPass/cap) + 1;
                
            }
                return numFlights;
        
        
    }

    function checkAircraftRevision(distLimit, distArr) {
        let sum = 0;

        distArr.forEach(element => {
            sum += element;
        });

        if(sum <= (distLimit / 2)) {
            return "The revision needs to be done within the next 3 months";
        } else if(sum > (distLimit / 2) && sum <= (distLimit * .75)) {
            return "The revision needs to be done within the next 2 months";
        } else if (sum > (distLimit * .75) && sum <= distLimit) {
            return "The revision needs to be done within the next month";
        } else if (sum > distLimit) {
            throw new Error();
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();




