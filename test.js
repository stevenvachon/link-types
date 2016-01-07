"use strict";
var linkTypes = require("./");

var expect = require("chai").expect;



it("linkTypes()", function()
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



it("linkTypes.map()", function()
{
	var tagNofollow = { tag:true, nofollow:true };
	
	expect( linkTypes.map("")    ).to.deep.equal( {}           );
	expect( linkTypes.map("tag") ).to.deep.equal( { tag:true } );
	
	expect( linkTypes.map("tag nofollow")   ).to.deep.equal(tagNofollow);
	expect( linkTypes.map(" tag nofollow ") ).to.deep.equal(tagNofollow);
	expect( linkTypes.map("tag  nofollow")  ).to.deep.equal(tagNofollow);
	expect( linkTypes.map("tag   nofollow") ).to.deep.equal(tagNofollow);
	expect( linkTypes.map("tag NOFOLLOW")   ).to.deep.equal(tagNofollow);
});
