define([ 'use!underscore' ], function(_) {
  describe("functions", function() {
    var sayIt = function(greeting, name, punctuation) {
          return greeting + ', ' + name + (punctuation || '!');
        },
        fn = function() {};

    it("you should be able to use an array as arguments when calling a function", function() {
      var fn = function(args) {
        return sayIt(args[0], args[1], args[2])
      };
      
      var result = fn([ 'Hello', 'Ellie', '!' ]);
      expect(result).to.be('Hello, Ellie!');
    });

    it("you should be able to change the context in which a function is called", function() {
      var speak = function() {
            return sayIt(this.greeting, this.name, '!!!');
          },
          obj = {
            greeting : 'Hello',
            name : 'Rebecca'
          };

      // define a function for fn that calls the speak function such that the
      // following test will pass
      fn = function() {
        return speak.call(obj);
      }
      expect(fn()).to.be('Hello, Rebecca!!!');
    });

    it("you should be able to return a function from a function", function() {
      // define a function for fn so that the following will pass
      fn = function(term1) {
        return function(term2) {
          return term1 + ', ' + term2;
        };
      };
      expect(fn('Hello')('world')).to.be('Hello, world');
    });

    it("you should be able to create a 'partial' function", function() {
      // define a function for fn so that the following will pass
      fn = function(func, arg1, arg2) {
        return function(punc) {
          return func.apply(this, [arg1, arg2, punc])
        };
      };
      var partial = fn(sayIt, 'Hello', 'Ellie');
      expect(partial('!!!')).to.be('Hello, Ellie!!!');
    });

    it("you should be able to use arguments", function () {
      fn = function () {
        // you can only edit function body here
        return _.reduce(arguments, function(memo, num) {
          return memo + num;
        }, 0);
      };

      var a = Math.random(), b = Math.random(), c = Math.random(), d = Math.random();
      expect(fn(a)).to.be(a);
      expect(fn(a, b)).to.be(a + b);
      expect(fn(a, b, c)).to.be(a + b + c);
      expect(fn(a, b, c, d)).to.be(a + b + c + d);
    });

    it("you should be able to apply functions", function () {
      fn = function (fun) {
        // you can only edit function body here
      };

      (function () {
        var a = Math.random(), b = Math.random(), c = Math.random();

        var wasITake2ArgumentsCalled = false;
        var iTake2Arguments = function (firstArgument, secondArgument) {
          expect(arguments.length).to.be(2);
          expect(firstArgument).to.be(a);
          expect(secondArgument).to.be(b);

          wasITake2ArgumentsCalled = true;
        };

        var wasITake3ArgumentsCalled = false;
        var iTake3Arguments = function (firstArgument, secondArgument, thirdArgument) {
          expect(arguments.length).to.be(3);
          expect(firstArgument).to.be(a);
          expect(secondArgument).to.be(b);
          expect(thirdArgument).to.be(c);

          wasITake3ArgumentsCalled = true;
        };

        fn(iTake2Arguments, a, b);
        fn(iTake3Arguments, a, b, c);
      })();
    });

    it("you should be able to curry existing functions", function () {
      fn = function (fun) {
        // you can only edit function body here
        if (!arguments[1]) {
          return function(arg1, arg2, arg3) {
            return fun(arg1, arg2, arg3);
          }
        }
        if (arguments[1] && !arguments[2]) {         
          var arg1 = arguments[1]
          return function(arg2, arg3) {
            return fun(arg1, arg2, arg3);
          }
        } else if (arguments[1] && arguments[2] && !arguments[3]) {         
          var arg1 = arguments[1]
          var arg2 = arguments[2]
          return function(arg3) {
            return fun(arg1, arg2, arg3);
          }
        } else if (arguments[1] && arguments[2] && arguments[3]) {         
          var arg1 = arguments[1]
          var arg2 = arguments[2]
          var arg3 = arguments[3]
          return function() {
            return fun(arg1, arg2, arg3);
          }
        }    
      };

      var curryMe = function (x, y, z) {
        return x / y * z;
      };

      var a = Math.random(), b = Math.random(), c = Math.random();
      expect(fn(curryMe)(a, b, c)).to.be(curryMe(a, b, c));
      expect(fn(curryMe, a)(b, c)).to.be(curryMe(a, b, c));
      expect(fn(curryMe, a, b)(c)).to.be(curryMe(a, b, c));
      expect(fn(curryMe, a, b, c)()).to.be(curryMe(a, b, c));
    });

    it('you should be able to use closures', function () {
      var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
      var doSomeStuff;

      fn = function (vals) {
        // you can only edit function body here
        return _(vals).map(function(num) {
          return function() {
            return doSomeStuff(num);
          };
        });
      };

      doSomeStuff = function (x) { return x * x; };

      var funcs = fn(arr);
      expect(funcs).to.have.length(arr.length);
      for (var i = funcs.length - 1; i >= 0; i--) {
        expect(funcs[i]()).to.be(doSomeStuff(arr[i]));
      };
    });
  });
});
