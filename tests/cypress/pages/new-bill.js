/// <reference types="cypress" />

const value_field = "input"
const save_btn = ".blue"

function createBill(value, content) {
    cy.get(value_field).type(value)
    cy.get(save_btn).click()
    cy.contains(content)
}

exports.default = {
    createBill
}