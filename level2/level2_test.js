import * as Appointment from "./Appointment"
testL2()
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
    test.assert(appointment.remainingSpots() === 1)
    test.assert(appointment.isAvailable() === true)
    test.assert(appointment.isConfirmed() === true)
    
    appointment.addAttendee("Ola", "ola@mail.com")
    appointment.addAttendee("Keen", "keen@mail.com")
    test.assert(appointment.remainingSpots() === 0)
    test.assert(appointment.isAvailable() === false)
    appointment.removeAttendee("nick@mail.com")
    appointment.removeAttendee("max@mail.com")
    appointment.removeAttendee("ira@mail.com")
    appointment.removeAttendee("ola@mail.com")
    appointment.removeAttendee("keen@mail.com")
    test.assert(appointment.isConfirmed() === false)   
   
}