var sofia_stops = [
	{id: '0914', name: 'Витоша Тюлип', description: 'в посока х-л Хемус', buses: [98, 64]},
	{id: '2038', name: 'Джеймс Баучер', description: 'в посока Витоша Тюлип', buses: [98, '10T']},
	{id: '0909', name: 'Хладилника', description: 'в посока център / България', buses: [83, '10T']},
	{id: '6359', name: 'Фурначе (98)', description: 'в посока х-л Хемус', buses: [98]},
	{id: '1801', name: 'Южен Парк (83)', description: 'в посока бул. България', buses: [83]},
	{id: '0291', name: 'Гоце Делчев (83)', description: 'в посока Зоопарк', buses: [83]},
	{id: '0313', name: 'Гоце Делчев (7T)', description: 'в посока НДК', buses: ['7T']},
	{id: '1282', name: 'пл. Македония (7T)', description: 'в посока България / Борово', buses: ['7T']},
];


function displayStops(filter){

	$(document).ready(function(){
		stops_html = '';
		$.each(sofia_stops, function(i, stop){
			var stop_html = '<a href="#" class="list-group-item spirka-item" style="background-image: url(\'http://www.bgmaps.com/templates/skgt/img/'+stop.id+'\');"><div class="stop-color-overlay"><span class="badge">'+stop.id+'</span><h4 class="list-group-item-heading">'+stop.name+'</h4><p class="list-group-item-text">'+stop.description+' - '+stop.buses+'</p></div></a>';
			stops_html =  stops_html + stop_html;
		});
		$('.bus-stops-list').html(stops_html);
	});

}

$(document).ready(function(){
	$( document ).on( "click", "a.spirka-item", function(e) {
	  e.preventDefault();
	  window.clipboardData.setData ("Text", 'tralala');
	  alert( "Set in clipboard!" ); 
	});
	//window.clipboardData.setData ("Text", input.value);
});
