// Esta función crea un nuevo deck
import _ from 'underscore';

/** 
	*@param {array}

	*
	* */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
	if (!tiposDeCarta || tiposDeCarta.length === 0)
		throw new Error('tipos de carta obligatorio como arreglo de strings');

	if (!tiposEspeciales || tiposEspeciales.length === 0)
		throw new Error('tipos especiales obligatorio como arreglo de strings');

	let deck = [];
	for (let i = 2; i <= 10; i++) {
		for (let tipo of tiposDeCarta) {
			deck.push(i + tipo);
		}
	}

	for (let tipo of tiposDeCarta) {
		for (let esp of tiposEspeciales) {
			deck.push(esp + tipo);
		}
	}
	// console.log( deck );
	deck = _.shuffle(deck);
	return deck;
};
