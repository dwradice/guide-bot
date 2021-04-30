const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} has logged on`);
});

//// Setting a timer

client.on('message', (message) => {
  const ready = true;

  (setLockout) => {
    ready = false;
  };

  (setReady) => {
    ready = true;
  };

  (setTimer) => {
    setLockout();
    setTimeout(setReady, 300000);
  };

  if (!message.author.bot) {
    try {
      //// Live Respond ////
      if (ready) {
        // 'Dave'
        if (message.content.match(/\bDave\b/i)) {
          message.channel.send('People always say I look like Dave Grohl', {
            files: [
              {
                attachment: `${__dirname}/img/guide-dave-kilt.jpg`,
                name: 'dave-grohl.jpg',
              },
            ],
          });
          setTimer();
        }

        // 'Archery', 'Arrow', 'Bow'
        if (
          message.content.match(/archery/i) ||
          message.content.match(/arrow/i) ||
          message.content.match(/\bbow\b/i)
        ) {
          message.channel.send(
            'You guys talking about bows? I am a master bowsman, I hang them above my couch just in case I ever need to defend my domicile'
          );
          setTimer();
        }

        // 'Fawn'
        if (
          message.content.match(/\bfawn\b/i) ||
          message.content.match(/\bdeer\b/i) ||
          message.content.match(/\bhorny*\b/i)
        ) {
          message.channel.send('Feeling horny?', {
            files: [
              {
                attachment: `${__dirname}/img/guide-horns.jpg`,
                name: 'guide-fawn.jpg',
              },
            ],
          });
          setTimer();
        }

        // 'Tent'
        if (message.content.match(/\btent\b/i)) {
          message.channel.send(
            'What if we made-out in my $700 historically accurate squire tent? 😏💦',
            {
              files: [
                {
                  attachment: `${__dirname}/img/guide-tent.jpg`,
                  name: 'guide-tent.jpg',
                },
              ],
            }
          );
          setTimer();
        }

        // 'Master'
        if (message.content.match(/\bmaster\b/i)) {
          message.channel.send('Did someone call for the Most Wise Master?', {
            files: [
              {
                attachment: `${__dirname}/img/guide-contemplative.jpg`,
                name: 'guide-contemplative.jpg',
              },
            ],
          });
          setTimer();
        }
      }

      //// Prompts ////

      // !guide teach
      const firstWord = message.content.split(' ')[0];
      if (
        message.content.match(/\bguide\b\s\bteach\b/i) &&
        firstWord === '!guide' &&
        !message.author.bot
      ) {
        const msg = [
          'Casual reminder Please use my email address for official business, I do NOT use Messenger and may not get those messages.',
          "Yikes When you find out you've been doing a critical archery fundamental backwards since day one",
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
          "'''You miss 100% of the shots you don't take' - Wayne Gretsky' - Michael Scott' - Guide",
          "You've just been struck by Cupid's arrow, sadly, it was fired by me, so the shot is fatal.",
          'You can make nearly anything from PVC',
          'Whoever gives my eulogy, tell the room my greatest quality as a fighter was pain tolerance and my greatest quality as a lover was handling rejection',
          'Normalize reposting 3 year old posts that got zero likes.',
          "They call me Most Wise Master, but it isn't a race thing, promise! Want to see my collection of swords?",
          "Just got my hair and beard cut! Check out Family Video on 5th street if you want a fresh new look, just ask for 'The Guide'",
          "So then I tell her 'This chainmail isn't for the stage, hunny. This is battle-hardened steel, designed to protect me during combat from deadly blows', so she says back to me 'speaking of blows, lets go back to my place'",
          "Live your life like no one is watching! I mean, it's not like there is a growing collection of every dumb thing you say on the internet that is being endlessly mocked by a dozen or more people. That would be insane!",
        ];
        message.channel.send(msg[Math.floor(Math.random() * msg.length)]);
      }
    } catch (err) {
      console.log('Error');
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
