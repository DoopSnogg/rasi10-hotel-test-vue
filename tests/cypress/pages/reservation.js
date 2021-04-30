/// <reference types="cypress" />

const create_reservation = "h2 > .btn"
const reservations_list = ".reservations"
const three_dot_btn = ".action > img"
const delete_btn = ".menu > :nth-child(2)"

function viewReservationNew(content) {
    cy.get(create_reservation).click()
    cy.contains(content)
}

function verifyLastReservation(start, end, client, room, bill) {
    cy.get(reservations_list).last()
    .should("contain", start)
    .and("contain", end)
    .and("contain", client)
    .and("contain", room)
    .and("contain", bill)
}

function deleteLastReservation() {
    cy.get(three_dot_btn).last().click()
    cy.get(delete_btn).click()
}

exports.default = {
    viewReservationNew,
    verifyLastReservation,
    deleteLastReservation
}