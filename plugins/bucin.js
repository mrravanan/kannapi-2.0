let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
"I choose to be alone, not because of waiting for the perfect, but need never give up.",
   "A single person was created with a partner he had not found.",
   "Singles. Maybe it's God's way of saying 'Rest from wrong love'.",
   "Singles are young people who prioritize their personal development for a more classy love later.",
   "I'm not looking for someone who is perfect, but I'm looking for someone who becomes perfect thanks to my strength.",
   "Someone's boyfriend is our pending soul mate.",
   "Singles must pass. All comes a time, when all solitude becomes togetherness with her halal lover. Be patient.",
   "Romeo is willing to die for Juliet, Jack died because he saved Rose. In essence, if you still want to live, be single.",
   "I'm looking for people not from their strengths but I'm looking for people from their sincerity.",
   "Matchmaking is not flip flops, which are often confused. So, you should continue to be in the struggle that should be.",
   "If you are the guitar string, I don't want to be the guitarist. Because I don't want to break up with you.",
   "If loving you is an illusion, then let me imagine forever.",
   "Honey ... My job is only to love you, not against fate.",
   "When I'm with you it feels like 1 hour only 1 second, but if I'm away from you it feels like 1 day becomes 1 year.",
   "Banana compote knows sumedang, even though the distance stretches my love will never disappear.",
   "I want to be the only one, not the one.",
   "I can't promise to be good. But I promise to always be there for you.",
   "If I become the people's representative I will definitely fail, how can I think of the people if all I have in mind is you.",
   "Look at my garden, full of flowers. Look at your eyes, my heart is blooming.",
   "Promise to be with me now, tomorrow, and forever.",
   "Missing arises not only because of the distance apart. But also because of desires that do not come true.",
   "You will never be far from me, wherever I go you are always there, because you are always in my heart, which is only our bodies not our hearts."
   "I know that in my every gaze, we are blocked by distance and time. But I am sure that later we will unite.",
   "Missing you without ever meeting is like creating a song that is never sung.",
   "There are times when the distance is always a barrier between me and you, but still in my heart we are always close.",
   "If this heart is unable to contain all the longing, what power can I do but pray for you."
   "Maybe at this moment I can only endure this longing. Until the time comes I can meet and let go of this longing with you.",
   "Through the longing that flares up in my heart, sometimes I really need a hug from your love.",
   "In the cold night, I don't remember anymore; How often do I think about you miss you too.",
   "Missing you is like a rain that comes suddenly and lasts a long time. And even after the rain subsided, my longing was still felt.",
   "Since knowing you, naturally I want to continue learning, learning to be the best for you.",
   "Do you know the difference between the pensi and your face? If the writing pencil can be erased, but if your face is not there will be nothing that can be erased from my mind.",
   "It's not the National Examination tomorrow that I have to worry about, but the life test that I went through after you left me.",
   "One thing happiness at school that keeps me excited is being able to see your smile every day.",
   "You know what's the difference between going to school and going to your house? If you go to school, books and pens are definitely what you bring, but if you go to your house, I just need to bring my heart and love."
   "I'm not sad if it's Monday tomorrow, I'm sad if I don't see you.",
   "My love moment is perpendicular to your love moment. Making our love a perfect equilibrium point.",
   "I'm willing to take part in a race around the world, as long as you are the finish line.",
   "My homework is missing you. Stronger than Mathematics, wider than Physics, stronger than Biology.",
   "My love for you is like a metabolism, which will not stop until death.",
   "If the distance is like you, I'll come pick you up, I'll queue home.",
   "Eat whatever I like from you, including eating liver.",
   "Love is like a death sentence. If you don't get shot, you hang."
   "Loving you is like a drug: once you try to be addictive, not trying to make you curious, leaving behind makes you withdrawal.",
   "I like snacking the most because snacking is delicious. Moreover, having you completely ...",
   "This world belongs only to the two of us. The others are just contracting.",
   "For me, all of those days are Tuesday. Tuesday in Heaven if close to you ...",
   "What if we both become gang criminals? I stole your heart and you stole mine.",
   "You are like the coffee I drank this morning. Bitter, but addictive.",
   "I'm often jealous of your lipstick. He can kiss you every day, from morning to night.",
   "Just hearing your name can make me smile like a fool.",
   "I know your female friend is not just one, and liking you is not just me.",
   "Since I stopped hoping for you, I'm not excited about everything ..",
   "With you, falling in love is the most deliberate heartbreak.",
   "It's very difficult to feel the happiness of life without your presence by my side.",
   "Through the longing that flares up in my heart, sometimes I really need a hug from your love.",
   "If you know, until now I still love you.",
   "Sometimes I'm jealous of kites ... the atals break up and I'm still being chased and don't want to be taken by other people ...",
   "I didn't know what love was, until I finally met you. But, at that moment I knew it was heartbreak.",
   "Chasing is tired, but even more tired of waiting \ nWaiting for you to notice my existence ...",
   "Don't stop loving just because you've been hurt. Because there is no rainbow without rain, there is no true love without crying.",
   "I have a million reasons to forget you, but nothing can force me to stop loving you.",
   "Sometimes someone feels so stupid just to love someone.",
   "You are the best heartbreak that I have never regretted.",
   "It's not that it's not worth the wait, it's just that it often gives false hopes.",
   "Part of me is in pain, Remembering her very close, but untouchable.",
   "The best thing about loving someone is to secretly pray for them.",
   "I hope I can get rid of this feeling as soon as I lose you.",
   "For the sake of love we deceive ourselves. Trying to be strong actually fell dishonorable.",
   "Think of me as your home, if you go you know where to go home. Stay if you want and go when you are bored ...",
   "I'm confused, should I be disappointed or not? If I'm disappointed, who am I to him? <br> <br> If I'm not disappointed, but I'm waiting for his words.",
   "My longing is like a branch that remains standing. Even though there is no longer any leaves that accompany it, until it dries up, breaks, and dies.",
   "I guess we are now only two strangers who have the same memories.",
   "Make me able to hate you even for a few minutes, so it won't be too hard to forget you.",
   "I love you with all my heart, but you even share your feelings with others.",
   "Loving you may break me, but somehow leaving you doesn't fix me.",
   "You are the first and first in my life. But, I am the second to you.",
   "If we can only meet in a dream, I want to sleep forever.",
   "Seeing you happy is my happiness, even though you are happy without being with me.",
   "I sometimes envy an object. Have no taste but always needed. Unlike me who has feelings, but is abandoned and neglected ...",
   "How could I move if only you my heart stopped?",
   "Memories about you are like home to me. So that every time my thoughts drift, surely the edges will always come back to you.",
   "Why is tissue useful? Because love is never dry. - Sujiwo Tejo",
   "If loving you is a mistake, okay, let me keep wrong.",
   "Since I know you, I want to keep learning. Learning is the best for you.",
   "Someone is acting stupid just to see you smile. And he feels happy about it.",
   "I'm not a good person, but will learn to be the best for you.",
   "We are not dead, but the wound makes us unable to walk like we used to.",
   "Your existence is like the cup of coffee I need every morning, which can encourage me to stay excited about the day.",
   "I really want to give the world to you. But because it's not possible, then I will give you the most important thing in my life, which is my world.",
   "Mending sing humorous but sweet, rather than pretentious romantic but tragic ending.",
   "Ben is finally disappointed, you have to understand when to expect and when to get stuck.",
   "I Ki Wong Jowo seng ora understands the artine 'I Love U'. But I understand mek 'I tresno your crew'.",
   "Ora, I need to be pretty and I really want you, I'm pretty sure I'm happy, I'm happy.",
   "My love, my crew, I shattered the camera, focus on your crew, tok liyane mah dissolving.",
   "Saben Dino has a dream, but ora biso nduweni.",
   "Ora, I met 30 dino rasane koyo for a month.",
   "I'm like a wild cat without you. Ambyar.",
   "I want to, I am a wektu iso. Supoyo, I am an iso nemokne kowe more odd. Ben Lewih likes my time to kanggo urip with your slime.",
   "Ora never understood opo kui tresno, kajaba sak bare found karo sliramu.",
   "I love you, moal leungit-leungit adajan, geus married deui.",
   "Your patience is limitless, but your love for you will henteu only.",
   "Kanyaah will fade with Bayclean.",
   "Endah keur babarengan jeung anjeun ek tuluy remember nepi ka poho.",
   "Curing moal will never breathe, it takes a handful of help.",
   "Nyaahna aa ka neg teh, the bank worker is still not collecting the debt (hayoh mumuntil).",
   "Patience lacks limits, but love is lacking, moal aya beakna.",
   "Hayang, the rasana kuring arranges the words of love in Dunya Ieu, then I curry bade together, so that I will grow up to feel the love of currying my soul.",
   "Calm down wae neng, out of love, you, you know the song Krispatih; timeless.",
   "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu is the most alus kanggo anjeun. But sure, servants jalmi hiji-hijina nu keep emut ka anjeun.",
   "Just lost the network, you don't.",
   "Often I eat liver. But knowing you are still here makes me happy again.",
   "My enemies are those who wish to have you too.",
   "Many are always there, but if you are the only one I want, how about it?",
   "My sleeping hours are ruined by longing.",
   "Only China is far away, please don't love us.",
   "What's important is your happiness, I'm not important ..",
   "Only one wish, loved by you ..",
   "I'm without you like an ambulance without wiuw wiuw.",
   "It's enough that Antarctica is far away. Not Antarctica."
]
