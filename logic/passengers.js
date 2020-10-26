function Passengers() {
    function checkFlightCapacity(flightCap, passArr) {
        let total = 0;
        passArr.forEach(element => {
            total += element;
        });

        if(total < flightCap) {
            return total;
        }
        if(total > flightCap) {
            throw new Error("you are over the flight capacity");
        }
    }

    function distributeAllSeatsToAllPassengers(numVIP, numReg, numFlights, numBusSeats, numEconSeats) {
        var seating = {
            vipPassengersWithBusinessSeats: 0,
            vipPassengersWithEconomySeats: 0,
            regularPassengersWithBusinessSeats: 0,
            regularPassengersWithEconomySeats: 0
        }
        let totalNumBusSeats = numBusSeats * numFlights;
        let totalNumEconSeats = numEconSeats * numFlights;

        //test to see if there are more vip or bus seats and assigns correctly
        if(numVIP >= totalNumBusSeats){
            seating.vipPassengersWithBusinessSeats = totalNumBusSeats;
            
            numVIP -= totalNumBusSeats;
            totalNumBusSeats = 0;
        } else {
            seating.vipPassengersWithBusinessSeats = numVIP;
            totalNumBusSeats -= numVIP;
            numVIP = 0;
        }

        if(numVIP > 0) {
            if(numVIP >= totalNumEconSeats) {
                seating.vipPassengersWithEconomySeats = totalNumEconSeats;
                
                numVIP -= totalNumEconSeats;
                totalNumEconSeats = 0;
            } else {
                seating.vipPassengersWithEconomySeats = numVIP;
                totalNumEconSeats -= numVIP;
                numVIP = 0;
            }
        }

        if(totalNumBusSeats > 0) {
            if(numReg >= totalNumBusSeats) {
                seating.regularPassengersWithBusinessSeats = totalNumBusSeats;
                numReg -= totalNumBusSeats;
                totalNumBusSeats = 0;
            } else {
                seating.regularPassengersWithBusinessSeats = numReg;
                totalNumBusSeats -= numReg;
                numReg = 0;
            }
        }

        if(totalNumEconSeats > 0) {
            if(numReg >= totalNumEconSeats) {
                seating.regularPassengersWithEconomySeats = totalNumEconSeats;
                
                numReg -= totalNumEconSeats;
                totalNumEconSeats = 0;
            } else {
                seating.regularPassengersWithEconomySeats = numReg;
                totalNumEconSeats -= numReg;
                numReg = 0;
            }
        }


        return seating;

    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();

