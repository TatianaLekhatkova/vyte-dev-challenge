import * as Appointment from "./Appointment"
import * as Calendar from "./Calendar"

testL4() 
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

    var appointment1 = Appointnment(1, new Date + 10000, new Date + 100000, attendees, 3)
    var appointment2 = Appointnment(2, new Date + 20000, new Date + 150000, attendees, 3)
    var calendar = Calendar([appointment1, appointment2])
    var slots = calendar.slotsBetweenDates(1, 3, 1)
    test.assert(slots === [{_begin: 1, _end: 2}, {_begin: 2, _end: 3}])
    var availableSlots = calendar.availableSlotsBetweenDates(appointment1._start, appointment2._end, 60)
    test.assert(availableSlots = [])
    var availableSlots = calendar.availableSlotsBetweenDates(appointment1._start - 60, appointment2._end, 60)
    test.assert(availableSlots = [{_begin: appointment1._start - 60, _end: appointment1._start}])


}