/// <reference types="cypress" />

const header = "h2"
const username_field = ":nth-child(1) > input"
const password_field = ":nth-child(2) > input"
const login = ".btn"

function confirmHeader(content) {
    cy.get(header).should("contain", content)
}

function loginUser(uname, passwd, content) {
    cy.get(username_field).type(uname)
    cy.get(password_field).type(passwd)
    cy.get(login).click()
    cy.get(header).should("contain", content)
    cy.wait(500)
}

exports.default = {
    confirmHeader,
    loginUser
}