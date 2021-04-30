/// <reference types="cypress" />

const name_field = ":nth-child(1) > input"
const mail_field = ":nth-child(2) > input"
const phone_field = ":nth-child(3) > input"
const save_btn = ".blue"

function createClient(name, mail, phone, content) {
    cy.get(name_field).type(name)
    cy.get(mail_field).type(mail)
    cy.get(phone_field).type(phone)
    cy.get(save_btn).click()
    cy.contains(content)
}

exports.default = {
    createClient
}