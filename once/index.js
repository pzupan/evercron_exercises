var once = function(object) {
  var f = function() {
    if (f.called) return f.value
    f.called = true
    return f.value = object.apply(this, arguments)
  }
  f.called = false
  return f
}

module.exports = once;