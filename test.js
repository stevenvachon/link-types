"use strict";
var linkTypes = require("./");

var expect = require("chai").expect;



it("should work", function()
{
	var tagNofollow = ["tag","nofollow"];
	
	expect( linkTypes("")    ).to.deep.equal( []      );
	expect( linkTypes("tag") ).to.deep.equal( ["tag"] );
	
	expect( linkTypes("tag nofollow")   ).to.deep.equal(tagNofollow);
	expect( linkTypes(" tag nofollow ") ).to.deep.equal(tagNofollow);
	expect( linkTypes("tag  nofollow")  ).to.deep.equal(tagNofollow);
	expect( linkTypes("tag   nofollow") ).to.deep.equal(tagNofollow);
	expect( linkTypes("tag NOFOLLOW")   ).to.deep.equal(tagNofollow);
});
