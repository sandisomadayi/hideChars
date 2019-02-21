function hideChars(string) {
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
//assert.equal(hideChars("sandiso"), "###diso")
console.log(hideChars("sandiso")); //should return ###diso
