$(document).ready(function(){
	var $cardForm = $("#cardForm")
	var $main = $(".main")

	var boxTemplate = $('#box-template').html();

	cards = JSON.parse(localStorage.getItem('cards')) || [];

	$cardForm.on('submit', function(event){
		event.preventDefault();

		var $form = $(this);

		var card = {
			title: $form.find('[name="name"]').val(),
			body: $form.find('[name="body"]').val(),
			color: $form.find('[name="color"]').val()
		}

		addCard(card);
		cards.push(card)

		updateCardStorage()

		
	})
	$main.on('click', '.card-close', function(event){

		
		$(this).parents(".card").remove()
		

		
		updateCardStorage()
	})

	$main.on('click', '.card-edit', function(event){

		var title89 = $(this).parents(".card").find('span.card-title').text()

		console.log($(this).parents(".card"))
		

		console.log(cards)
		
		$(this).parents(".card").remove()

		event.preventDefault();

		var $form = $("#cardForm");

		var card = {
			title: $form.find('[name="name"]').val(),
			body: $form.find('[name="body"]').val(),
			color: $form.find('[name="color"]').val()
		}

		// inserting into a array

		addCard(card);
		cards.push(card)
		

		updateCardStorage()
	

		console.log("wee")


	})

	addCard = function(card) {
		var $card = $(boxTemplate);
		$card.find('span.card-title').text(card.title);
		$card.find('p.card-body').text(card.body);
		$card.css('background-color', card.color);
		$card.draggable({snap:".drag-area", grid: [ 45, 210 ], obstacle:".container", preventCollision: true, containment: "#printout" });
		$("#printout").append($card);
	}

	var updateCardStorage = function(){
		var cardss = [];
		$('.card').each(function(idx, el){
			
			var tittle = $(el).find('span.card-title').text()
			var booty = $(el).find('p.card-body').text()

			var color = $(el).css('background-color')

			var eachCard = {"title": tittle, "body": booty, "color":color}

			cardss.push(eachCard)
			

		})
		// console.log(currentCards)
		localStorage.setItem('cards', JSON.stringify(cardss))
		// console.log(JSON.stringify(cards))
		// console.log(cards)
		
	}

	cards.forEach(addCard)
});