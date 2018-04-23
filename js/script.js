window.addEventListener('DOMContentLoaded', function () {
		
		let overlay = document.getElementsByClassName('overlay')[0],
			greateKand = document.getElementById('popup-btn'),
			customKand = document.getElementsByClassName('custom')[0],
			customChildKand = customKand.childNodes,
			main = document.getElementsByClassName('main')[0],
			readyBtn = document.getElementById('ready'),
			resetBtn = document.getElementById('reset'),
			mainCards = document.getElementsByClassName('main-cards');
			div = document.createElement('div'),
			nameFIO = document.getElementById('name'),
			age = document.getElementById('age'),
			man = document.getElementById('male'),
			girl = document.getElementById('female'),
			polit = document.getElementById('select'),
			bio = document.getElementById('bio'),
			voting = document.getElementById('voting'),
			resultGolos = document.getElementsByClassName('result-count'),
			progresBar = document.getElementsByClassName('progress-bar'),
			mainCardsActive = document.getElementsByClassName('main-cards-item'),
			crime = document.getElementById('crime'),
			arr = [],
			customInfo = document.getElementsByClassName('custom-info')[0],
			personDiv = 'photo photo-0',
			skin = document.getElementsByClassName('person-skin')[0],
			clothes = document.getElementsByClassName('person-clothes')[0],
			hair = document.getElementsByClassName('person-hair')[0];
			


		
			let vz = 'Либеральные';
			polit.addEventListener('change', function() {
					if (this.value == 'Либеральные') {
						vz = 'Либеральные';
					} if (this.value == 'Левые') {
						vz = 'Левые';
					} if (this.value == 'Правые') {
						vz = 'Правые';
					} 
			});
			console.log(skin);
	


		greateKand.addEventListener('click', function() {			
			overlay.style.display = 'none';
			main.style.display = 'none';
			customKand.style.display = 'flex';
			customChildKand[1].style.display = 'block';
			customChildKand[3].style.display = 'block';
			customChildKand[5].style.display = 'block';
			skin.style.backgroundImage = 'url(../img/skin/skin-'+0+'.png)';
			clothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-'+0+'.png)';
			hair.style.backgroundImage = 'url(../img/hair/construct/hair-'+0+'.png)';
			

		function myAnimation() {
		      let pos = 0,
		      id = setInterval(frame, 5);

		      function frame() {
		      	if (pos == 100) {
		      		clearInterval(id);
		      	} else {
		      		pos++;
		      		customChildKand[1].style.left= pos + 'px';
		      		customChildKand[3].style.top= pos + 'px';
		      		customChildKand[5].style.right= pos + 'px';
		      	}
		      }
		  }
		  myAnimation();
			  
		});

		//Slider
	
		let i = 0,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.getElementsByClassName('prev')[0],
		next = document.getElementsByClassName('next')[0];
		person = document.getElementsByClassName('person-easy')[0];
		slides[0].style.display = 'block';
		// slides[i].style.display = '';
		console.log(slides);
		console.log(person);

		prev.addEventListener('click', moveLeft);
			function moveLeft() {
					prev.style.display = 'block';
					slides[i].style.display = 'none';
					skin.style.backgroundImage = 'url(../img/skin/skin-'+i+'.png)';
					clothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-'+i+'.png)';
					hair.style.backgroundImage = 'url(../img/hair/construct/hair-'+i+'.png)';
				    i = i - 1; //i++
				    if( i < 0) {
				      i = slides.length - 1;
				    }
				slides[i].style.display = 'block';
				if ( i != 1) {
				man.value = 'Мужской';
				girl.value = '';
				man.checked = 'checked';
				girl.checked = '';
				} else {
						man.value = '';
						girl.value = 'Женский';
						man.checked = '';
						girl.checked = 'checked';
				}
				// man.checked = 'checked';
				// girl.checked = '';
				// man.value = 'Мужкой';
				// girl.value = '';
				personDiv = 'photo photo-'+i+'';
				skin.style.backgroundImage = 'url(../img/skin/skin-'+i+'.png)';
				clothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-'+i+'.png)';
				hair.style.backgroundImage = 'url(../img/hair/construct/hair-'+i+'.png)';
				
}

		next.addEventListener('click', moveRigth);
			function moveRigth() {
				next.style.display = 'block';
				slides[i].style.display = 'none';
				    i = i + 1; //i++
				    if( i >= slides.length) {
				      i = 0;  
				    }
				    slides[i].style.display = 'block';
				
				/*slides[0].style.display = 'none';
				slides[1].style.display = 'block';*/
				if ( i == 1) {
				man.value = '';
				girl.value = 'Женский';
				man.checked = '';
				girl.checked = 'checked';
				} else {
						man.value = 'Мужской';
						girl.value = '';
						man.checked = 'checked';
						girl.checked = '';
				}
				personDiv = 'photo photo-'+i+'';
				skin.style.backgroundImage = 'url(../img/skin/skin-'+i+'.png)';
				clothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-'+i+'.png)';
				hair.style.backgroundImage = 'url(../img/hair/construct/hair-'+i+'.png)';
	
			}


		
		//End slider

		man.addEventListener('click', function() {
			
			slides[1].style.display = 'none';
			slides[0].style.display = 'block';
			man.value = 'Мужской';
			girl.value = '';
			man.checked = 'checked';
			girl.checked = '';
			personDiv = 'photo photo-'+i+'';
			skin.style.backgroundImage = 'url(../img/skin/skin-'+0+'.png)';
			clothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-'+0+'.png)';
			hair.style.backgroundImage = 'url(../img/hair/construct/hair-'+0+'.png)';
		});

		girl.addEventListener('click', function() {
			// man.value = '';
			// girl.value = 'Женский';
			slides[0].style.display = 'none';
			slides[1].style.display = 'block';
			man.value = '';
			girl.value = 'Женский';
			man.checked = '';
			girl.checked = 'checked';
			personDiv = 'photo photo-1';
			i = 1;
			skin.style.backgroundImage = 'url(../img/skin/skin-'+1+'.png)';
			clothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-'+1+'.png)';
			hair.style.backgroundImage = 'url(../img/hair/construct/hair-'+1+'.png)';

		});

		
		ready.addEventListener('click', function() {
			personDiv = 'photo photo-'+i+'';
			if (nameFIO.value == '' || age.value == '' || bio.value == '') {
				
				alert('Необходимо заполнить все поля для добавления Кандидата!');
			} else {
				main.style.display = 'block';
				customKand.style.display = 'none';
				div.classList.add('main-cards-item');
				div.innerHTML = '<div class="candidate-block"><div class="'+personDiv+'"></div><div class="result"><div class="result-count"></div><div class="progress"><div class="progress-bar progress-bar-2"></div></div></div></div><div class="name">'+nameFIO.value+'</div><div class="age">'+age.value+'</div>Пол:<div class="sex">'+man.value+female.value+'</div>Полит. взгляды:<div class="views">'+vz+'</div>Биография<div class="bio">'+bio.value+'</div>';
				mainCards[0].appendChild(div);
				progresBar[0].classList.remove('progress-bar-1');
				progresBar[0].classList.remove('progress-bar-2');
				progresBar[0].classList.remove('progress-bar-3');
				progresBar[1].classList.remove('progress-bar-1');
				progresBar[1].classList.remove('progress-bar-2');
				progresBar[1].classList.remove('progress-bar-3');
				progresBar[2].classList.remove('progress-bar-1');
				progresBar[2].classList.remove('progress-bar-2');
				progresBar[2].classList.remove('progress-bar-3');
				resultGolos[0].innerHTML = '%';
				resultGolos[1].innerHTML = '%';
				resultGolos[2].innerHTML = '%';
				mainCardsActive[0].classList.remove('main-cards-item-active');
				mainCardsActive[1].classList.remove('main-cards-item-active');
				mainCardsActive[2].classList.remove('main-cards-item-active');
				
			}
		});

		

		resetBtn.addEventListener('click', function() {

			customKand.style.display = 'flex';
			main.style.display = 'none';
			nameFIO.value = '';
			age.value = '';
			bio.value = '';
			polit.selectedIndex = 0;
			vz = 'Либеральные';
			man.checked = 'checked';
			girl.checked = '';
			man.value = 'Мужкой';
			girl.value = '';
			slides[0].style.display = 'block'
			slides[1].style.display = 'none';
			slides[2].style.display = 'none';
			personDiv = 'photo photo-0';
			skin.style.backgroundImage = 'url(../img/skin/skin-0.png)';
			clothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-0.png)';
			hair.style.backgroundImage = 'url(../img/hair/construct/hair-0.png)';
			i = 0;


		});

		voting.addEventListener('click', function() {
			function getRandomArbitary(min, max)
		{
		   return Math.floor(min + Math.random() * (max + 1 - min));
		}
			let n = 2; // количество элементов в массиве
			for (var i = 0; i < n; i++) {
					arr[i] =getRandomArbitary(0, 50);
				}
			arr[2] = 100-(arr[0]+arr[1]);
			console.log(arr);
			resultGolos[0].innerHTML = arr[0]+'%';
			resultGolos[1].innerHTML = arr[1]+'%';
			resultGolos[2].innerHTML = arr[2]+'%';

			if (arr[0] > arr[1] && arr[0] > arr[2]) {
				progresBar[0].classList.remove('progress-bar-1');
				progresBar[0].classList.remove('progress-bar-2');
				progresBar[0].classList.remove('progress-bar-3');
				progresBar[0].classList.add('progress-bar-3');
				mainCardsActive[0].classList.remove('main-cards-item-active');
				mainCardsActive[1].classList.remove('main-cards-item-active');
				mainCardsActive[2].classList.remove('main-cards-item-active');
				mainCardsActive[0].classList.add('main-cards-item-active');

			}  else if (arr[0] > arr[1] && arr[0] < arr[2]) {
				progresBar[0].classList.remove('progress-bar-1');
				progresBar[0].classList.remove('progress-bar-2');
				progresBar[0].classList.remove('progress-bar-3');
				progresBar[0].classList.add('progress-bar-2');

				
				} else if (arr[0] < arr[1] && arr[0] < arr[2]) {
						progresBar[0].classList.remove('progress-bar-1');
						progresBar[0].classList.remove('progress-bar-2');
						progresBar[0].classList.remove('progress-bar-3');
						progresBar[0].classList.add('progress-bar-1');
	
					} else if (arr[0] < arr[1] && arr[0] > arr[2]) {
						progresBar[0].classList.remove('progress-bar-1');
						progresBar[0].classList.remove('progress-bar-2');
						progresBar[0].classList.remove('progress-bar-3');
						progresBar[0].classList.add('progress-bar-2');
	
					}


			if (arr[1] > arr[0] && arr[1] > arr[2]) {
				progresBar[1].classList.remove('progress-bar-1');
				progresBar[1].classList.remove('progress-bar-2');
				progresBar[1].classList.remove('progress-bar-3');
				progresBar[1].classList.add('progress-bar-3');
				mainCardsActive[0].classList.remove('main-cards-item-active');
				mainCardsActive[1].classList.remove('main-cards-item-active');
				mainCardsActive[2].classList.remove('main-cards-item-active');
				mainCardsActive[1].classList.add('main-cards-item-active');

			}  else if (arr[1] > arr[0] && arr[1] < arr[2]) {
				progresBar[1].classList.remove('progress-bar-1');
				progresBar[1].classList.remove('progress-bar-2');
				progresBar[1].classList.remove('progress-bar-3');
				progresBar[1].classList.add('progress-bar-2');
				
				} else if (arr[1] < arr[0] && arr[1] < arr[2]) {
						progresBar[1].classList.remove('progress-bar-1');
						progresBar[1].classList.remove('progress-bar-2');
						progresBar[1].classList.remove('progress-bar-3');
						progresBar[1].classList.add('progress-bar-1');
	
					} else if (arr[1] < arr[0] && arr[1] > arr[2]) {
						progresBar[1].classList.remove('progress-bar-1');
						progresBar[1].classList.remove('progress-bar-2');
						progresBar[1].classList.remove('progress-bar-3');
						progresBar[1].classList.add('progress-bar-2');
	
					}

			if (arr[2] > arr[0] && arr[2] > arr[1]) {
				progresBar[2].classList.remove('progress-bar-1');
				progresBar[2].classList.remove('progress-bar-2');
				progresBar[2].classList.remove('progress-bar-3');
				progresBar[2].classList.remove('progress-bar-4');
				progresBar[2].classList.add('progress-bar-3');
				mainCardsActive[0].classList.remove('main-cards-item-active');
				mainCardsActive[1].classList.remove('main-cards-item-active');
				mainCardsActive[2].classList.remove('main-cards-item-active');
				mainCardsActive[2].classList.add('main-cards-item-active');

			}  else if (arr[2] > arr[0] && arr[2] < arr[1]) {
				progresBar[2].classList.remove('progress-bar-1');
				progresBar[2].classList.remove('progress-bar-2');
				progresBar[2].classList.remove('progress-bar-3');
				progresBar[2].classList.remove('progress-bar-4');
				progresBar[2].classList.add('progress-bar-2');
				
				} else if (arr[2] < arr[0] && arr[2] < arr[1]) {
						progresBar[2].classList.remove('progress-bar-1');
						progresBar[2].classList.remove('progress-bar-2');
						progresBar[2].classList.remove('progress-bar-3');
						progresBar[2].classList.remove('progress-bar-4');
						progresBar[2].classList.add('progress-bar-1');
	
					} else if (arr[2] < arr[0] && arr[2] > arr[1]) {
						progresBar[2].classList.remove('progress-bar-1');
						progresBar[2].classList.remove('progress-bar-2');
						progresBar[2].classList.remove('progress-bar-3');
						progresBar[2].classList.remove('progress-bar-4');
						progresBar[2].classList.add('progress-bar-2');
	
					}


		});

	crime.addEventListener('click', function() {

		if (parseFloat(arr[0]) > 12.4 && parseFloat(arr[1]) > 12.4 && parseFloat(arr[2]) < 75) {
			arr[0] = parseFloat(arr[0]) - (25/2);
			arr[1] = parseFloat(arr[1]) - (25/2);
			arr[2] = parseFloat(arr[2]) + 25;
			
		} else if (parseFloat(arr[0]) < 12.5 && parseFloat(arr[1]) < 12.5) {
			arr[0] = 0;
			arr[1] = 0;
			arr[2] = 100;
		}	else if (parseFloat(arr[0]) < 12.5 && parseFloat(arr[1]) > 12.5 && parseFloat(arr[2]) < 75) {
			arr[0] = 0;
			arr[2] = parseFloat(arr[2]) + 25;
			arr[1] = 100 - parseFloat(arr[2]);
		} else if (parseFloat(arr[0]) > 12.5 && parseFloat(arr[1]) < 12.5 && parseFloat(arr[2]) < 75) {
			arr[1] = 0;
			arr[2] = parseFloat(arr[2]) + 25;
			arr[0] = 100 - parseFloat(arr[2]);
		} else {
			progresBar[0].classList.remove('progress-bar-1');
			progresBar[0].classList.remove('progress-bar-2');
			progresBar[0].classList.remove('progress-bar-3');
			progresBar[1].classList.remove('progress-bar-1');
			progresBar[1].classList.remove('progress-bar-2');
			progresBar[1].classList.remove('progress-bar-3');
			progresBar[2].classList.add('progress-bar-4');
			arr[0] = 0;
			arr[1] = 0;
			arr[2] = 100;
		}

		if (arr[0] > arr[1] && arr[0] > arr[2]) {
				progresBar[0].classList.remove('progress-bar-1');
				progresBar[0].classList.remove('progress-bar-2');
				progresBar[0].classList.remove('progress-bar-3');
				progresBar[0].classList.add('progress-bar-3');
				mainCardsActive[0].classList.remove('main-cards-item-active');
				mainCardsActive[1].classList.remove('main-cards-item-active');
				mainCardsActive[2].classList.remove('main-cards-item-active');
				mainCardsActive[0].classList.add('main-cards-item-active');

			}  else if (arr[0] > arr[1] && arr[0] < arr[2]) {
				progresBar[0].classList.remove('progress-bar-1');
				progresBar[0].classList.remove('progress-bar-2');
				progresBar[0].classList.remove('progress-bar-3');
				progresBar[0].classList.add('progress-bar-2');

				
				} else if (arr[0] < arr[1] && arr[0] < arr[2]) {
						progresBar[0].classList.remove('progress-bar-1');
						progresBar[0].classList.remove('progress-bar-2');
						progresBar[0].classList.remove('progress-bar-3');
						progresBar[0].classList.add('progress-bar-1');
	
					} else if (arr[0] < arr[1] && arr[0] > arr[2]) {
						progresBar[0].classList.remove('progress-bar-1');
						progresBar[0].classList.remove('progress-bar-2');
						progresBar[0].classList.remove('progress-bar-3');
						progresBar[0].classList.add('progress-bar-2');
	
					}


			if (arr[1] > arr[0] && arr[1] > arr[2]) {
				progresBar[1].classList.remove('progress-bar-1');
				progresBar[1].classList.remove('progress-bar-2');
				progresBar[1].classList.remove('progress-bar-3');
				progresBar[1].classList.add('progress-bar-3');
				mainCardsActive[0].classList.remove('main-cards-item-active');
				mainCardsActive[1].classList.remove('main-cards-item-active');
				mainCardsActive[2].classList.remove('main-cards-item-active');
				mainCardsActive[1].classList.add('main-cards-item-active');

			}  else if (arr[1] > arr[0] && arr[1] < arr[2]) {
				progresBar[1].classList.remove('progress-bar-1');
				progresBar[1].classList.remove('progress-bar-2');
				progresBar[1].classList.remove('progress-bar-3');
				progresBar[1].classList.add('progress-bar-2');
				
				} else if (arr[1] < arr[0] && arr[1] < arr[2]) {
						progresBar[1].classList.remove('progress-bar-1');
						progresBar[1].classList.remove('progress-bar-2');
						progresBar[1].classList.remove('progress-bar-3');
						progresBar[1].classList.add('progress-bar-1');
	
					} else if (arr[1] < arr[0] && arr[1] > arr[2]) {
						progresBar[1].classList.remove('progress-bar-1');
						progresBar[1].classList.remove('progress-bar-2');
						progresBar[1].classList.remove('progress-bar-3');
						progresBar[1].classList.add('progress-bar-2');
	
					}

			if (arr[2] > arr[0] && arr[2] > arr[1]) {
				progresBar[2].classList.remove('progress-bar-1');
				progresBar[2].classList.remove('progress-bar-2');
				progresBar[2].classList.remove('progress-bar-3');
				progresBar[2].classList.remove('progress-bar-4');
				progresBar[2].classList.add('progress-bar-3');
				mainCardsActive[0].classList.remove('main-cards-item-active');
				mainCardsActive[1].classList.remove('main-cards-item-active');
				mainCardsActive[2].classList.remove('main-cards-item-active');
				mainCardsActive[2].classList.add('main-cards-item-active');

			}  else if (arr[2] > arr[0] && arr[2] < arr[1]) {
				progresBar[2].classList.remove('progress-bar-1');
				progresBar[2].classList.remove('progress-bar-2');
				progresBar[2].classList.remove('progress-bar-3');
				progresBar[2].classList.add('progress-bar-2');
				
				} else if (arr[2] < arr[0] && arr[2] < arr[1]) {
						progresBar[2].classList.remove('progress-bar-1');
						progresBar[2].classList.remove('progress-bar-2');
						progresBar[2].classList.remove('progress-bar-3');
						progresBar[2].classList.add('progress-bar-1');
	
					} else if (arr[2] < arr[0] && arr[2] > arr[1]) {
						progresBar[2].classList.remove('progress-bar-1');
						progresBar[2].classList.remove('progress-bar-2');
						progresBar[2].classList.remove('progress-bar-3');
						progresBar[2].classList.add('progress-bar-2');
	
					}
			if (parseFloat(arr[2]) == 100) {
				progresBar[0].classList.remove('progress-bar-1');
				progresBar[0].classList.remove('progress-bar-2');
				progresBar[0].classList.remove('progress-bar-3');
				progresBar[1].classList.remove('progress-bar-1');
				progresBar[1].classList.remove('progress-bar-2');
				progresBar[1].classList.remove('progress-bar-3');
				progresBar[2].classList.add('progress-bar-4');
			}

		

		resultGolos[0].innerHTML = arr[0]+'%';
		resultGolos[1].innerHTML = arr[1]+'%';
		resultGolos[2].innerHTML = arr[2]+'%';

		console.log(arr[0]);
		console.log(arr[1]);
		console.log(arr[2]);

	});


		

});