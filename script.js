(function(xhr) {
  var
    proto = xhr.prototype,
    _send = proto.send,
    _open = proto.open;
  
  // overload open() to access url and request method
  proto.open = function() {
    // store type and url to use in other methods
    this._method = arguments[0];
    this._url = arguments[1];
    _open.apply(this, arguments);
  }
  
  // overload send to intercept data and modify
  proto.send = function() {
   // using properties stored in open()
    if (this._method.toLowerCase() === 'post') {
      console.log('USERS DATA :: ', arguments[0]);
      console.log('URL :: ', this._url);
      
      // modify data to send
      arguments[0] = 'item=beer&id=3';
    }
    _send.apply(this, arguments);
  }

})(XMLHttpRequest);
