import { Injectable } from "@angular/core";
import mock from '../../assets/mocks/data'


@Injectable({
    providedIn: 'root'
})
export class MockService {

    login(email: string, password: string) {
        if (email === mock.email && password === mock.password) {
            return true;
        }
        return false;
    }

    getUser() {
        return {
            id: mock.id,
            firstName: mock.firstName,
            lastName: mock.lastName,
            email: mock.email,
            phone: mock.phone
        }
    }

    getEntries() {
        return mock.entries;
    }

    getCards() {
        return mock.cards;
    }
}