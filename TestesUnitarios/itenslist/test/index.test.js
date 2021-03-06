const Checkout = require('../src/index')
var expect = require('chai').expect
var checkout

beforeEach (()=>{
    checkout = new Checkout();
    console.log('===========X===========')
})
it ('Can Calculate the current total', ()=>{
    checkout.addItemPrice('a',1)
    checkout.addItemPrice('b',2)
    checkout.addItem('a')
    expect(checkout.calculateTotal()).to.equal(1)
})
it ('Can add multiples items and get correct total', ()=>{
    checkout.addItemPrice('a',1)
    checkout.addItem('a')
    checkout.addItem('b')
    expect(checkout.calculateTotal()).to.equal(3)

})
it ('Can add discount rules ', ()=>{
    checkout.addDiscount('a', 3, 2)
})
it ('Can apply disccount rules to the total',()=>{
    checkout.addDiscount('a', 3, 2)
    checkout.addItem('a')
    checkout.addItem('a')
    checkout.addItem('a')
    expect(checkout.calculateTotal()).to.equal(2)
})

// TODO: criar instancis de classe 
// TODO:adicionar um preco ao item
// TODO:adicionar um item 
// TODO:calcalular o valor total
// TODO:adicionar multiplos itens e verificar o total correto
// TODO:adicionar descontos 
// TODO:aplicar descnotos seguindo regras aplicadas
// TODO:regras de excecao para itens que nao tenham um preço 

