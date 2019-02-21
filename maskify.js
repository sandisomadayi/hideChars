function maskify(string) {
	var arr = string.split("");
	var newArr = [];
	if (arr.length > 4) {
		for (var i = 0; arr.length-4; i++) {
			arr[i] = "#";
		}
		return arr.join("");
	}
	else {
		return string;
	}
}
//assert.equal(maskify("sandiso"), "###diso")
console.log(maskify("sandiso")); //should return ###diso
