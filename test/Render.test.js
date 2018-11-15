const render = require('../lib/Render');
const mock = {
    _id: 0,
    title: "mock",
    lines: [
       "line 1",
       "line 2"
    ]
}
test("render string", () => {
    expect(typeof render.lineUp(mock)).toBe('string')
})