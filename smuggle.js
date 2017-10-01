var smuggle = {

  parse: function (sming, castType = ['number', 'boolean']) { // sming is the input string; castType lists types to cast

    if (!/string/i.test(typeof sming)) {
      throw 'Argument must be of type "string".';
    }
    if (castType.constructor !== Array) {
      throw 'Second argument must be an Array with one or both possible values: "number" or "boolean".';
    }
    castType = castType.join(' ');
    sming = sming.match(/(^|.*?[^`](``)*)(,,|;;|$)/g);
    if (!sming) {
      throw 'Input string must conform to "smuggle" syntax (see documentation).';
    }
    var smob = {}; // the object that will be returned at the end
    for (var i = 0, item; item = sming[i]; i++) {
      // strip trailing delimeters
      item = item.replace(/(^|.*?[^`](``)*)(,,|;;)$/,'$1');
      // separate key and value
      item = item.match(/(^|.*?[^`](?:``)*)::(.*)/);
      if (!item) {
        throw 'Input string must conform to "smuggle" syntax (see documentation).';
      }
      // populate object; strip escape characters; type conversion
      var k = item[1].replace(/`(.|$)/g, '$1');
      var v = item[2].replace(/`(.|$)/g, '$1');
      /^[0-9.]+$/.test(v) && /number/i.test(castType) && (v = +v);
      /^(true|false)$/.test(v) && /boolean/i.test(castType) && (v = /true/i.test(v));
      smob[k] = v;
    }
    return smob;
  },

  stringify: function (smob, del = ',,') { // smob is the object to be stringified

    if (!/object/i.test(typeof smob)) {
      throw 'Argument must be of type "object".';
    }
    if (!/^(,,|;;)$/.test(del)) {
      throw 'The delimeter must be one of: ",," or ";;".';
    }
    var sming = ''; // the string that will be returned at the end
    for (var k in smob) {
      if (!/string|number|boolean/i.test(typeof smob[k])) {
        throw 'Object can contain "string", "number", or "boolean" types only.';
      }
      sming && (sming += del);
      sming += k.replace(/(,,|;;|::|`)/g, '`$1') + '::' + String(smob[k]).replace(/(,,|;;|::|`)/g, '`$1');
    }
    return sming;
  }
}
