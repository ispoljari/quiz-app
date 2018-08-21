// This data structure stores all the questions and answers with some additional information
const questionsDataStore = [
	{
		question: 'Which of these musical themes composed by John Williams, appears in "Star Wars" Episode I / Fight scene on Naboo: Obi-Wan Kenobi and Qui-Gonn Jinn vs. Darth Maul?',
		answers: ['Duel of the Fates','Battle of the Heroes','Imperial March','A New Hope'],
		correctAnswer: 'Duel of the Fates',
		feedback: 'The force runs strong with you.',
		imageSrc: 'img/sw.jpg',
		alt: 'The image shows a famous scene from the movie Star Wars Episode I in which Obi-Wan Kenobi and Qui-Gon Jinn fight Darth Maul.'
	},
	{
		question: 'In which of the following tv shows appears the musical theme “Winds of winter” by Ramin Djawadi?',
		answers: ['Black Mirror','Agents of Shield','Game of Thrones','Westworld'],
		correctAnswer: 'Game of Thrones',
		feedback: 'You seem to know more than Jon Snow.',
		imageSrc: 'img/got.jpg',
		alt: 'The image shows Daeneris, one of the main characters of the tv-show Game of thrones, sitting on a rock beside her dragon.'
	},
	{
		question: 'Bear Mccreary’s “Prelude to war” appears as a battle theme in which of the following sci-fi tv shows:',
		answers: ['Star Trek: Voyager','Battlestar Galactica (2004.)','Doctor Who','Star Gate SG1'],
		correctAnswer: 'Battlestar Galactica (2004.)',
		feedback: 'So say we all.',
		imageSrc: 'img/bsg.jpg',
		alt: 'The image shows the crew of Battlestar Galactica gathered around a long table.'
	},
	{
		question: 'The musical theme “Inama Nushif” composed by Brian Tyler, appears in:',
		answers: ['Frank Herbert’s Children of Dune','The Hunger Games: Mockingjay','Prince of Persia: The Sands of Time','10 000 B.C.'],
		correctAnswer: 'Frank Herbert’s Children of Dune',
		feedback: 'History is written in the sands of Arrakis.',
		imageSrc: 'img/dune.jpg',
		alt: 'The image shows an artistic portrayal of a cluster of sand worms on the Dune planet.'
	},
	{
		question: 'Hans Zimmer composed the soundtrack album for the movie "Gladiator". Which one of the following musical themes appeared in that movie?',
		answers: ['Now We Are Free','Blood Oath','Hero','A knife in the dark'],
		correctAnswer: 'Now We Are Free',
		feedback: 'What we do in life, echoes in Eternity.',
		imageSrc: 'img/gladiator.jpg',
		alt: 'The image shows general Maximus, the Gladiator, in a field of wheat walking towards his wife and child.'
	},
	{
		question: 'Another movie for which Hans zimmer composed the soundtrack album is "Interstellar". Which one of the following musical themes appears in that movie:',
		answers: ['Home','Into the West','Day One','Mhysa'],
		correctAnswer: 'Day One',
		feedback: 'Do not go gentle into that good night.',
		imageSrc: 'img/interstellar.jpg',
		alt: 'The image shows the main characters from the movie Interstellar, Muprhy and Cooper, standing in front of their house and looking up at a sky full of stars.'
	},
	{
		question: '“Baba Yetu”, composed by Christopher Tin, was the theme song for which of the following video games:',
		answers: ['The Elder Scrolls III: Morrowind','Fallout III','Dragon Age : Inquisition','Civilization IV'],
		correctAnswer: 'Civilization IV',
		feedback: 'A very cool game.',
		imageSrc: 'img/civilization.jpg',
		alt: 'The image shows the Civilization IV game logo.'
	},
	{
		question: '“Adagio in D-Minor”, a musical theme for the 2007. movie “Sunshine”, was composed by:',
		answers: ['John Williams','Hans Zimmer','John Murphy','James Horner'],
		correctAnswer: 'John Murphy',
		feedback: 'Not bad for a pile of Stardust.',
		imageSrc: 'img/sunshine.jpg',
		alt: 'The image shows a silhouette of a man who is looking at a huge yellow sun through a large space ship window.'
	},
	{
		question: 'James Horner composed the music for the movie “Braveheart”. Can you guess which one of the following music pieces is the love theme in the movie:',
		answers: ['The Gift of a Thistle','Ender’s Promise','Jin Erso & Hope Suite','Skyfall'],
		correctAnswer: 'The Gift of a Thistle',
		feedback: 'Your heart is free! Have the courage to follow it.',
		imageSrc: 'img/braveheart.jpg',
		alt: 'The image shows a little girl giving a thistle to the main character William Wallace, as a sign of affection.'
	},
	{
		question: 'Howard Shore composed the music for the “Lord of the Rings” trilogy. Which one of these ominous sounding themes appears somewhere near the end of “The fellowship of the ring”?',
		answers: ['Across the Stars','The Bridge Od Khazad Dum','American Beauty','The Journey to Akator'],
		correctAnswer: 'The Bridge Od Khazad Dum',
		feedback: 'You shall not pass! Just kidding.',
		imageSrc: 'img/lotr.jpg',
		alt: 'The image shows Gandalf standing in front of a fiery demon Balrog on the bridge od Khazad Dum. A famous scene from The Lord of The Rings trilogy.'
	}
];

// This data structure stores the final feedback strings and images
const finalFeedbackStore = [
	{ 
		feedback:	'All of your answers are wrong. Next time you enjoy your favourite movie try paying a little more attention to the musical background.',
		imageSrc:	'img/sad_face.jpg',
		alt: 'A sad, black and white, smiley-face.'
	},
	{
		feedback: 'It appears you have some knowledge of the subject matter, but there is still room for improvement.',
		imageSrc: 'img/happy-face.jpg',
		alt: 'A happy, black and white, smiley-face.'
	},
	{
		feedback: 'You didn’t achieve a perfect score but you seem to know your stuff. Keep enjoying the music.',
		imageSrc: 'img/good_job.jpg',
		alt: 'On the image is written: good job, in black and white.'
	},
	{
		feedback: 'All of your answers are correct. Kudos!',
		imageSrc: 'img/thumbs_up.jpg',
		alt: 'The image shows a hand with thumbs up.'
	}
];