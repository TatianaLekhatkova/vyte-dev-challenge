import * as Appointment from "./Appointment"

class Calendar {
    constructor(appointments) {
        this._appointments = appointments;
    }

    getAppointmentById(id) {
        return this._appointments.find(item => item.id === id)
    }

    saveAppointment(appointment) {
        appointment.id = findFreeId();
        return appointment;
    }

    findFreeId() {
        var candidate = 0;
        for (candidate = 0; this._appointments.findIndex(item => item.id === candidate) != -1;
            candidate++);
        return candidate
    }

    deleteAppointmentById(id) {
        var m = this._appointments.findIndex(item => item.id === id)
        if (m != -1) {
            this._appointments.slice(m, 1)
        }
        else { alert("This appointment doesn't exist") }
    }

    getAppointmentsBetweenDates(startDate, endDate) {
        var result = [];
        var index = 0;
        while ((index = this._appointments.findIndex(item => item.start >= startDate && item.end <= endDate, index) != -1))
        {
            result.push(this._appointments[index])
        }
        return result
}

}
