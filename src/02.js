const input = `1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,2,23,6,27,2,6,27,31,2,13,31,35,1,10,35,39,2,39,13,43,1,43,13,47,1,6,47,51,1,10,51,55,2,55,6,59,1,5,59,63,2,9,63,67,1,6,67,71,2,9,71,75,1,6,75,79,2,79,13,83,1,83,10,87,1,13,87,91,1,91,10,95,2,9,95,99,1,5,99,103,2,10,103,107,1,107,2,111,1,111,5,0,99,2,14,0,0`
  .split(',')
  .map(Number)

const _arrrep = (arr, pos, data) =>
  arr.reduce((agg, itm, idx) => {
    if (pos === idx) {
      return [...agg, data]
    }
    return [...agg, itm]
  }, [])

const operate = data => (op, p1, p2, r) => {
  const calc = op === 1 ? data[p1] + data[p2] : data[p1] * data[p2]
  return _arrrep(data, r, calc)
}

const chunks = data => (pos = 0) => {
  const [op, p1, p2, r] = [...data].splice(pos, 4)
  if (op === 99 || ![1, 2].includes(op)) {
    return data[0]
  }
  const modInput = operate(data)(op, p1, p2, r)
  return chunks(modInput)(pos + 4)
}

// part 1
const d02a = (i1, i2) => {
  const data = [...input]
  data[1] = i1
  data[2] = i2
  return chunks(data)(0)
}
// part 2
const d02b = output => {
  const data = [...input]
  const arr100 = Array.from(Array(100), (_, idx) => idx)
  // super slow, should optimize
  for (const n of arr100) {
    for (const v of arr100) {
      data[1] = n
      data[2] = v
      var c = chunks(data)(0)
      if (c === output) {
        return 100 * n + v
      }
    }
  }

  return 'bo'
}

export { d02a, d02b }
