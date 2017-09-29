var smuggle = {

  parse: function (sming, numify = true) { // sming is the input string; numify for type conversion

    /string/i.test(typeof sming) || throw "Argument must be of type 'string'.";
    sming = sming.match(/.*?(^|[^`])(``)*(,,|;;|$)/g);
    sming || throw "Input string must conform to 'smuggle' syntax (see documentation).";
    var smob = {}; // the object that will be returned at the end
    sming.forEach(function (item) {
      // strip trailing delimeters
      item = item.replace(/(.*(^|[^`])(``)*)(,,|;;)$/,'$1');
      // separate key and value
      item = item.match(/(.*(?:^|[^`])(?:``)*)::(.*)/);
      item || throw "Input string must conform to 'smuggle' syntax (see documentation).";
      // populate object; strip escape characters; numerical type conversion
      var k = item[1].replace(/`(.|$)/g, '$1');
      var v = item[2].replace(/`(.|$)/g, '$1');
      /^[0-9.]+$/.test(v) && numify && (v = +v);
      smob[k] = v;
    });
    return smob;
  },

  stringify: function (smob, del = ',,') { // smob is the object to be stringified

    /object/i.test(typeof smob) || throw "Argument must be of type 'object'.";
    /,,|;;/.test(del) || throw "The delimeter must be one of: ',,' or ';;'.";
    var sming = ''; // the string that will be returned at the end
    for (var k in smob) {
      sming && (sming += del);
      sming += k.replace(/(,,|;;|::|`)/g, '`$1') + '::' + smob[k].replace(/(,,|;;|::|`)/g, '`$1');
    }
    return sming;
  }
}
