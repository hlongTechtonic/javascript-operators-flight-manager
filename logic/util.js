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

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};

}

module.exports = Util();

