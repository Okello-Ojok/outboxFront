

export interface Attendee {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    company: string
}

export interface Events {
    eventname: string,
    eventDate: Date,
    eventPaid: string,
    attendee: {
        [key: string]: Attendee
    }
    
}

