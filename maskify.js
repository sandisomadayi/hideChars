function maskify(string) {
	var arr = string.split("");
	var newArr = [];
	if (arr.length > 4) {
		for (var i = 0; arr.length-4; i++) {
			var letter = arr[i];
			letter = "#";
			newArr.push(letter);
		}
		for (var j = arr.length-4; j < arr.length; j++) {
			//return the last 4 elements of the array'
			var name = arr[j];
			newArr.push(name);
		}
		return newArr.join(",");
	}
	else {
		return string;
	}
}
//assert.equal(maskify("sandiso"), "###diso")
console.log(maskify("sandiso")); //should return ###diso
