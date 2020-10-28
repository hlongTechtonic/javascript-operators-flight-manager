function Prices() {

    function calculateFinalPrice(basePrice, variationPassenger, variationFlight) {
        let price = 0.00;
        let adjustedPass = 0.00;
        let adjustedFlight = 0.00;

        adjustedPass = basePrice * (variationPassenger / 100);

        //console.log(adjustedPass);

        price = basePrice + adjustedPass;

        //console.log(price);

        adjustedFlight = price * (variationFlight / 100);

        //console.log(adjustedFlight);

        price += adjustedFlight;

        //console.log(price);
        

        //price = basePrice + adjustedFlight + adjustedPass;

        return price;
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        let price = 0;
        let passengerPercent = 0;
        let flightPercent = 0;
        
        
        if(passengerType == "regular") {
            passengerPercent = -0.05;
        } else {
            passengerPercent = 0.05;
        }

        if(flightType == "economy") {
            flightPercent = -0.03;
        } else {
            flightPercent = 0.10;
        }

        basePrice += basePrice * passengerPercent;

        basePrice += basePrice * flightPercent;

        price = basePrice;

        return basePrice;


    }

    function calculateTotalFinalPrice(numSeats, passengerType, flightType, basePrice) {
        let defaultPrice = calculateDefaultFinalPrice(basePrice, passengerType, flightType);
        let finalPrice = 0;

        finalPrice = numSeats * defaultPrice;

        return finalPrice;

    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();
