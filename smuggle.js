var Smuggle = {

  parse: function (data) {
    
    if (!/string/i.test(typeof data)) {
      console.error("'parse' method requires argument of type 'string'");
      return;
    }
    data = data.match(/.+?([^`](,,|;;)|$)/g);
    if (!data) {
      console.error("Input string must conform to 'smuggle' syntax. (See documentation at project's github page.)");
      return;
    }
    var smob = {}; // the object that will be returned at the end
    data.forEach(function (item) {
    
      item = item.replace(/([^`]?)(,,|;;)$/,'$1').replace(/`(,,|;;)/g,'$1');
      item = item.match(/(.*[^`])::(.*)/);
      if (!item) {
        console.error("Input string must conform to 'smuggle' syntax. (See documentation at project's github page.)");
        return;
      }
      smob[item[1].replace(/`::/g, '::')] = item[2].replace(/`::/g, '::');
    });
    return smob;
  },
  
  stringify: function () {
  
  
  }
}
