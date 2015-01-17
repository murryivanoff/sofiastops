var sofia_stops = [
	{id: '0914', name: 'Витоша Тюлип', description: 'в посока х-л Хемус', buses: [98, 64]},
	{id: '2038', name: 'Джеймс Баучер', description: 'в посока Витоша Тюлип', buses: [98, 10]},
	{id: '0909', name: 'Хладилника', description: 'в посока център / България', buses: [83, 10]},
	{id: '6359', name: 'Фурначе 98', description: 'в посока х-л Хемус', buses: [98]},
	{id: '1801', name: 'Южен Парк 83', description: 'в посока бул. България', buses: [83]},
	{id: '0291', name: 'Гоце Делчев 83', description: 'в посока Зоопарк', buses: [83]},
];


function displayStops(filter){

	$(document).ready(function(){
		stops_html = '';
		$.each(sofia_stops, function(i, stop){
			var stop_html = '<div class="list-group"><a href="#" class="list-group-item spirka-item" style="background-image: url(\'http://www.bgmaps.com/templates/skgt/img/'+stop.id+'\');"><span class="badge">'+stop.id+'</span><h4 class="list-group-item-heading">'+stop.name+'</h4><p class="list-group-item-text">'+stop.description+' - '+stop.buses+'</p></a></div>';
			stops_html =  stops_html + stop_html;
		});
		$('.bus-stops-list').html(stops_html);
	});

}

