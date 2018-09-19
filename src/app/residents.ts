export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface Resident {
    id: string,
    name: string,
    username: string,
    email: string,
    address: {
        [key: string]: Address
    },
    phone: string,
    website: string,
    company: {
        [key: string]: Company
    }


}




