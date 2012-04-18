define([ 'use!underscore' ], function(_) {
  describe("the module pattern", function() {
    var fn = function() {};

    it("you should be able to create a function that returns a module", function() {
      fn = function() {
        // write a function that makes the tests pass
        var name = arguments[1];
        var args = arguments;
        return {
          name: name,
          greeting: true,
          sayIt: function() {            
            return args[0] + ', ' + args[1]
          }
        }
      };

      var module = fn('hello', 'matt');
      expect(module.name).to.be.ok();
      expect(module.greeting).to.be.ok();
      expect(module.sayIt).to.be.a('function');
      expect(module.sayIt()).to.be('hello, matt');
    });
  });
});
