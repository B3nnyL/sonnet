const sonnet = require('../lib/Sonnet');

test(("sonnet get pieces from sonnet.json"), () => {
    expect(typeof sonnet.get()).toBe('object');
    expect(Array.isArray(sonnet.getArray())).toBe(true);
})

test(("sonnet get single piece from sonnet.json"), () => {
    expect(typeof sonnet.getSingle(0)).toBe('object');
    expect(sonnet.getSingle(0).title).toBe('Sonnet I');
})

test(("return total amount from sonnet.json"), () => {
    expect(sonnet.getAmount()).toBe(4);
})