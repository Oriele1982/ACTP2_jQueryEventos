$(function() {
	//2. Apertura de la tarjeta
	//Si revisan el index en sus navegadores, verán que la segunda tarjeta esta abierta y 
	//que las otras dos se encuentran cerradas. Por otro lado, si revisamos el código 
	//HTML veremos que la tarjeta abierta tiene la clase card--open.
	//Lo que se pide es que al gatillar el click dentro de la tarjeta (la clase .card) se 
	//haga un toggle de la clase card--open.
	$(".card").on("click", function(){
		$(this).toggleClass("card--open");		
	});

		//3. Like
			//Dentro de cada carta hay un corazón para que uno pueda hacer like. 
			//Es necesario implementar que al hacer click en el elemento con clase 
			//.card__like se realice un toggle de la clase .card__like--red.
			//Tip: Recuerda que .card__like se encuentra dentro de .card lo 
			//tanto todos los eventos que gatilles sobre .card__like también se gatillarán 
			//en .card. Es parte de la tarea evitar que un evento se gatille en lugares no 
			//deseados.
		$(".card__like").on("click", function(event){
			event.preventDefault();
			event.stopPropagation();
			$(this).toggleClass("card__like--red");

			var target = $(this).parent().find(".social__element").eq(1).children(".social__number");
			var likes = parseInt(target.text() );

			if($(this).hasClass(".card__like--red")) {
				likes++
			
			}else {
				likes --
			}

			target.text(likes)
		});	

		//4. Botón Seguir
		//Cada tarjeta tiene un botón que dice 'Seguir'. Lo que se pide es que cada vez que
		//se le hace click al elemento .card__follow-btn se le agregue la clase 
		//.card__follow-btn--following y, si ya la tiene se le quite 
		//(o sea hacer un toggle de la clase).
		$(".card__follow-btn").on("click", function(event){
			event.preventDefault();
			event.stopPropagation();

			var target = $(this).parent().siblings(".social").find(".social__number").eq(2)

			$(this).toggleClass("card__follow-btn--following");
			var follow = parseInt(target.text());

			if($(this).hasClass("card__follow-btn--following")) {
				$(this).text("Siguiendo");
				follow += 1
			
			}else{
				$(this).text("Seguir");
				follow -= 1
			}

			target.text(follow)
		});

		//5.

		$("#image").on("change", function(){
			
			$(".create__image img").attr("src", `assets/images/squared/${$(this).val()}`);
		});

		//6

		$("#image").on("change", function(){
			
			$(".create__profile img").attr("src", `assets/images/profiles/${$(this).val()}`);
		});


		7//	

		$(".create__form").on("submit", function(event){
			event.preventDefault();

			var _this       = $(this);
			var name        = _this.find("[name='name']").val()
			var author      = _this.find("[name='author']").val()
			var author_name = _this.find("[name='author']").children(':selected').text()
			var image 		= _this.find("[name='image']").val()
			var followers   = _this.find("[name='followers']").val()
			var likes 		= _this.find("[name='likes']").val()
			var following   = _this.find("[name='following']").val()
			
			//console.log(name,author,author_name,image,followers,likes,following)

			$(".cards").append(`<li class="card">
			      <div class="card__highlight">
			        <img class="card__img" src="./assets/images/squared/17.jpg" alt="">
			      </div>
			      <div class="card__content">
			        <div class="card__profile-container">
			          <img class="card__profile" src="./assets/images/profiles/she.jpg" alt="">
			        </div>
			        <a class="card__like card__like--red" href="#">
			          <i class="fas fa-heart"></i>
			        </a>
			        <div class="card__title">
			          <h2>Golden Gate Bridge, CA</h2>
			        </div>
			        <div class="card__author">
			          <h3 class="card__author-name">Margot Robbie</h3>
			        </div>
			        <div class="card__hidden">
			          <ul class="social">
			            <li class="social__element">
			              <div class="social__number">8526</div>
			              <div class="social__text">Followers</div>
			            </li>
			            <li class="social__element">
			              <div class="social__number">51,3K</div>
			              <div class="social__text">Likes</div>
			            </li>
			            <li class="social__element">
			              <div class="social__number">106</div>
			              <div class="social__text">Following</div>
			            </li>
			          </ul>
			          <div class="card__follow">
			            <button class="card__follow-btn">Seguir</button>
			          </div>
			        </div>
			      </div>
			    </li>`);


			 _this.find('[name="name"]').val('')
			 _this.find("[name='author']").val('uk.png')
			 _this.find("[name='image']").val('uk.png')
			 _this.find("[name='followers']").val('')
			 _this.find("[name='likes']").val('')
			 _this.find("[name='following']").val('')
			 $(".create__image img").attr(`assets/images/squared/uk.png`);
			 $(".create__profile img").attr(`assets/images/profiles/uk.png`);
		});
});
	
	






