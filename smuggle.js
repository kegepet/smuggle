var smuggle = {

  parse: function (sming) { // sming is the input string
    
    if (!/string/i.test(typeof sming)) {
      throw "Argument must be of type 'string'.";
    }
    sming = sming.match(/.+?([^`](,,|;;)|$)/g);
    if (!sming) {
      throw "Input string must conform to 'smuggle' syntax (see documentation).";
    }
    var smob = {}; // the object that will be returned at the end
    sming.forEach(function (item) {
    
      item = item.replace(/([^`]?)(,,|;;)$/,'$1').replace(/`(,,|;;)/g,'$1');
      item = item.match(/(.*[^`])::(.*)/);
      if (!item) {
        throw "Input string must conform to 'smuggle' syntax (see documentation).";
      }
      smob[item[1].replace(/`::/g, '::')] = item[2].replace(/`::/g, '::');
    });
    return smob;
  },
  
  stringify: function (smob, del = ',,') { // smob is the object to be stringified
  
    if (!/object/i.test(typeof smob)) {
      throw "Argument must be of type 'object'."; 
    }
    if (!/,,|;;/.test(del)) {
      throw "The delimeter must be one of: ',,' or ';;'."; 
    }
    var sming = ''; // the string that will be returned at the end
    for (var k in smob) {
      !sming || (sming += del);
      sming += k.replace(/(,,|;;|::)/g, '`$1') + '::' + smob[k].replace(/(,,|;;|::)/g, '`$1');
    }
    return sming;
  }
}
