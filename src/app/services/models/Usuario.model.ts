export interface FullUser {
    id: number,
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    balance: number
    growth: number
    cards: Array<Card>,
    entries: Array<Entry>
}

export interface User {
    id: number,
    firstName: string
    lastName: string
    email: string
    phone: string
    balance: number
    growth: number
}

export interface Entry {
    id: number,
    description: string
    icon: string
    value: number,
    entryDate: string
    paymentMethod: string
}

export interface Card {
    id: number,
    description: string
    paymentDay: string
    image: string    
}