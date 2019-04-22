"use strict";
const {expect} = require("chai");
const {it} = require("mocha");
const linkTypes = require("./");



it("linkTypes()", () =>
{
	const tagNofollow = ["tag","nofollow"];

	expect( linkTypes("")    ).to.deep.equal( []      );
	expect( linkTypes("tag") ).to.deep.equal( ["tag"] );

	expect( linkTypes("tag nofollow")   ).to.deep.equal(tagNofollow);
	expect( linkTypes(" tag nofollow ") ).to.deep.equal(tagNofollow);
	expect( linkTypes("tag  nofollow")  ).to.deep.equal(tagNofollow);
	expect( linkTypes("tag   nofollow") ).to.deep.equal(tagNofollow);
	expect( linkTypes("tag NOFOLLOW")   ).to.deep.equal(tagNofollow);
});



it("linkTypes.map()", () =>
{
	const tagNofollow = { tag:true, nofollow:true };

	expect( linkTypes.map("")    ).to.deep.equal( {}           );
	expect( linkTypes.map("tag") ).to.deep.equal( { tag:true } );

	expect( linkTypes.map("tag nofollow")   ).to.deep.equal(tagNofollow);
	expect( linkTypes.map(" tag nofollow ") ).to.deep.equal(tagNofollow);
	expect( linkTypes.map("tag  nofollow")  ).to.deep.equal(tagNofollow);
	expect( linkTypes.map("tag   nofollow") ).to.deep.equal(tagNofollow);
	expect( linkTypes.map("tag NOFOLLOW")   ).to.deep.equal(tagNofollow);
});
