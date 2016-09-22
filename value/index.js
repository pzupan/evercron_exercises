var value = function(object) {
  if (typeof object == "function" ) {
    return (typeof object.apply() == "function") ? value(object.apply()) : object.apply();
  } else {
    return object;
  }
};

module.exports = value;