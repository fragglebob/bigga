var bigga = require('..');

var tests = ['bigga', ['hello', 'world'], {hello: 'foo', world : 'bar', haha : ['hello', 'world']}, 123456];

var getsBigger = true;
var decodes = true;
var sameType = true;

for(var i = 0, len = tests.length; i < len; i++){
  var string = JSON.stringify(tests[i]);
  for(var x = 2; x < 32; x++){
    if(bigga.encode(string, x).length < string.length){
      getsBigger = false;
    }
    if(bigga.decode(bigga.encode(string, x)) !== string){
      decodes = false;
    }
    if(typeof bigga.decode(bigga.encode(tests[i], x)) !== typeof tests[i]){
      sameType = false;
    }
  }
}
var even = {
  small : bigga.encode('bigga', 18)
};
bigga.evenBigga();
even.big = bigga.encode('bigga', 18);

console.log("It gets bigger?", getsBigger);

console.log("It decodes?", decodes);

console.log("It keeps type?", sameType);

console.log("evenBigga is BIGGER?", even.small.length < even.big.length);