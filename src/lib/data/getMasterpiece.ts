export const masterpieces = [
	{
		id: 1,
		name: 'Mona Lisa',
		date: 1503,
		artist: 'Leonardo Da Vinci'
	},
	{
		id: 2,
		name: 'Girl with a Pearl Earring',
		date: 1665,
		artist: 'Johannes Vermeer'
	},
	{
		id: 3,
		name: 'The Birth of Venus',
		date: 1484,
		artist: 'Sandro Botticelli'
	},
	{
		id: 4,
		name: 'The Starry Night',
		date: 1889,
		artist: 'Vincent van Gogh'
	},
	{
		id: 5,
		name: 'Arrangement in Grey and Black No. 1',
		date: 1871,
		artist: 'James Abbott McNeill Whistler'
	},
	{
		id: 6,
		name: 'The Kiss',
		date: 1907,
		artist: 'Gustav Klimt'
	},
	{
		id: 7,
		name: 'The Arnolfini Portrait',
		date: 1434,
		artist: 'Jan van Eyck'
	},
	{
		id: 8,
		name: 'The Garden of Earthly Delights',
		date: 1503,
		artist: 'Hieronymus Bosch'
	},
	{
		id: 9,
		name: 'A Sunday Afternoon on the Island of La Grande Jatte',
		date: 1884,
		artist: 'Georges Seurat'
	},
	{
		id: 10,
		name: "Les Demoiselles d'Avignon",
		date: 1907,
		artist: 'Pablo Picasso'
	},
	{
		id: 11,
		name: 'The Harvesters',
		date: 1565,
		artist: 'Pieter Bruegel the Elder,'
	},
	{
		id: 12,
		name: "Le Dejeuner sur l'herbe",
		date: 1863,
		artist: 'Edouard Manet'
	},
	{
		id: 13,
		name: 'Composition with Red Blue and Yellow',
		date: 1930,
		artist: 'Piet Mondrian'
	},
	{
		id: 14,
		name: 'Las Meninas',
		date: 1656,
		artist: 'Diego Rodriguez de Silva y Velazquez'
	},
	{
		id: 15,
		name: 'The Naked Maja',
		date: 1797,
		artist: 'Francisco de Goya y Lucientes'
	},
	{
		id: 16,
		name: 'Guernica',
		date: 1937,
		artist: 'Pablo Picasso'
	},
	{
		id: 17,
		name: 'Grande Odalisque',
		date: 1814,
		artist: 'Jean Auguste Dominique Ingres'
	},
	{
		id: 18,
		name: 'Liberty Leading the People',
		date: 1830,
		artist: 'Eugene Delacroix'
	},
	{
		id: 19,
		name: 'Impression, Sunrise',
		date: 1874,
		artist: 'Claude Monet'
	},
	{
		id: 20,
		name: 'Wanderer above the Sea of Fog',
		date: 1819,
		artist: 'Caspar David Friedrich'
	}
];

export const getMasterpiece = async () => {
	const r = Math.floor(Math.random() * masterpieces.length);
	return {
		...masterpieces[r],
		url: '/masterpieces/' + masterpieces[r].id + '.png'
	};
};
