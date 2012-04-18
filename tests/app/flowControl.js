define([ 'use!underscore' ], function(_) {
  describe("flow control", function() {
    var fn;

    beforeEach(function() {
      fn = function() { };
    });

    it("you should be able to conditionally branch your code", function() {
      fn = function(num) {
        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible the 3 and 5, the function should return
        // 'fizzbuzz';
        // otherwise the function should return the number
        if ((num % 3 == 0) &&(num % 5 == 0)) return 'fizzbuzz'
        if (num % 3 == 0) return 'fizz'
        if (num % 5 == 0) return 'buzz'
        
        return num
      };

      // replace the following test with tests that prove your function works
      // expect(fn()).to.be.ok();
      expect(fn(3)).to.be('fizz');
      expect(fn(5)).to.be('buzz');
      expect(fn(15)).to.be('fizzbuzz');
      expect(fn(7)).to.be(7);
    });

    it("you should be able to work with logical operators", function() {
      var and = function(val1, val2) {
            // write a function that makes the tests below pass
            return val1 && val2
          },

          or = function(val1, val2) {
            // write a function that makes the tests below pass
            return val1 || val2
          };

      expect(and(false, false)).not.to.be.ok();
      expect(and(true, false)).not.to.be.ok();
      expect(and(true, true)).to.be.ok();

      expect(or(true, false)).to.be.ok();
      expect(or(true, true)).to.be.ok();
      expect(or(false, false)).not.to.be.ok();
    });
  });

});
