
function minValue(a, b) {
		if (a < b) return a;
		return b;
}

function findFibonacci(n) {
		let a = 0;
		let b = 1;
		let c = a + b;
		while (c <= n) {
			a = b;
			b = c;
			c = a + c;
		}
		let min = minValue(n - a, n - b);
		if (min === n - a) {
			min = a;
		}
		else {
			min = b;
		}
		return min;
	}

module.exports = {
  findFibonacci
}