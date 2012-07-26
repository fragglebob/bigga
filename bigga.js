(function(){

  var root = this;

  var oldBigga = root.bigga;

  var bigga = function(s, r){ return encode(s, r); };

  var evenBigga = false;
  var biggaCount = 3;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = bigga;
    }
    exports.bigga = bigga;
  } else {
    root['bigga'] = bigga;
  }
  var encode = bigga.encode = function(s, radix){

    if(typeof radix === "undefined") radix = 2;

    var safe = unescape( encodeURIComponent( JSON.stringify( s ) ) ),
        c = "",
        binary = ("00"+(radix - 1)).slice(-2),
        radixLength = _radixLength(radix),
        r = radixLength,
        zeros = "";

    while(r--){
      zeros += "0";
    }

    for (var i = 0, len = safe.length; i < len; i++) {
      c = (zeros+safe.charCodeAt(i).toString(radix)).slice(-radixLength);
      binary += c;
    }
    if(evenBigga){
      biggaCount--;
      if(biggaCount > 0){
        binary = encode(binary, radix);
      } else {
        biggaCount = 3;
      }
    }
    return binary;

  };
  var decode = bigga.decode = function(s){

    var radix = parseInt(s.slice(0,2), 10) + 1,
        binary = s.slice(2).match(new RegExp(".{1,"+_radixLength(radix)+"}", "g")),
        safe = "";

    for(var i = 0, len = binary.length; i < len; i++){
      safe += String.fromCharCode(parseInt(binary[i], radix));
    }
    if(evenBigga){
      biggaCount--;
      if(biggaCount > 0){
        safe = decode(safe);
      } else {
        biggaCount = 3;
      }
    }
    return JSON.parse( decodeURIComponent( escape( safe ) ) );

  };
  bigga.evenBigga = function(){
    evenBigga = evenBigga ? false : true;
    return evenBigga;
  };
  var _radixLength = function(radix){
    if(radix === 2){
      return 8;
    } else if(radix > 15){
      return 2;
    } else if(radix > 6){
      return 3;
    } else if(radix > 3){
      return 4;
    } else if(radix === 3){
      return 6;
    }
  };
}(this));