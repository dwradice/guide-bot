const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} has logged on`);
});

//// Setting a timer
// Timer functions //
let ready = true;

setLockout = () => {
  ready = false;
};

setReady = () => {
  ready = true;
};

setTimer = () => {
  setLockout();
  setTimeout(setReady, 86400000);
};

client.on('message', (message) => {
  try {

    //// Reactions ////

    if(message.content.match(/thayne/i)) {
      const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Thayne');
      message.react(reactionEmoji);
    }

    if(message.content.match(/\bsword\b/i)) {
      message.react('⚔');
    }

    if(message.content.match(/\bbow\b/i) || message.content.match(/\barrow\b/i)) {
      message.react('🏹');
    }

    if(message.content.match(/\bforklift\b/i)) {
      const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Forklift');
      message.react(reactionEmoji);
    }

    if(message.content.match(/\bkangen\b/i) || message.content.match(/\bmy\b\s\bblood\b\s\bmoving\b/i) ) {
      const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'basic');
      message.react(reactionEmoji);
    }

    if(
      message.content.match(/\bslut\b/i) ||
      message.content.match(/\bsexy\b/i) ||
      message.content.match(/\bsex\b/i) ||
      message.content.match(/\bsquirt\b/i) ||
      message.content.match(/\bthick\b/i) ||
      message.content.match(/\blick\b/i)
      ) {
        message.react('🥵')
      }

      
    //// Live Respond ////
    if (ready && !message.author.bot) {

      // 'Maiden'
      if (message.content.match(/\bmaiden\b/i)) {
        message.channel.send('Oh to all the fair maidens that I have kissed before, I am so sorry');
        setTimer();
      }

      // 'Leather'
      if (message.content.match(/\bleather\b/i)) {
        message.channel.send('Are any of the guys in the chat leatherworkers by chance? I need to boil some leather for an authentic 1400\'s codpiece I am making and need some help, no questions please 😉');
        setTimer();
      }

      // 'Pelican
      '
      if (message.content.match(/\bpelican\b/i)) {
        message.channel.send('ah, the mighty pelican, it is a symbol of sacrifice and responsibility, guided by these principles I truly never run a\'fowl\' 😏', {
          files: [
            {
              attachment: `${__dirname}/img/guide_pelican.png`,
              name: 'guide.png'
            }
          ]
        });
        setTimer();
      }

      // 'Doctor'
      // if (message.content.match(/\bdoctor\b/i)) {
      //   message.channel.send('Doctors HATE this one simple trick! They\'ll be asking you, "What do you do for a living?!?!"', {
      //     files: [
      //       {
      //         attachment: `${__dirname}/img/guide_doctor.png`,
      //         name: 'guide.png',
      //       }
      //     ]
      //   });
      //   setTimer();
      // }

      // 'Competition'
      if (message.content.match(/\bcompetition\b/i)) {
        message.channel.send('I know a thing or two about competition, I was honored to compete against the best of the best at the Mid-state Tri-annual Semi-Amateur Archery League this year! Here\'s a picture of our champion!', {
          files: [
            {
              attachment: `${__dirname}/img/guide_compete.png`,
              name: 'guide.png',
            }
          ]
        });
        setTimer();
      }

    }

    //// Prompts ////
    const firstWord = message.content.split(' ')[0];
    const user = `<@${message.author.id}>`;

    if (firstWord === '!guide' && !message.author.bot) {
      
      // !guide teach
      if (message.content.match(/\bguide\b\s\bteach\b/i)) {
        const msg = [
          // 'Casual reminder Please use my email address for official business, I do NOT use Messenger and may not get those messages.',
          // "Yikes When you find out you've been doing a critical archery fundamental backwards since day one",
          "Friendly reminder: Manchurian archery has one of the most harrowing histories of any martial art I've seen.",
          "Buckle up it's time for a thread: I can now publicly say that the national neurosurgery conference I've been working on and promoting for two years is cancelled.",
          'Normalize allowing yourself the utter flamboyance of a fishtail pommel. 🐟🐟',
          "We need to talk about men who joke about cutting off other men's pony tails.",
          'Attention: a professional-grade medieval tent that can sleep three people at re-enactments and festivals in any season is only $656',
          "Just to be clear I am not a comedian with a day job, I'm a nonprofit executive and a grassroots leader venting the stress by wearing a fine Easter bonnet.",
          "There's nothing wrong with ignorance, no one becomes the MOST WISE MASTER in a single day",
          "I'll admit I send comments to women when they post good pictures. However, mine always include a major plot twist that shifts the genre from DM-flirting to fantasy-horror or allegorical commentary. What starts as 'hey, what's up, baby?' turns to 'Quick, my penis has been abjucted and you are the only one who can find it!'",
          'Been listening to the Foo Fighters recently, someone said the lead singer looks a bit like me 😉',
          'Why be a sheep when you can be a fawn?',
          // "'''You miss 100% of the shots you don't take' - Wayne Gretsky' - Michael Scott' - Guide",
          "You've just been struck by Cupid's arrow, sadly, it was fired by me, so the shot is fatal.",
          'You can make nearly anything from PVC',
          'Whoever gives my eulogy, tell the room my greatest quality as a fighter was pain tolerance and my greatest quality as a lover was handling rejection',
          'Normalize reposting 3 year old posts that got zero likes.',
          "They call me Most Wise Master, but it isn't a race thing, promise! Want to see my collection of swords?",
          // "Just got my hair and beard cut! Check out Family Video on 5th street if you want a fresh new look, just ask for 'The Guide'",
          // "So then I tell her 'This chainmail isn't for the stage, hunny. This is battle-hardened steel, designed to protect me during combat from deadly blows', so she says back to me 'speaking of blows, lets go back to my place'",
          "Live your life like no one is watching! I mean, it's not like there is a growing collection of every dumb thing you say on the internet that is being endlessly mocked by a dozen or more people. That would be insane!",
        ];
        message.channel.send(msg[Math.floor(Math.random() * msg.length)]);
      }

      //!guide memory
      if (message.content.match(/\bguide\b\s\bmemory\b/i)) {
        const msg = [
          // `Oh ${user}, I have so many fond memories of our time together, especially that time you promised you would never mock me behind my back, we are such good pals!`,
          `Remember that time we got lost in the woods while practicing medieval hunting techniques and we had to spend the night under the stars holding eachother for warmth? My sweater still smells like your musk, ${user}`,
          `I had trained for years in an ancient sword technique, I finally worked my way in to the national championship. I, of course, breeze through the competition and make my way to the final match. A masked figure was all that stood between me and victory. The bell rang and without a second of restraint my opponent carved their username in to my chest, I looked down and it read ${user}`,
          // `My best friend to loiter in parking lots with! Love you ${user} 💘💘`,
          `This night still haunts me. I was walking down the street when two terrifying men began staring at me from their stoop. They started yelling: "where you going, Rapunzel?", "Lovely locks for a lovely boy, would be a shame if somebody cut that pretty hair off your head!". I reached for my claymore, but like a fool I left it at home. That's when I saw ${user} break from the shadows and beat these hair rapists to death. My hero!`,
          `Fuck you, ${user}, don't ever message me again`,
          // `${user} is the reason I decided to become a Most Wise Master, everything I do is to try and live up to your expectations!`,
          // `Oh my god, I just had a dream about you last night, ${user}! We were at a glowstick party back in college and we were wearing the sexiest fur coats you've ever seen, the night ended with us performing the dance number from Pulp Fiction 😂😂`,
          // `${user} is actually secretly my real life friend and just pretends to make fun of me with you guys to fit in. He is going to be the swordbearer in my wedding`,
          `I was dazzling all the women at the Ren Faire with my fishtail pommel when ${user} rolled in with the biggest, thickest sword I had ever seen. They turned to me and said "nice knife you got there, wan't to see what a REAL knight swings?" and cut my blade in twain`,
          `${user} kept sending me messages through Facebook and I never saw them! 😡 PLEASE, I ONLY USE HOTMAIL!!`,
        ];
        message.channel.send(msg[Math.floor(Math.random() * msg.length)]);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);




// img[Math.floor(Math.random() * img.length)]