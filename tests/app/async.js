define([ 'jquery', 'use!underscore' ], function($, _) {
  describe("async behavior", function() {
    var promise, fn;

    beforeEach(function() {
      fn = function() { };
    });

    it("you should understand how to uses 'promises'", function(done) {
      var flag = false;

      fn = function() {
        // write a function that makes the test pass
        return $.when(true)
      };

      fn().then(function(result) {
        flag = result;
        expect(flag).to.be(true);
        done();
      });
    });

    it("you should be able to receive data from the server and manipulate it", function(done) {
      var peopleArray,
          url = '/data/testdata.json',

          tests = function() {
            expect(peopleArray).to.have.length(5);
            expect(peopleArray.join(' ')).to.be('Adam Alex Matt Paul Rebecca');
            done();
          };

      // replace the call to the tests function below with code that calls the
      // tests function once the data has been a) retrieved from the server and
      // b) manipulated so the tests will pass.

      // tests();
      $.when( $.ajax(url) ).then(function(blah){
        peopleArray = _(blah.people).map(function(person){
          return person.name
        });
        _(peopleArray).sort();
        tests();
      });
    });
  });
});
