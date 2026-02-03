ServerEvents.tags('item', event => {

	//fix tallow & animal fat
	event.add('hexerei:tallow_meltable', 'immersive_weathering:tallow')
	event.add('forge:tallow', 'hexerei:animal_fat')
	event.add('forge:tallow', 'immersive_weathering:tallow')
})