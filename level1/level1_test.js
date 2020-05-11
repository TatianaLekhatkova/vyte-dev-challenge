testL1()
{
    var attendees = [{
        _name: "Nick",
        _email: "nick@mail.com"
    },
    {
        _name: "Max",
        _email: "max@mail.com"
    },
    {
        _name: "Ira",
        _email: "ira@mail.com"
    }];
    var appointment = Appointnment(1, new Date - 100000, new Date - 10000, attendees, 5)
    test.assert(appointment._id === 1)
    test.assert(appointment._start === new Date - 100000)
    test.assert(appointment._end === new Date - 10000)
    test.assert(appointment._attendees === attendees)
    test.assert(appointment._maxAttendees === maxAttendees)
    
    appointment.addAttendee("Ola", "ola@mail.com")
    test.assert(appointment._attendees.length === 4)
    appointment.addAttendee("Keen", "keen@mail.com")
    test.assert(appointment._attendees.length === 5)
    appointment.addAttendee("Phil", "phil@mail.com")
    test.assert(appointment._attendees.length === 5)
    appointment.removeAttendee("ira@mail.com")
    test.assert(appointment._attendees.length === 4)


}