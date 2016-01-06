"use strict";



function isNotEmpty(value)
{
	return value !== "";
}



function linkTypes(attrValue)
{
	return attrValue.trim().toLowerCase().split(" ").filter(isNotEmpty);
}



module.exports = linkTypes;
