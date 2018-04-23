window.addEventListener('DOMContentLoaded', function() {
	function getRandomArbitary(min, max)
		{
		   return Math.floor(min + Math.random() * (max + 1 - min));
		}
			let n = 2; // количество элементов в массиве
			let arr = [];
			for (var i = 0; i < n; i++) {
					arr[i] =getRandomArbitary(0, 50);
					document.write(arr[i] + '<br>'); // выводим не в консоль, а в документ   
				}
			arr[2] = 100-(arr[0]+arr[1]);
			console.log(arr);
				
});