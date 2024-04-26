import React from "react";
import idToUrl from "./helper/url";

function AbilityIcon({ id }) {
	console.log(id);
	return <img alt={id} src={idToUrl(id)}></img>;
}

export default AbilityIcon;
