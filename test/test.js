chai.should();


after(function () {
    // When the test either fails or passes, restore the original
    // jQuery ajax function (Sinon.JS also provides tools to help
    // test frameworks automate clean-up like this)
    document.getElementById.restore();
});

describe('CSV', function() {
    describe('Main', function () {
        it('Modified original?', function () {
          var aux = { innerHTML: "" };
          getElement = sinon.stub(document, "getElementById");
          getElement.withArgs("original").returns({ value: "fda" });
          getElement.withArgs("finaltable").returns(aux);
          main();
          document.getElementById.calledWithMatch("original").should.equal(true);
          document.getElementById.calledWithMatch("finaltable").should.equal(true);
          //aux.innerHTML.should.be.a('[Function]'); // could be a bug in chai?
        });
    });

    describe('Kelvin', function () {
        it('should match any substring of "Kelvin"', function () {

        });
    });

    describe('Fahrenheit', function () {
        it('should match any substring of "Fahrenheit"', function () {

        });
    });

    describe('Testing convertir', function () {
        it('convert 0 c f', function () {
        });

        it('Should fail, bad typing celsius', function () {
        });

        it('Should fail bad input, not follow the format set', function () {
        });
    });
});
