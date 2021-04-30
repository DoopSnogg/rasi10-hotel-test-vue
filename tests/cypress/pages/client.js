/// <reference types="cypress" />

const create_client_btn = "h2 > .btn"
const client_list = ".client"
const three_dot_btn = ".action > img"
const delete_btn = ".menu > :nth-child(2)"

function viewClientNew(content) {
    cy.get(create_client_btn).click()
    cy.contains(content)
}

function verifyLastClient(name, mail, phone) {
    cy.get(client_list).last()
    .should("contain", name)
    .and("contain", mail)
    .and("contain", phone)
}

function deleteLastClient() {
    cy.get(three_dot_btn).last().click()
    cy.get(delete_btn).click()
}

exports.default = {
    viewClientNew,
    verifyLastClient,
    deleteLastClient
}