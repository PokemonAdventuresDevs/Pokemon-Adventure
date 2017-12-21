const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "with Mew I a!help", type: 0}});
});
var choosestarter = 0
var starter = 0
var prefix = "a!"
var descriptions = [
	  "Did you know that this bot was made because of a friend of Jorge called Luca because he told him he was a bot and that gave him an idea.",
  "Did you know that my favorite Pokemon is Zoroark",
  "Did you know that Goku has perfomed the Kamehameha a total of 97 times throughout all three series."
]
var imgs = [
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
	if (message.content.startsWith(prefix + 'resetstartvar')) {
	choosestarter = 0;

	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'starter')) {
	message.channel.send(message.author.toString() + `\n**Choose your Starter:\n -Rowlet**     *-a!choosestarter rowlet*\n **-Popplio**    *-a!choosestarter popplio*\n **-Litten**      *-a!choosestarter litten*`);

	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'choosestarter litten')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Litten")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Litten is a solitary Pokémon that does not typically display its emotions. While grooming, it collects fur inside its stomach. By setting the stored fur alight, it can spit fireballs that change based on how it coughs. Litten's fur produces flammable oils, and when it begins shedding, it burns all its fur in a blaze.")
  .setImage("https://cdn.bulbagarden.net/upload/thumb/0/0e/725Litten.png/250px-725Litten.png")
.addField("Types:",
    "Fire.")
  .setTimestamp()
  message.channel.send({embed});
		message.channel.send(message.author.toString() + `, Do you want to take Litten with you?         *-a!accept      -a!deny*`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'choosestarter rowlet')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Rowlet")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("A nocturnal Pokémon, it stores energy during the day through photosynthesis. It approaches opponents by silently gliding, before unleashing a volley of kicks. This Pokémon is able to rotate its head almost 180 degrees, and has excellent night vision.")
  .setImage("https://vignette.wikia.nocookie.net/es.pokemon/images/f/f3/Rowlet_USUL.png/revision/latest/scale-to-width-down/350?cb=20170818204435")
.addField("Types:",
    "Grass/Flying.")
  .setTimestamp()
  message.channel.send({embed});
		message.channel.send(message.author.toString() + `, Do you want to take Rowlet with you?          *-a!accept      -a!deny*`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'choosestarter popplio')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Popplio")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Popplio is able to snort bubbles of water from its nose, which it uses as part of its battle strategy, and it can swim at 25 mph (40 km/h). On land, it uses the elasticity of its bubbles to perform acrobatic stunts and jumps.")
  .setImage("https://vignette.wikia.nocookie.net/es.pokemon/images/1/12/Popplio_USUL.png/revision/latest/scale-to-width-down/350?cb=20170818204538")
.addField("Types:",
    "Water.")
  .setTimestamp()
  message.channel.send({embed});
		message.channel.send(message.author.toString() + `, Do you want to take Popplio with you?          *-a!accept      -a!deny*`);
		choosestarter = 1;
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'accept')) {
	
	message.channel.send(message.author.toString() + `, You took Popplio with you.`);

	}
});
//Important
client.login(process.env.BOT_TOKEN);

