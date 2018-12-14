var venue = {
    name: "Midnight Room",
    seatsOpen: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    seatsBooked: [],
    ticketPrice: 20.00,

    ticketsAvail: function() {
        return this.seatsOpen.length;
    },

    ticketsSold: function() {
        return this.seatsBooked.length;
    },

    sale: function() {
        if (this.ticketsAvail() > 0) {
            var ticket = this.seatsOpen[Math.floor(Math.random() * this.seatsOpen.length)];
            this.seatsOpen.splice(this.seatsOpen.indexOf(ticket), 1);
            this.seatsBooked = this.seatsBooked.concat(ticket);
            console.log("Tickets Sold:", this.seatsBooked);
        }
        else {
            console.log("Sold Out");
        }
    },

    refund: function() {
        if (this.ticketsSold() > 0) {
            var refund = this.seatsBooked[Math.floor(Math.random() * this.seatsBooked.length)];
            this.seatsBooked.splice(this.seatsBooked.indexOf(refund), 1);
            this.seatsOpen = this.seatsOpen.concat(refund);
            console.log("Refund for ticket:", refund);
        }
        else {
            console.log("error: no sales made");
        }
    }
};

//would be interesting to know the profit from sales

var seatChoices = "<form> <select id='seat'>";
for (var i =0; i < venue.seatsOpen.length; i++) {
    
//RESEARCH ESCAPING CHARACTERS
    seatChoices += "<option value = \'"+ venue.seatsOpen[i] +"\'> "+venue.seatsOpen[i]+" </option>"; 
    //the line above writes out all of the options so you dont have to write it out for each individual line
}
seatChoices += "</select> </form>";

document.getElementById("seat").innerHTML = seatChoices;

//HW: MAKE THIS WORKABLE AND PRETTY
//Use alerts