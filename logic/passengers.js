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

    return {checkFlightCapacity};
}

module.exports = Passengers();

