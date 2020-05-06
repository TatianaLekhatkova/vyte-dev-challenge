class Appointnment {
    constructor(id, start, end, attendees) {
        this._id = id;
        this._start = start;
        this._end = end;
        this._attendees = attendees;
    }

    get start() { return this._start }
    get end() { return this._end }
    get attendees() { return this._attendees }
    get id() { return this._id }

    addAttendee(name, email) {
        if (this._start < start) {
            this._attendees.push(name, email)
        }
        else alert("The meeting has already started")        
    }
    
    removeAttendee(email) {
        i = attendees.find(item => item.email == email);
        i.delete();
        return attendees;
    }
}

let met = new Appointnment(1, "12/02/12", "13/02/12", [["Nick", "ddd@mail.com"], ["John", "lll@mail.com"]]);
met.addAttendee("Max", "rrr@mail.com");
console.log(met);

