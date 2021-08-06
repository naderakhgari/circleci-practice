const sum = require('./index')
describe('calculation',()=>{
    test('sum',()=>{
        expect(sum(2, 2)).toBe(4)
    })
})