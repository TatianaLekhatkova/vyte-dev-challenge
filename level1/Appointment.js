class Appointnment {
    constructor(id, start, end, attendees, maxAttendees) {
        this._id = id;
        this._start = new Date;
        this._end = new Date;
        this._attendees = attendees;
        this._maxAttendees = maxAttendees;
    }

    get start() { return this._start }
    get end() { return this._end }
    get attendees() { return this._attendees }
    get id() { return this._id }
    get maxAttendees() { return this._maxAttendees }

    addAttendee(name, email) {
        if (Date.now() < start) {
            this._attendees.push(name, email)
        }
        else alert("The meeting has already started")
    }

    removeAttendee(email) {
        i = attendees.find(item => item.email == email);
        i.delete();
        return attendees;
    }

    remainingSpots() {
        return this._maxAttendees - this._attendees
    }

    isAvailable() {
        if (getDate() < start && remainingSpots() > 0) {
            return true
        }
        else {
            return false
        }
    }

    isConfirmed() {
        if (attendees > 0) {
            return true
        }
        else { return false }
    }
}












