export const GET = async () => {
	// get a random word from the array

	const r = Math.floor(Math.random() * words.length);
	const word = words[r];

	return new Response(JSON.stringify(word));
};

const words = [
	{
		word: 'zoo',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/zoo.png'
	},
	{
		word: 'zebra',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/zebra.png'
	},
	{
		word: 'yawn',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/yawn.png'
	},
	{
		word: 'x-ray',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/x-ray.png'
	},
	{
		word: 'write',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/write.png'
	},
	{
		word: 'worried',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/worried.png'
	},
	{
		word: 'window',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/window.png'
	},
	{
		word: 'whale',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/whale.png'
	},
	{
		word: 'wave',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/wave.png'
	},
	{
		word: 'water',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/water.png'
	},
	{
		word: 'watch',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/watch.png'
	},
	{
		word: 'wall',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/wall.png'
	},
	{
		word: 'walk',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/walk.png'
	},
	{
		word: 'wait',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/wait.png'
	},
	{
		word: 'wagon',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/wagon.png'
	},
	{
		word: 'vulture',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/vulture.png'
	},
	{
		word: 'violin',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/violin.png'
	},
	{
		word: 'vegetable',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/vegetable.png'
	},
	{
		word: 'van',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/van.png'
	},
	{
		word: 'unicorn',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/unicorn.png'
	},
	{
		word: 'umbrella',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/umbrella.png'
	},
	{
		word: 'twirl',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/twirl.png'
	},
	{
		word: 'turtle',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/turtle.png'
	},
	{
		word: 'turkey',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/turkey.png'
	},
	{
		word: 'trumpet',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/trumpet.png'
	},
	{
		word: 'truck',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/truck.png'
	},
	{
		word: 'triangle',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/triangle.png'
	},
	{
		word: 'tree',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/tree.png'
	},
	{
		word: 'tray',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/tray.png'
	},
	{
		word: 'train',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/train.png'
	},
	{
		word: 'toy',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/toy.png'
	},
	{
		word: 'towel',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/towel.png'
	},
	{
		word: 'tooth',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/tooth.png'
	},
	{
		word: 'tomato',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/tomato.png'
	},
	{
		word: 'toad',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/toad.png'
	},
	{
		word: 'tiger',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/tiger.png'
	},
	{
		word: 'tickle',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/tickle.png'
	},
	{
		word: 'think',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/think.png'
	},
	{
		word: 'tent',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/tent.png'
	},
	{
		word: 'television',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/television.png'
	},
	{
		word: 'telephone',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/telephone.png'
	},
	{
		word: 'teapot',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/teapot.png'
	},
	{
		word: 'tea',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/tea.png'
	},
	{
		word: 'table',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/table.png'
	},
	{
		word: 'syrup',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/syrup.png'
	},
	{
		word: 'swing',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/swing.png'
	},
	{
		word: 'swim',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/swim.png'
	},
	{
		word: 'sweater',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sweater.png'
	},
	{
		word: 'swan',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/swan.png'
	},
	{
		word: 'sunglasses',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sunglasses.png'
	},
	{
		word: 'sunflower',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sunflower.png'
	},
	{
		word: 'strawberry',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/strawberry.png'
	},
	{
		word: 'stool',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/stool.png'
	},
	{
		word: 'stone',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/stone.png'
	},
	{
		word: 'stir',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/stir.png'
	},
	{
		word: 'stick',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/stick.png'
	},
	{
		word: 'steak',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/steak.png'
	},
	{
		word: 'starfish',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/starfish.png'
	},
	{
		word: 'squirrel',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/squirrel.png'
	},
	{
		word: 'spoon',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/spoon.png'
	},
	{
		word: 'spin',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/spin.png'
	},
	{
		word: 'soup',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/soup.png'
	},
	{
		word: 'sofa',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sofa.png'
	},
	{
		word: 'sock',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sock.png'
	},
	{
		word: 'soccer',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/soccer.png'
	},
	{
		word: 'soar',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/soar.png'
	},
	{
		word: 'snake',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/snake.png'
	},
	{
		word: 'snail',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/snail.png'
	},
	{
		word: 'smell',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/smell.png'
	},
	{
		word: 'slippers',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/slippers.png'
	},
	{
		word: 'slide',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/slide.png'
	},
	{
		word: 'sky',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sky.png'
	},
	{
		word: 'skip',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/skip.png'
	},
	{
		word: 'sink',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sink.png'
	},
	{
		word: 'sing',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sing.png'
	},
	{
		word: 'shovel',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/shovel.png'
	},
	{
		word: 'shout',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/shout.png'
	},
	{
		word: 'shorts',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/shorts.png'
	},
	{
		word: 'shore',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/shore.png'
	},
	{
		word: 'shoe',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/shoe.png'
	},
	{
		word: 'shirt',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/shirt.png'
	},
	{
		word: 'ship',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/ship.png'
	},
	{
		word: 'sheep',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sheep.png'
	},
	{
		word: 'seashell',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/seashell.png'
	},
	{
		word: 'seal',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/seal.png'
	},
	{
		word: 'seahorse',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/seahorse.png'
	},
	{
		word: 'scrub',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/scrub.png'
	},
	{
		word: 'sandwich',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sandwich.png'
	},
	{
		word: 'salad',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/salad.png'
	},
	{
		word: 'sail',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/sail.png'
	},
	{
		word: 'run',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/run.png'
	},
	{
		word: 'rug',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/rug.png'
	},
	{
		word: 'rose',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/rose.png'
	},
	{
		word: 'rocket',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/rocket.png'
	},
	{
		word: 'rock',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/rock.png'
	},
	{
		word: 'robot',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/robot.png'
	},
	{
		word: 'roar',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/roar.png'
	},
	{
		word: 'road',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/road.png'
	},
	{
		word: 'river',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/river.png'
	},
	{
		word: 'ring',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/ring.png'
	},
	{
		word: 'ride',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/ride.png'
	},
	{
		word: 'rice',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/rice.png'
	},
	{
		word: 'ribbon',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/ribbon.png'
	},
	{
		word: 'rhino',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/rhino.png'
	},
	{
		word: 'reindeer',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/reindeer.png'
	},
	{
		word: 'read',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/read.png'
	},
	{
		word: 'rat',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/rat.png'
	},
	{
		word: 'rake',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/rake.png'
	},
	{
		word: 'radio',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/radio.png'
	},
	{
		word: 'raccoon',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/raccoon.png'
	},
	{
		word: 'rabbit',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/rabbit.png'
	},
	{
		word: 'queen',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/queen.png'
	},
	{
		word: 'puppy',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/puppy.png'
	},
	{
		word: 'pumpkin',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pumpkin.png'
	},
	{
		word: 'pour',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pour.png'
	},
	{
		word: 'poodle',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/poodle.png'
	},
	{
		word: 'pocket',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pocket.png'
	},
	{
		word: 'plum',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/plum.png'
	},
	{
		word: 'play',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/play.png'
	},
	{
		word: 'plate',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/plate.png'
	},
	{
		word: 'plane',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/plane.png'
	},
	{
		word: 'pizza',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pizza.png'
	},
	{
		word: 'pineapple',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pineapple.png'
	},
	{
		word: 'pillow',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pillow.png'
	},
	{
		word: 'pig',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pig.png'
	},
	{
		word: 'pie',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pie.png'
	},
	{
		word: 'pickle',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pickle.png'
	},
	{
		word: 'piano',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/piano.png'
	},
	{
		word: 'penguin',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/penguin.png'
	},
	{
		word: 'pencil',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pencil.png'
	},
	{
		word: 'pen',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pen.png'
	},
	{
		word: 'peas',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/peas.png'
	},
	{
		word: 'pear',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pear.png'
	},
	{
		word: 'peach',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/peach.png'
	},
	{
		word: 'parrot',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/parrot.png'
	},
	{
		word: 'pants',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pants.png'
	},
	{
		word: 'panda',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/panda.png'
	},
	{
		word: 'pancake',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pancake.png'
	},
	{
		word: 'pan',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/pan.png'
	},
	{
		word: 'palm',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/palm.png'
	},
	{
		word: 'owl',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/owl.png'
	},
	{
		word: 'oven',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/oven.png'
	},
	{
		word: 'ostrich',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/ostrich.png'
	},
	{
		word: 'orange',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/orange.png'
	},
	{
		word: 'onion',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/onion.png'
	},
	{
		word: 'olive',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/olive.png'
	},
	{
		word: 'octopus',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/octopus.png'
	},
	{
		word: 'nut',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/nut.png'
	},
	{
		word: 'nest',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/nest.png'
	},
	{
		word: 'necklace',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/necklace.png'
	},
	{
		word: 'napkin',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/napkin.png'
	},
	{
		word: 'mushroom',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/mushroom.png'
	},
	{
		word: 'mug',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/mug.png'
	},
	{
		word: 'mouse',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/mouse.png'
	},
	{
		word: 'mountain',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/mountain.png'
	},
	{
		word: 'mop',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/mop.png'
	},
	{
		word: 'moose',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/moose.png'
	},
	{
		word: 'moon',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/moon.png'
	},
	{
		word: 'monkey',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/monkey.png'
	},
	{
		word: 'money',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/money.png'
	},
	{
		word: 'mango',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/mango.png'
	},
	{
		word: 'man',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/man.png'
	},
	{
		word: 'make',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/make.png'
	},
	{
		word: 'mail',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/mail.png'
	},
	{
		word: 'look',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/look.png'
	},
	{
		word: 'lollipop',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/lollipop.png'
	},
	{
		word: 'log',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/log.png'
	},
	{
		word: 'lizard',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/lizard.png'
	},
	{
		word: 'lion',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/lion.png'
	},
	{
		word: 'lift',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/lift.png'
	},
	{
		word: 'leopard',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/leopard.png'
	},
	{
		word: 'lemon',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/lemon.png'
	},
	{
		word: 'leaf',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/leaf.png'
	},
	{
		word: 'laugh',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/laugh.png'
	},
	{
		word: 'lamp',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/lamp.png'
	},
	{
		word: 'lamb',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/lamb.png'
	},
	{
		word: 'lake',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/lake.png'
	},
	{
		word: 'ladybug',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/ladybug.png'
	},
	{
		word: 'lacrosse',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/lacrosse.png'
	},
	{
		word: 'koala',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/koala.png'
	},
	{
		word: 'kitten',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/kitten.png'
	},
	{
		word: 'kite',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/kite.png'
	},
	{
		word: 'kiss',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/kiss.png'
	},
	{
		word: 'kick',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/kick.png'
	},
	{
		word: 'key',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/key.png'
	},
	{
		word: 'kettle',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/kettle.png'
	},
	{
		word: 'kangaroo',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/kangaroo.png'
	},
	{
		word: 'jump',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/jump.png'
	},
	{
		word: 'juice',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/juice.png'
	},
	{
		word: 'jellyfish',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/jellyfish.png'
	},
	{
		word: 'island',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/island.png'
	},
	{
		word: 'insect',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/insect.png'
	},
	{
		word: 'iguana',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/iguana.png'
	},
	{
		word: 'ice-cream',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/ice-cream.png'
	},
	{
		word: 'hug',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hug.png'
	},
	{
		word: 'house',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/house.png'
	},
	{
		word: 'hose',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hose.png'
	},
	{
		word: 'horse',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/horse.png'
	},
	{
		word: 'hop',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hop.png'
	},
	{
		word: 'hippo',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hippo.png'
	},
	{
		word: 'hill',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hill.png'
	},
	{
		word: 'hen',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hen.png'
	},
	{
		word: 'hat',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hat.png'
	},
	{
		word: 'happy',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/happy.png'
	},
	{
		word: 'hand',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hand.png'
	},
	{
		word: 'hamburger',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hamburger.png'
	},
	{
		word: 'hair',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/hair.png'
	},
	{
		word: 'grow',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/grow.png'
	},
	{
		word: 'grocery',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/grocery.png'
	},
	{
		word: 'grass',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/grass.png'
	},
	{
		word: 'grape',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/grape.png'
	},
	{
		word: 'goose',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/goose.png'
	},
	{
		word: 'goat',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/goat.png'
	},
	{
		word: 'glow',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/glow.png'
	},
	{
		word: 'glove',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/glove.png'
	},
	{
		word: 'give',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/give.png'
	},
	{
		word: 'girl',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/girl.png'
	},
	{
		word: 'giraffe',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/giraffe.png'
	},
	{
		word: 'gate',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/gate.png'
	},
	{
		word: 'garden',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/garden.png'
	},
	{
		word: 'frustrated',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/frustrated.png'
	},
	{
		word: 'fruit',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/fruit.png'
	},
	{
		word: 'frown',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/frown.png'
	},
	{
		word: 'frog',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/frog.png'
	},
	{
		word: 'fork',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/fork.png'
	},
	{
		word: 'fly',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/fly.png'
	},
	{
		word: 'flute',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/flute.png'
	},
	{
		word: 'flower',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/flower.png'
	},
	{
		word: 'flag',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/flag.png'
	},
	{
		word: 'fish',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/fish.png'
	},
	{
		word: 'feather',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/feather.png'
	},
	{
		word: 'farm',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/farm.png'
	},
	{
		word: 'fan',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/fan.png'
	},
	{
		word: 'elf',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/elf.png'
	},
	{
		word: 'elephant',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/elephant.png'
	},
	{
		word: 'duck',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/duck.png'
	},
	{
		word: 'drum',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/drum.png'
	},
	{
		word: 'draw',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/draw.png'
	},
	{
		word: 'door',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/door.png'
	},
	{
		word: 'donkey',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/donkey.png'
	},
	{
		word: 'doll',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/doll.png'
	},
	{
		word: 'dog',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/dog.png'
	},
	{
		word: 'dig',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/dig.png'
	},
	{
		word: 'desk',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/desk.png'
	},
	{
		word: 'deer',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/deer.png'
	},
	{
		word: 'dart',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/dart.png'
	},
	{
		word: 'dance',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/dance.png'
	},
	{
		word: 'dad',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/dad.png'
	},
	{
		word: 'cry',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/cry.png'
	},
	{
		word: 'crawl',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/crawl.png'
	},
	{
		word: 'crab',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/crab.png'
	},
	{
		word: 'cow',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/cow.png'
	},
	{
		word: 'corn',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/corn.png'
	},
	{
		word: 'coat',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/coat.png'
	},
	{
		word: 'cloud',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/cloud.png'
	},
	{
		word: 'clothes',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/clothes.png'
	},
	{
		word: 'climb',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/climb.png'
	},
	{
		word: 'circle',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/circle.png'
	},
	{
		word: 'child',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/child.png'
	},
	{
		word: 'chicken',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/chicken.png'
	},
	{
		word: 'cherry',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/cherry.png'
	},
	{
		word: 'cheese',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/cheese.png'
	},
	{
		word: 'cheer',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/cheer.png'
	},
	{
		word: 'chair',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/chair.png'
	},
	{
		word: 'catch',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/catch.png'
	},
	{
		word: 'cat',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/cat.png'
	},
	{
		word: 'carry',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/carry.png'
	},
	{
		word: 'carrot',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/carrot.png'
	},
	{
		word: 'car',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/car.png'
	},
	{
		word: 'cap',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/cap.png'
	},
	{
		word: 'cake',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/cake.png'
	},
	{
		word: 'buzz',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/buzz.png'
	},
	{
		word: 'butterfly',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/butterfly.png'
	},
	{
		word: 'bush',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bush.png'
	},
	{
		word: 'bus',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bus.png'
	},
	{
		word: 'build',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/build.png'
	},
	{
		word: 'bug',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bug.png'
	},
	{
		word: 'broom',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/broom.png'
	},
	{
		word: 'boy',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/boy.png'
	},
	{
		word: 'box',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/box.png'
	},
	{
		word: 'boot',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/boot.png'
	},
	{
		word: 'boat',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/boat.png'
	},
	{
		word: 'blow',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/blow.png'
	},
	{
		word: 'bird',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bird.png'
	},
	{
		word: 'berry',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/berry.png'
	},
	{
		word: 'bell',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bell.png'
	},
	{
		word: 'beet',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/beet.png'
	},
	{
		word: 'bee',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bee.png'
	},
	{
		word: 'bear',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bear.png'
	},
	{
		word: 'bat',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bat.png'
	},
	{
		word: 'bark',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bark.png'
	},
	{
		word: 'banana',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/banana.png'
	},
	{
		word: 'bake',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/bake.png'
	},
	{
		word: 'apple',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/apple.png'
	},
	{
		word: 'ant',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/ant.png'
	},
	{
		word: 'alligator',
		url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1696125601/words/alligator.png'
	}
];
