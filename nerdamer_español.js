var core = nerdamer.getCore()
var PARSER = core.PARSER

nerdamer.register({
  name: 'guardar',
  visible: true,
  numargs: 1,
  build: function () {
    return function (matriz) {
      let sz = PARSER.functions['size'][0](matriz)
      let cols = Number(nerdamer(sz[0]).evaluate())
      let fils = Number(nerdamer(sz[1]).evaluate())
      for (let y = 0; y < fils; y++) {
        nerdamer(nerdamer(matriz.elements[y][0]).text()+":"+nerdamer(matriz.elements[y][1]).evaluate())
      }
      return nerdamer("valoresGuardados")
    }
  }
})

nerdamer.register({
  name: 'evaluar',
  visible: true,
  numargs: 1,
  build: function () {
    return function (exp) {
      return nerdamer(exp).evaluate()
    }
  }
})

nerdamer.register({
  name: 'si',
  visible: true,
  numargs: 3,
  build: function () {
    return PARSER.functions['IF'][0]
  }
})

nerdamer.register({
  name: 'resolver',
  visible: true,
  numargs: [1, 2],
  build: function () {
    return function (a, b) {
      let eqs = []
      if (a instanceof core.Equation && b instanceof core.Symbol) {
        return nerdamer.solve(a, b.text())
      }
      if (a instanceof core.Vector && a.elements.length == 1) {
        if (b instanceof core.Symbol) {
          return nerdamer.solve(a.elements[0], b)
        }
        if (b instanceof core.Vector && b.elements.length == 1) {
          return nerdamer.solve(a.elements[0], b.elements[0])
        }
      }
      for (const eq of a.elements) {
        eqs.push(eq)
      }
      let vrs = []
      if (b) {
        for (const vr of b.elements) {
          vrs.push(vr)
        }
        return nerdamer.solveEquations(eqs, vrs)
      } else {
        return nerdamer.solveEquations(eqs)
      }
    }
  }
})

nerdamer.register({
  name: 'derivar',
  visible: true,
  numargs: [1, 3],
  build: function () {
    return core.Calculus.diff
  }
})

nerdamer.register({
  name: 'simplificar',
  visible: true,
  numargs: 1,
  build: function () {
    return core.Algebra.Simplify.simplify
  }
})

nerdamer.register({
  name: 'derivada',
  visible: true,
  numargs: [1, 3],
  build: function () {
    return core.Calculus.diff
  }
})

nerdamer.register({
  name: 'integrar',
  visible: true,
  numargs: [1, 3],
  build: function () {
    return core.Calculus.integrate
  }
})

nerdamer.register({
  name: 'integral',
  visible: true,
  numargs: [1, 3],
  build: function () {
    return core.Calculus.integrate
  }
})

nerdamer.register({
  name: 'sen',
  visible: true,
  numargs: [1, 3],
  build: function () {
    return PARSER.trig.sin
  }
})

nerdamer.register({
  name: 'asen',
  visible: true,
  numargs: [1, 3],
  build: function () {
    return PARSER.trig.asin
  }
})

nerdamer.register({
  name: 'senh',
  visible: true,
  numargs: [1, 3],
  build: function () {
    return PARSER.trigh.sinh
  }
})

nerdamer.register({
  name: 'asenh',
  visible: true,
  numargs: [1, 3],
  build: function () {
    return PARSER.trigh.asinh
  }
})
