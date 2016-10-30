function chained(functions) {
  return function (str) {
    return functions.reduce((pre, cur) => {
      return cur.call(this, typeof pre === 'function' ? pre.call(this, str) : pre)
    })
  }
}

function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

function f4(x){ return x.split("").concat().reverse().join("").split(" ")}
function f5(xs){ return xs.concat().reverse() }
function f6(xs){ return xs.join("_") }

console.log(chained([f1, f2, f3])(0))
