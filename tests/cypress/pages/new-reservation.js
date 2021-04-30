/// <reference types="cypress" />

const start_field = ":nth-child(1) > input"
const end_field = ":nth-child(2) > input"
const client_select = ":nth-child(3) > select"
const room_select = ":nth-child(4) > select"
const bill_select = ":nth-child(5) > select"
const save_btn = ".blue"

function createReservation(start, end, client, room, bill, content) {
    cy.get(start_field).type(start)
    cy.get(end_field).type(end)
    cy.get(client_select).select(client)
    cy.get(room_select).select(room)
    cy.get(bill_select).select(bill)
    cy.get(save_btn).click()
    cy.contains(content)
}

exports.default = {
    createReservation
}