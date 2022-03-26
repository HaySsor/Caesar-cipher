function caesara13(word, numberOfShifts) {
	if (word === "" || typeof word !== "string") {
		throw new Error("Podaj text");
	}
	let result;

	if (word.toLocaleLowerCase() == word) {
		const alfabet = "abcdefghijklmnopqrstuvwxyz";
		createNewWord(word, alfabet, numberOfShifts);
	} else {
		const alfabet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		createNewWord(word, alfabet1, numberOfShifts);
	}

	function createNewWord(word, alfabet, number) {
		const wordArray = word.split("");
		const newArry = [];
		const scoreArray = [];
		for (i = 0; i < word.length; i++) {
			newArry.push(alfabet.indexOf(wordArray[i]));
		}
		const newWordArray = newArry.map(item => (item + number) % alfabet.length);

		for (let j = 0; j < newWordArray.length; j++) {
			scoreArray.push(alfabet[newWordArray[j]]);
		}

		result = scoreArray.join("");
	}
	
	return result;
}

const wynik = caesara13("PRZEPROGRAMOWANI", 13);

console.log(wynik);
