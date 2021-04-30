/// <reference types="cypress" />


// Elements
const logout = ".user > .btn"
const view_clients = ".blocks > :nth-child(2) > .btn"
const view_bills = ":nth-child(3) > .btn"
const view_rooms = ":nth-child(1) > .btn"
const view_reservations = ":nth-child(4) > .btn"

// function/ actions
function logoutUser(content) {
cy.get(logout).click()
cy.contains(content)
}

function viewClients(content) {
    cy.get(view_clients).click()
    cy.contains(content)
}

function viewBills(content) {
    cy.get(view_bills).click()
    cy.contains(content)
}

function viewRooms(content) {
    cy.get(view_rooms).click()
    cy.contains(content)
}

function viewReservations(content) {
    cy.get(view_reservations).click()
    cy.contains(content)
}

// exports

exports.default = {
    logoutUser,
    viewClients,
    viewBills,
    viewRooms,
    viewReservations
}