const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("arithGeo", function(){

	describe("handle Arithmetic progression", function(){
		it("should return Arithmetic for the array [1, 2, 3]", function(){
		assert.equal(myApp.arithGeo([1,2,3]), 'Arithmetic');
		});

		it("should return Arithmetic for the array [3, 6, 9]", function(){
		assert.equal(myApp.arithGeo([3, 6, 9]), 'Arithmetic');
		});

		it("should return Arithmetic for the array [10, 15, 20]", function(){
		assert.equal(myApp.arithGeo([10, 15, 20]), 'Arithmetic');
		});
	})
	
	describe("handle Geometric progression", function(){
		it("should return Geometric for the array [1, 2, 4, 8]", function(){
		assert.equal(myApp.arithGeo([1, 2, 4, 8]), 'Geometric');
		});

		it("should return Geometric for the array [8, 16, 32]", function(){
		assert.equal(myApp.arithGeo([8, 16, 32]), 'Geometric');
		});

		it("should return Geometric for the array [2, 4, 8]", function(){
		assert.equal(myApp.arithGeo([2, 4, 8]), 'Geometric');
		});
	})

	describe("handle empty array", function(){
		it("should return 0 for the array []", function(){
		assert.equal(myApp.arithGeo([]), 0);
		});
	})


	describe("handle array that is neither AP no GP", function(){
		it("should return -1 for the array [1, 4, 9, 0]", function(){
		assert.equal(myApp.arithGeo([1, 4, 9, 0]), -1);
		});

		it("should return -1 for the array [5, 4, 19, 0]", function(){
		assert.equal(myApp.arithGeo([1, 4, 9, 0]), -1);
		});

		it("should return -1 for the array [5, 4, 12, 0, 67]", function(){
		assert.equal(myApp.arithGeo([1, 4, 9, 0]), -1);
		});
	})

})