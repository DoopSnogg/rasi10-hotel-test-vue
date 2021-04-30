/// <reference types="cypress" />

const category_field = ":nth-child(1) > select"
const number_field = ":nth-child(2) > input"
const floor_field = ":nth-child(3) > input"
const price_field = ":nth-child(5) > input"
const feature_select = ":nth-child(6) > select"
const save_btn = ".blue"

function createRoom(category, number, floor, price, feature, content) {
    cy.get(category_field).select(category)
    cy.get(number_field).type(number)
    cy.get(floor_field).type(floor)
    cy.get(price_field).type(price)
    cy.get(feature_select).select(feature)
    cy.get(save_btn).click()
    cy.contains(content)
}

exports.default = {
    createRoom
}