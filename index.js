"use strict";



function linkTypes(attrValue)
{
	return split(attrValue).filter(type => type !== "");
}



function map(attrValue)
{
	return split(attrValue).reduce( function(result, type)
	{
		if (type !== "")
		{
			result[type] = true;
		}

		return result;

	}, {});
}



function split(attrValue)
{
	return attrValue.trim().toLowerCase().split(" ");
}



linkTypes.map = map;

module.exports = linkTypes;
