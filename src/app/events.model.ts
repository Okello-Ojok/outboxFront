

// export interface Attendee {
//     firstname: string,
//     lastname: string,
//     email: string,
//     phone: string,
//     company: string
// }

// export interface Events {
//     id: string,
//     eventname: string,
//     eventDate: Date,
//     eventPaid: string,
//     attendee: {
//         [key: string]: Attendee
//     }

// }


export interface Event {
    id: string,
    eventname: string;
    eventDate: Date;
    eventPaid: string;
    facilitators: string;
    // attendee: {
    //     [key: string]: Attendee
    // }

}



export interface Attendee {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: string;
    occupation: string;
    eventAtt: Event;
}



