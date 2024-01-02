var down = document.getElementById('LSMTxt');

var lsm1 = "This made me think of you: every time i cried in your arms, every time you made me laugh, every time you knew i needed a hug when i didn't say so, every time you should have been angry at me but weren't—how do you love me so much? every time i fail, you are there to pick me up. every time i win, you are there to celebrate with me. every time i am sad, you are there to sit in the sadness with me. every time, you are there. every. time.";
var lsm2 = "You are incredibly beautiful to me, and I do not just mean your appearance or your body. Down to your soul, you are beautiful. You have this divine light about you. This pure honesty and goodness. You're so smart and capable. I am in awe of you. It's just... You're perfect. I wish I were a poet so I could express it properly. When others look at you, they might see your surface beauty. I wanted you to know that when 1 look at you, I see the beauty of your soul, and I am in rapture. I see you. That is what I wanted to say. I see all of you, and you are beautiful.";
var lsm3 = "Sometimes the simplest things feel the most beautiful, the most honest when i'm with you, i don't even have to take off my mask because it's not there i could be with you for hours looking into your eyes and watch you doing the simplest things, cause this is for me from now on the most beautiful thing";
var lsm4 = "I've never met anyone else like you. And I don't just say that because it's cliche. I say it because it's the truth. I've never met anyone that can make me laugh as much, l've never met anyone who makes me as happy, I've never met anyone that I can talk so freely to. And really, I've never met anyone who's presence can actually change my mood the way yours can.";
var lsm5 = "I think of you, and I'm not afraid of being myself. I think of you, and I'm happy to be alive. I love you";
var lsm6 = "I cannot tell you how thankful I am for our little infinity.";
var lsm7 = "Because at the end of the day, You're the person I want to tell how my day went. You're the person I want to share my happiness, sadness, frustration, and success with";
var lsm8 = "avoir elle est avoir les etoiles, a lil french if you may heh";
var lsm9 = "I know this is very cheesy and stuff but um, somewhere along the way- you stopped stroking my ego and touched me heart like no one else ever did.";
var lsm10 = "Never ever doubt yourself because someone made you do so. You're one of the best person I have ever met and I won't change that ever. You would never be too much or too little for me x";
var lsm11 = "Is this what they call love bombing? damn I am red flag but eh i am too deep in now haha";
var lsm12 = "You deserve to be loved without having to hide the parts of yourself that you think are unlovable, and I can only hope I am able to provide you a safe space for doing so.";
var lsm13 = "I hope somehwere along the way, I hope you know you deserve everything i do for you, it's not about raising standards lol but for you to feel the love, you put out so generously in this world. It is only fair I am able to reflect some back at you. Thank you for being the most amazing person. I love you";
var lsm14 = "i love you";
var lsm15 = "And I promise you...I swear...that I love you more as you read this, than I did when i wrote it ❤";

var msgs = [lsm1, lsm2, lsm3, lsm4, lsm5, lsm6, lsm7, lsm8, lsm9, lsm10, lsm11, lsm12, lsm13, lsm14, lsm15];

function LSMRand() {
    down.innerHTML = msgs[Math.floor(Math.random() * msgs.length)];
} 
