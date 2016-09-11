var funcs = [];
var i;

for (i = 0; i < 3; i++) {
  funcs[i] = function(i) {
    return function() {
      console.log("My value: " + i);
    };
  }(i);
}

for (var j = 0; j < 3; j++) {
    funcs[j]();
}
