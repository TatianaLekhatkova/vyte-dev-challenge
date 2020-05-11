class Appointnment {
    constructor(id, start, end, attendees, maxAttendees) {
        this._id = id;
        this._start = start;
        this._end = end;
        this._attendees = attendees;
        this._maxAttendees = maxAttendees;
    }

    get start() { return this._start }
    get end() { return this._end }
    get attendees() { return this._attendees }
    get id() { return this._id }
    get maxAttendees() { return this._maxAttendees }
    
    addAttendee(name, email) {
        if (this.remainingSpots < 1) {
            alert ("This meeting is full")
        } else 
        if (this.attendees.findIndex(item => item.email === email) === -1) {
            if (new Date() < start) {
                var attendee = {
                    _name: name,
                    _email: email
                }
                this._attendees.push(attendee)
            }
            else alert("The meeting has already started")
        } else {alert ("This email already exist") }
    }
        

    removeAttendee(email) {
        var i = this._attendees.findIndex(item => item.email === email)
        if (i !== -1) {
            this._attendees.slice(i, 1)
        }
        else {
            alert("This email doesn't exist")
        }
    }        
       

    remainingSpots() {
        return this._maxAttendees - this._attendees.length
    }

    isAvailable() {
        if (new Date() < start && remainingSpots() > 0) {
            return true
        }
        else {
            return false
        }
    }

    isConfirmed() {
        if (attendees.length >= 0) {
            return true
        }
        else { return false }
    }
}












