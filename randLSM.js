var down = document.getElementById('LSMTxt');

var lsm1 = "this made me think of you every time i cried in your arms, every time you made me laugh, every time you knew i needed a hug when i didn't say so, every time you should have been angry at me but weren't—how do you love me so much? every time i fail, you are there to pick me up. every time i win, you are there to celebrate with me. every time i am sad, you are there to sit in the sadness with me. every time, you are there. every. time.";
var lsm2 = "You are incredibly beautiful to me, and I do not just mean your appearance or your body. Down to your soul, you are beautiful. You have this divine light about you. This pure honesty and goodness. You're so smart and capable. I am in awe of you. It's just... You're perfect. I wish I were a poet so I could express it properly. When others look at you, they might see your surface beauty. I wanted you to know that when 1 look at you, I see the beauty of your soul, and I am in rapture. I see you. That is what I wanted to say. I see all of you, and you are beautiful.";
var lsm3 = "sometimes the simplest things feel the most beautiful, the most honest when i'm with you, i don't even have to take off my mask because it's not there i could be with you for hours looking into your eyes and watch you doing the simplest things, cause this is for me from now on the most beautiful thing";
var lsm4 = "Between Seas, galaxies and moons, I was lucky I stepped on the same land, I dreamed under the same stars, As you";
var lsm5 = "I think of you, and I'm not afraid of being myself. I think of you, and I'm happy to be alive. I love you";
var lsm6 = "I cannot tell you how thankful I am for our little infinity.";
var lsm7 = "";
var lsm8 = " ";
var lsm9 = "";
var lsm10 = "";
var lsm11 = "";
var lsm12 = "";
var lsm13 = "";
var lsm14 = "";
var lsm15 = "And I promise you...I swear...that I love you more as you read this, than I did when i wrote it ❤";

var msgs = [lsm1, lsm2, lsm3, lsm4, lsm5, lsm6, lsm7, lsm8, lsm9, lsm10, lsm11, lsm12, lsm13, lsm14, lsm15];

function LSMRand() {
    down.innerHTML = msgs[Math.floor(Math.random() * msgs.length)];
} 
