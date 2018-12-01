var venue = {
    name: "Midnight Stadium",
    seatsOpen: 60,
    seatsBooked: 0,
    ticketPrice: 20.00,
  
  ticketsAvail: function() {
    return this.seatsOpen.toString() - this.seatsBooked.toString();
  },
  
 ticketsSold: function() {
     return this.seatsBooked.toString();
 },
 
 sale: function() {
     if (this.ticketsAvail() > 0) {
         ticketSold = this.seatsOpen.toString() -1
        this.seatsBooked = ticketSold
        this.seatsOpen = 
        return
     }
 }
};

bookRoom: function() {
        //only book a room if one or more are available
        if (this.numberOfRoomsAvailable() > 0) {
            //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
            //the Math. stuff makes your selection random 
            var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random() * this.roomNumbersAvailable.length)];
            //this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            //add number to booked room
            //math.floor rounds down to nearest integer
            //this.roomNumbersBooked.push(randomRoom);
            this.roomNumbersBooked = this.roomNumbersBooked.concat(randomRoom);

            //this.roomNumbersBooked = this.roomNumbers.splice(this.roomNumbers.indexOf(randomRoom), 1).concat(this.roomNumbersBooked);
            //this.roomNumbersBooked = this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            console.log("Rooms booked:", this.roomNumbersBooked);
        }
        else {
            console.log("No more rooms available, sorry!");
    