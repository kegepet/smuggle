var smuggle = {

  parse: function (sming, castType = ['number', 'boolean']) { // sming is the input string; numify for type conversion

    /string/i.test(typeof sming) || throw 'Argument must be of type "string".';
    (castType.constructor === Array) || throw 'Second argument must be an Array with possible values: "number" or "boolean".';
    castType = castType.join(' ');
    sming = sming.match(/.*?(^|[^`])(``)*(,,|;;|$)/g);
    sming || throw 'Input string must conform to "smuggle" syntax (see documentation).';
    var smob = {}; // the object that will be returned at the end
    sming.forEach(function (item) {
      // strip trailing delimeters
      item = item.replace(/(.*(^|[^`])(``)*)(,,|;;)$/,'$1');
      // separate key and value
      item = item.match(/(.*(?:^|[^`])(?:``)*)::(.*)/);
      item || throw 'Input string must conform to "smuggle" syntax (see documentation).';
      // populate object; strip escape characters; numerical type conversion
      var k = item[1].replace(/`(.|$)/g, '$1');
      var v = item[2].replace(/`(.|$)/g, '$1');
      /^[0-9.]+$/.test(v) && /number/i.test(castType) && (v = +v);
      /^(true|false)$/.test(v) && /boolean/i.test(castType) && (v = /true/i.test(v));
      smob[k] = v;
    });
    return smob;
  },

  stringify: function (smob, del = ',,') { // smob is the object to be stringified

    /object/i.test(typeof smob) || throw 'Argument must be of type "object".';
    /,,|;;/.test(del) || throw 'The delimeter must be one of: ",," or ";;".';
    var sming = ''; // the string that will be returned at the end
    for (var k in smob) {
      /string|number|boolean/i.test(typeof smob[k]) || throw 'Object can contain "string", "number", or "boolean" types only.';
      sming && (sming += del);
      sming += k.replace(/(,,|;;|::|`)/g, '`$1') + '::' + smob[k].replace(/(,,|;;|::|`)/g, '`$1');
    }
    return sming;
  }
}
