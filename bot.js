const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "with Mew I a!help", type: 0}});
});

var prefix = "a!"
var answers = [
	  "Did you know that this bot was made because of a friend of Jorge called Luca because he told him he was a bot and that gave him an idea.",
  "Did you know that my favorite Pokemon is Zoroark",
  "Did you know that Goku has perfomed the Kamehameha a total of 97 times throughout all three series.",
  "Did you know that Bulma goes through 17 different hairstyles throughout the series.",
  "Did you know that Android 17's real name is Lapis.",
  "Did you know that Android 18's real name is Lazuli.",
  "Did you know that In Pokemon stadium, it was revealed how Doduo can learn the move fly. Apparently it just runs really fast and the running motion gives it the power of flight! It just floats there, running in place...",
  "Did you know that Genesect is a very futuristic Pokemon, and Kabutops is an ancient fossil. However, there are rumors that Genesect is actually a Kabutops that's been modified. Although the two don't share any of the same types and use barely any of the same attacks, there is a definite resemblence, especially when you compare Genesect's head to Kabuto.",
  "Did you know that Azurill is the only Pokemon that can change it's gender when evolving. When evolving into Marill, Azurill has a 1 in 4 chance of switching genders. Fans have debated whether this is because some amphibians are able to change gender, or that it may have embryonic qualities that mean it hasn't fully formed into a gender yet.",	
  "Did you know that Although Munna wasn't introduced until generation 5, it is actually referenced in the very first game! A woman standing outside of Rock Tunnel in Pokemon Red and Blue dreams about a chunky pink Pokemon with a floral pattern. Clearly the game makers had Munna in mind even way back then.",
  "Did you know that The fight between Goku and Frieza took up a total of three and a half hours of screen time, making it the longest fight in anime history.",
  "Did you know that Goku's mother is a Saiyan known as Gine."
]
var rdmimgs = [
	  "http://38.media.tumblr.com/94e9f3d457a2916b99fd0cecc0793039/tumblr_n9e0clg7821s3bc1no1_500.gif",
  "http://24.media.tumblr.com/887b48c8a385f038f3803b615f65b971/tumblr_mh26ip5Dfj1s3bc1no3_400.gif",
  "https://media.giphy.com/media/nyiPOxRx7J3hK/giphy.gif"

]
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'hello')) {
	
		 message.channel.send(`Hello ${message.author.username}! :wave:`);
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'xd')) {
	
		 message.channel.send(`XD`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	message.channel.send(`Hey ${message.author.username} here's the command list:\n a!xd\n a!hello\n a!ping`);

	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'test')) {
			var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
		var randomimg = rdmimgs[Math.floor(Math.random() * rdmimgs.length)];
	const embed = new Discord.RichEmbed()
  .setTitle("Forshadic #1")
  .setAuthor("Artie", "https://cdn.discordapp.com/avatars/310089392230498315/483a341d8a0fd9eef1908870ba922f40.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription(randomAnswer)
  .setImage(randomimg)
.addField("Types:",
    "Psychic/Ice.")
		.setFooter("Description by TSComega.")
  .setTimestamp()
  message.channel.send({embed});
	
	}
});

//Important
client.login(process.env.BOT_TOKEN);

