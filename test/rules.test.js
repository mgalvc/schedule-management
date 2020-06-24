const rules = require('../src/rules')
const { TestScheduler } = require('jest')

beforeAll(() => {
    return rules.save({
        day: '',
        intervals: [
            { start: '9:30', end: '10:30' }
        ]
    })
})

test('rule was saved', () => {
    let rule = {
        day: '',
        intervals: [
            { start: '13:30', end: '15:30' }
        ]
    }

    return rules.save(rule).then(res => {
        expect(res).toEqual(
            expect.objectContaining({
                created: expect.any(Boolean),
                _id: expect.any(String)
            })
        )
    })
})

test('rule has interval conflict', () => {
    let rule = {
        day: '',
        intervals: [
            { start: '9:45', end: '15:30' }
        ]
    }

    return rules.save(rule).then(res => {
        expect(res.created).toBeFalsy()
    })
})

describe('rule has invalid fields', () => {
    it('invalid day', () => {
        
    })

    it('invalid interval', () => {

    })
})

test('delete rule', () => {

})

test('list all rules', () => {

})

test('available in interval', () => {
    
})

