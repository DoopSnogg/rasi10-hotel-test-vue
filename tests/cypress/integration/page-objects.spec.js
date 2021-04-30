/// <reference types="cypress" />

import * as login from "../pages/login"
import * as index from "../pages"
import * as newBill from "../pages/new-bill"
import * as client from "../pages/client"
import * as newClient from "../pages/new-client"
import * as newRoom from "../pages/new-room"
import * as newReservation from "../pages/new-reservation"
import * as bill from "../pages/bill"
import * as room from "../pages/room"
import * as reservation from "../pages/reservation"


describe("Testsuite", () => {
    beforeEach(() => {
        cy.visit("/")
        login.confirmHeader("Login")
        login.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    });
    it("Login and logout", () => {
        index.logoutUser("Login")
    });
    it("Client", () => {
        index.viewClients("Clients")
        client.viewClientNew("New Client")
        newClient.createClient("tester", "tester@mail.com", "0123456789", "Clients")
        client.verifyLastClient("tester", "tester@mail.com", "0123456789")
        client.deleteLastClient()
        index.logoutUser("Login")
    });
    it("Bill", () => {
        index.viewBills("Bills")
        bill.viewBillNew("New Bill")
        newBill.createBill("123456789", "Bills")
        bill.verifyLastBill("123456789")
        bill.deleteLastBill()
        index.logoutUser("Login")
    });
    it("Room", () => {
        index.viewRooms("Rooms")
        room.viewRoomNew("New Room")
        newRoom.createRoom("double", "123456", "123", "123456789", "ensuite", "Rooms")
        room.verifyLastRoom("double", "123456", "123", "123456789", "ensuite")
        room.deleteLastRoom()
        index.logoutUser("Login")
    });
    it("Reservation", () => {
        index.viewReservations("Reservations")
        reservation.viewReservationNew("New Reservation")
        newReservation.createReservation("1999-06-19", "2026-06-19", "Jonas Hellman (#1)", "Floor 1, Room 101", "ID: 1", "Reservations")
        reservation.verifyLastReservation("1999-06-19", "2026-06-19", "Jonas Hellman", "Room: 1", "ID: 1")
        reservation.deleteLastReservation()
        index.logoutUser("Login")
    });
    it("Home", () => {
        index.viewBills("Bills")
        bill.returnToHomePage("Tester Hotel Overview")
        index.logoutUser("Login")
    });
});