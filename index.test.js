const sum = require('./index')
describe('calculation',()=>{
    test('sum',()=>{
        expect(sum(2, 2)).toBe(4)
    })
    test('minus',()=>{
        expect(minus(2,2)).toBe(0)
    })
})