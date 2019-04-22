"use strict";



const linkTypes = attrValue => split(attrValue).filter(type => type !== "");



const map = attrValue => split(attrValue).reduce((result, type) =>
{
	if (type !== "")
	{
		result[type] = true;
	}

	return result;

}, {});



const split = attrValue => attrValue.trim().toLowerCase().split(" ");



linkTypes.map = map;

module.exports = linkTypes;
