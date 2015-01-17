var sofia_stops = [
	{id: '0914', name: 'Витоша Тюлип', description: 'в посока х-л Хемус', buses: [98, 64]},
	{id: '2038', name: 'Джеймс Баучер', description: 'в посока Витоша Тюлип', buses: [98, 10]},
	{id: '6359', name: 'Фурначе 98', description: 'в посока х-л Хемус', buses: [98]},
];


function displayStops(filter){

	$(document).ready(function(){
		stops_html = '';
		$.each(sofia_stops, function(i, stop){
			var stop_html = '<div class="list-group"><a href="#" class="list-group-item"><span class="badge">'+stop.id+'</span><h4 class="list-group-item-heading">'+stop.name+'</h4><p class="list-group-item-text">'+stop.description+' - '+stop.buses+'</p></a></div>';
			stops_html =  stops_html + stop_html;
		});
		$('.bus-stops-list').html(stops_html);
	});

}

