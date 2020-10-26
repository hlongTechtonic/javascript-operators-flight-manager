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

    return {calculateNumberOfFlights};
}

module.exports = Flights();



