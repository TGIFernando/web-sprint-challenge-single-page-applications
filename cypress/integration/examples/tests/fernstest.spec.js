describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    const pizzaButton = () => cy.contains(/pizza/)
    const nameInput = () => cy.get('input[name="name"]')
    const sizeI = () => cy.get('select[name="size"]')
    const sauceInput = () => cy.get('input[value="red"]')
    const olives = () => cy.get('input[name="olives"]')
    const instructions = () => cy.get('input[name="instructions"]')
    const sub = () => cy.get('input[value="Place Order"]')

    it('tests whole page', () => {
        pizzaButton().click()
        nameInput().type('Example name')
        sizeI().select('small')
        sauceInput().click()
        olives().click()
        instructions().type('Leave at door')
        sub().click()
    })
})