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
  setTimeout(setReady, 300000);
};

// client.on('message', (message) => {
//   try {
//     //// Live Respond ////
//     if (ready && !message.author.bot) {
      // 'Dave'
      // if (message.content.match(/\bDave\b/i)) {
      //   message.channel.send('People always say I look like Dave Grohl', {
      //     files: [
      //       {
      //         attachment: `${__dirname}/img/guide-dave-kilt.jpg`,
      //         name: 'dave-grohl.jpg',
      //       },
      //     ],
      //   });
      //   setTimer();
      // }

      // 'Archery', 'Arrow', 'Bow'
      // if (
      //   message.content.match(/archery/i) ||
      //   message.content.match(/arrow/i) ||
      //   message.content.match(/\bbow\b/i)
      // ) {
      //   message.channel.send(
      //     "So embarrassed, just learned I've been doing a fundamental archery concept wrong this whole time! But, also I just wanted a reason to post and remind you guys I'm a cool archer boy"
      //   );
      //   setTimer();
      // }

      // 'Fawn', 'Deer', 'Horn/y'
      // if (
      //   message.content.match(/\bfawn\b/i) ||
      //   message.content.match(/\bdeer\b/i) ||
      //   message.content.match(/\bhorny*\b/i)
      // ) {
      //   message.channel.send('Feeling horny?', {
      //     files: [
      //       {
      //         attachment: `${__dirname}/img/guide-horns.jpg`,
      //         name: 'guide-fawn.jpg',
      //       },
      //     ],
      //   });
      //   setTimer();
      // }

      // // 'Tent'
      // if (message.content.match(/\btent\b/i)) {
      //   message.channel.send(
      //     'What if we made-out in my $700 historically accurate squire tent? 😏💦',
      //     {
      //       files: [
      //         {
      //           attachment: `${__dirname}/img/guide-tent.jpg`,
      //           name: 'guide-tent.jpg',
      //         },
      //       ],
      //     }
      //   );
      //   setTimer();
      // }

      // // 'Master'
      // if (message.content.match(/\bwise\b\s\bmaster\b/i)) {

      //   const img = [`${__dirname}/img/guide-contemplative.jpg`,`${__dirname}/img/guide-tux.jpg`, `${__dirname}/img/guide-mask.jpg`]

      //   message.channel.send('Did someone call for THE Most Wise Master?', {
      //     files: [
      //       {
      //         attachment: img[Math.floor(Math.random() * img.length)],
      //         name: 'guide.jpg',
      //       },
      //     ],
      //   });
      //   setTimer();
      // }
    // }

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
          `Remember that time we got lost in the woods while practicing 
          medieval hunting techniques and we had to spend the night under the stars holding eachother for warmth? My sweater still smells like your musk, ${user}`,
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
