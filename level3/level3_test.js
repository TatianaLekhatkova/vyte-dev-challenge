import * as Appointment from "./Appointment"
import * as Calendar from "./Calendar"

testL3() 
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

    var appointment1 = Appointnment(1, new Date + 10000, new Date + 100000, attendees, 5)
    var appointment2 = Appointnment(2, new Date + 20000, new Date + 150000, attendees, 10)
    var calendar = Calendar([appointment1, appointment2])

    test.assert(calendar._appointments == [appointment1, appointment2])
    test.assert(calendar.getAppointmentById(1) === appointment1)
    test.assert(calendar.saveAppointment(appointment1)._id === 0)
    calendar.deleteAppointmentById(2)
    test.assert(calendar._appointments.length === 1)
    calendar.deleteAppointmentById(3)
    test.assert(calendar._appointments.length === 1)
    test.assert(calendar.getAppointmentsBetweenDates(new Date, new Date + 100) === [])
    test.assert(calendar.getAppointmentsBetweenDates(new Date, new Date + 150000) === [appointment1])
 

}

