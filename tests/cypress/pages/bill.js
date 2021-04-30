/// <reference types="cypress" />

const create_bill_button = "h2 > .btn"
const bill_list = ".bills"
const three_dot_btn = ".action > img"
const delete_btn = ".menu > :nth-child(2)"
const home_btn = "h1 > .router-link-active"

function viewBillNew(content) {
    cy.get(create_bill_button).click()
    cy.contains(content)
}

function verifyLastBill(value) {
    cy.get(bill_list).last()
    .should("contain", value)
}

function deleteLastBill() {
    cy.get(three_dot_btn).last().click()
    cy.get(delete_btn).click()
}

function returnToHomePage(content) {
    cy.get(home_btn).click()
    cy.contains(content)
}

exports.default = {
    viewBillNew,
    verifyLastBill,
    deleteLastBill,
    returnToHomePage
}