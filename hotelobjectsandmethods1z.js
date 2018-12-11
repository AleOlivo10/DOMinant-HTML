var hotel = {
    name: "CareerDevs Javascript Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
    gettingCleaned: [],
    roomNumbersBooked: [],
    roomType: "Queen",

    numberOfRoomsAvailable: function() {
        //length of the number of rooms available
        return this.roomNumbersAvailable.length;
    },

    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },

    numberOfRooms: function() {
        //avail rooms plus booked rooms
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },

    updateAvailableRoomList: function() {

        var roomsListed = "<form> <select id='selectedRoom'>";
        for (var i = 0; i < this.roomNumbersAvailable.length; i++) {
            roomsListed += "<option value=" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
            //+= means that you're telling the computer that you want the variable to stay the same but also add to it
        }
        roomsListed += "</select> </form>";
        document.getElementById("selectARoom").innerHTML = roomsListed;
    },
    bookRoom: function(room) {
        for (var i = 0; i < this.roomNumbersAvailable.length; i++) {
            if (document.getElementById("selectedRoom").value == this.roomNumbersAvailable[i]) {
                this.roomNumbersBooked = this.roomNumbersAvailable.splice(i, 1).concat(this.roomNumbersBooked);
                this.updateAvailableRoomList();
                this.secondDropDownList();
            }
        }
    },
    
    secondDropDownList: function() {
        
      var newList = "<form> <select id='rmBooked'>";
      for (var i = 0; i < this.roomNumbersBooked.length; i++) {
         newList += "<option value =" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
      }
      newList += "</select> </form>";
      document.getElementById("rmBooked").innerHTML = newList;
    },
    
    returnRoom: function(room) {
        for (var i= 0; i < this.roomNumbersBooked.length; i++) {
            if (document.getElementById("dirtyRoom").value == this.roomNumbersBooked[i]) {
                this.roomNumbersAvailable = this.roomNumbersBooked.splice(i, 1).concat(this.roomNumbersAvailable);
                this.secondDropDownList()
            }
        }
    },

    bookRandomRoom: function() {
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
        }
    },

    checkOut: function() {
        if (this.numberOfRoomsBooked() > 0) {
            //if there are zero rooms booked, the function cant run and send any rooms to get cleaned
            var dirtyRoom = this.roomNumbersBooked[Math.floor(Math.random() * this.roomNumbersBooked.length)];
            this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(dirtyRoom), 1);
            this.gettingCleaned = this.gettingCleaned.concat(dirtyRoom);
            //this function checks guests out and moves the room from 'booked' to 'getting cleaned' to make it available again later
            console.log("Checked out:", this.gettingCleaned, "and calling housekeeping!");
        }
        else {
            console.log("There's no room booked, silly, we cant check anyone out!");
        }
    },

    housekeeping: function() {
        if (this.gettingCleaned > 0) {
            var cleanRoom = this.gettingCleaned[Math.floor(Math.random() * this.gettingCleaned.length)];
            this.gettingCleaned.splice(this.gettingCleaned.indexOf(cleanRoom), 1);
            this.roomNumbersAvailable = this.roomNumbersAvailable.concat(cleanRoom);

            console.log("All clean! Available rooms:", this.roomNumbersAvailable);
        }
        else {
            console.log("All rooms are clean, no need for housekeeping.");
        }
    }
};

document.getElementById("hotelName").innerText = hotel.name;

//  ul list section
//  ["101", "102", "103", "104", "105", "106"]
// var roomList = "<ul>";
// for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
//     roomList += "<li>" + hotel.roomNumbersAvailable[i] + "</li>";
// }

// roomList += "</ul>";

// document.getElementById("rmsAvail").innerHTML = roomList;
// EO ul list section

//SO select a room method

var selectRoomList = "<form> <select id='selectedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {

    //RESEARCH ESCAPING CHARACTERS
    selectRoomList += "<option value = \'" + hotel.roomNumbersAvailable[i] + "\'> " + hotel.roomNumbersAvailable[i] + " </option>";
    //the line above writes out all of the options so you dont have to write it out for each individual line
}
selectRoomList += "</select> </form>";

document.getElementById("selectARoom").innerHTML = selectRoomList;

//EO select a room method
