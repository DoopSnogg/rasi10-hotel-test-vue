/// <reference types="cypress" />

const create_room_btn = "h2 > .btn"
const room_list = ".rooms"
const three_dot_btn = ".action > img"
const delete_btn = ".menu > :nth-child(2)"


function viewRoomNew(content) {
    cy.get(create_room_btn).click()
    cy.contains(content)
}

function verifyLastRoom(category, number, floor, price, feature) {
cy.get(room_list).last()
.should("contain", category)
.and("contain", number)
.and("contain", floor)
.and("contain", price)
.and("contain", feature)
}

function deleteLastRoom() {
    cy.get(three_dot_btn).last().click()
    cy.get(delete_btn).click()
}

exports.default = {
    viewRoomNew,
    verifyLastRoom,
    deleteLastRoom
}