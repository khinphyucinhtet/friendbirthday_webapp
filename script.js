const PAGE = document.body.dataset.screen || "home";

const PAGE_CONFIG = {
  "splash-1": { title: "Splash 1", imageShell: true },
  "splash-2": { title: "Splash 2", imageShell: true },
  home: { title: "Birthday Gift", imageShell: true },
  menu: { title: "Menu", label: "Menu" },
  paragraph: { title: "Paragraph", label: "Paragraph" },
  profile: { title: "Profile", label: "Profile" },
  reasons: { title: "Reasons", label: "Reasons" },
  character: { title: "Character Analysis", label: "Character Analysis" },
  songs: { title: "Songs For You", label: "Songs For You" },
  letters: { title: "Letters From Me", label: "Letters From Me" },
  affirmations: { title: "Affirmations", label: "Affirmations" },
  messages: { title: "Messages", label: "Messages" },
  memories: { title: "Memories", label: "Memories" }
};

const FOOTER_LINKS = [
  { id: "home", label: "Home", file: "home" },
  { id: "affirmations", label: "Affirmations", file: "affirmations" },
  { id: "messages", label: "Messages", file: "messages" },
  { id: "memories", label: "Memories", file: "memories" }
];

const HOME_LINKED_PAGES = new Set(["reasons", "letters", "songs", "character", "profile", "paragraph"]);

const PROFILE_STORAGE_KEY = "birthdayGiftProfileImage";
const LETTERS_STORAGE_KEY = "birthdayGiftOpenedLetters";
const MESSAGES_STORAGE_KEY = "toneToneMessages";

const MEMORY_IMAGES = [
  "./images/memory1.jpg",
  "./images/memory2.jpg",
  "./images/memory3.jpg",
  "./images/memory4.jpg",
  "./images/memory5.jpg",
  "./images/memory6.jpg"
];

const PARAGRAPH_ENTRIES = [
  "We have known each other since 2016, and somehow that still feels unreal to me. Back then it was just the beginning, but even from those early days there was already something special there. Some people pass through life quietly, but you were never one of those people for me.",
  "Then 2017 came, and during our YU days we became much closer. That season gave us so many small moments that turned into something much bigger. Looking back now, I think that was when our friendship really started rooting itself deeply into my life.",
  "Since then, we have seen each other through such a wild mix of ups and downs. We have witnessed changes, heartbreaks, growth, confusion, laughter, silence, and random chaos. Through all of that, your presence never felt temporary to me.",
  "One thing I always carry in my heart is how much we have watched each other grow. It is rare to know someone long enough to truly notice the little shifts in their heart, mindset, and strength. I feel lucky that I got to witness those chapters of you up close.",
  "Sometimes I still think about how crazy it is that after all those years, we ended up in the same country too. Life moves in the strangest ways, and somehow it still brought our paths close again. That alone feels like such a quiet blessing to me.",
  "You have taught me a lot in ways you probably do not even realize. From your resilience, to your effort, to the way you keep going even when things are heavy, I have learned so much just from watching you live. You carry more strength than you give yourself credit for.",
  "I also admire how much growth has happened in your life. Not the loud kind that everyone claps for right away, but the real kind. The kind that comes from surviving, adapting, trying again, and choosing not to give up even when it would have been easier to disappear for a while.",
  "There is something really beautiful about having a friend whose journey you genuinely care about. When good things happen to you, I feel proud. When you struggle, I feel it too. That is how I know this friendship means something real and lasting to me.",
  "I pray so sincerely that the years ahead are kind to you. I hope you keep meeting better days, better people, better chances, and better peace. I hope your hard work returns to you in ways that feel healing, deserved, and full of light.",
  "More than anything, I just want you to know that I feel blessed to have you in my life. Thank you for the memories, the chaos, the closeness, the lessons, and the version of myself that got shaped while knowing you. No matter where life goes, you will always be a very meaningful part of my story."
];

const LETTER_COLLECTION = [
  {
    id: "A",
    title: "A Favourite Version Of You",
    buttonLabel: "Open Letter",
    body: [
      "Dear Tone Tone,",
      "",
      "My favourite version of you is Rose.",
      "",
      "Not because of looks.",
      "",
      "Because she is pretty,",
      "hardworking,",
      "soft-hearted,",
      "and somehow survives everything.",
      "",
      "🌹"
    ]
  },
  {
    id: "B",
    title: "Funniest Thing You Ever Said",
    buttonLabel: "Open Letter",
    body: [
      "Dear Tone Tone,",
      "",
      "Honestly?",
      "",
      "There are too many.",
      "",
      "I genuinely cannot remember which one was the funniest.",
      "",
      "You create new content daily.",
      "",
      "😭",
      "",
      "Status:",
      "Professional Yapster"
    ]
  },
  {
    id: "C",
    title: "When I Realized You’re Actually Insane",
    buttonLabel: "Open Letter",
    body: [
      "Since 2017.",
      "",
      "No explanation needed.",
      "",
      "Evidence collected for years.",
      "",
      "Case still ongoing.",
      "",
      "⚠️",
      "",
      "Risk Level:",
      "EXTREME",
      "",
      "Sanity:",
      "■■□□□□□□□ 20%",
      "",
      "😭😭😭"
    ]
  },
  {
    id: "D",
    title: "Why I Still Stayed",
    buttonLabel: "Open Letter",
    body: [
      "Dear Tone Tone,",
      "",
      "There are many reasons.",
      "",
      "But your brother is cute.",
      "",
      "So I had no choice.",
      "",
      "🤝",
      "",
      "Okay.",
      "",
      "Real answer:",
      "",
      "Because you’re one of my favourite people."
    ]
  },
  {
    id: "E",
    title: "What I Notice About You",
    buttonLabel: "Open Letter",
    body: [
      "Dear Tone Tone,",
      "",
      "You always notice things people skip.",
      "The mood.",
      "The small changes.",
      "The little details.",
      "",
      "That says a lot about your heart."
    ]
  },
  {
    id: "F",
    title: "Your Most Dangerous Talent",
    buttonLabel: "Open Letter",
    body: [
      "Your most dangerous talent is making people care about you very fast.",
      "",
      "That should honestly come with a warning label.",
      "",
      "Too cute.",
      "Too effective."
    ]
  },
  {
    id: "G",
    title: "Why Talking To You Is Never Boring",
    buttonLabel: "Open Letter",
    body: [
      "Because with you, even a normal conversation becomes an episode.",
      "",
      "One second it is serious.",
      "Next second it is nonsense.",
      "",
      "And somehow it is always fun."
    ]
  },
  {
    id: "H",
    title: "Your Soft Heart Problem",
    buttonLabel: "Open Letter",
    body: [
      "You act strong a lot.",
      "",
      "But your heart is actually soft.",
      "That is why you care deeply,",
      "worry deeply,",
      "and love deeply.",
      "",
      "It is one of your prettiest qualities."
    ]
  },
  {
    id: "I",
    title: "A Tiny Complaint",
    buttonLabel: "Open Letter",
    body: [
      "My only complaint is that you are too easy to miss.",
      "",
      "When you are not around,",
      "the day feels noticeably less fun.",
      "",
      "Please continue existing loudly."
    ]
  },
  {
    id: "J",
    title: "What Makes You Feel Like Home",
    buttonLabel: "Open Letter",
    body: [
      "You have a familiar warmth.",
      "",
      "The kind that makes people relax.",
      "The kind that makes things feel softer.",
      "",
      "That is why you feel like home sometimes."
    ]
  },
  {
    id: "K",
    title: "The Chaos Index",
    buttonLabel: "Open Letter",
    body: [
      "Official report:",
      "",
      "You are cute.",
      "You are lovable.",
      "You are chaotic.",
      "",
      "Final score:",
      "Very dangerous but keep."
    ]
  },
  {
    id: "L",
    title: "You In Three Words",
    buttonLabel: "Open Letter",
    body: [
      "Soft.",
      "Strong.",
      "Special.",
      "",
      "That is the short version.",
      "",
      "The long version would take many more letters."
    ]
  },
  {
    id: "M",
    title: "If I Had To Describe You",
    buttonLabel: "Open Letter",
    body: [
      "I would say you are the kind of person people slowly realize they care about a lot.",
      "",
      "You stay in their thoughts.",
      "You stay in their routines.",
      "You stay in their heart."
    ]
  },
  {
    id: "N",
    title: "Your Main Character Problem",
    buttonLabel: "Open Letter",
    body: [
      "Sometimes you accidentally feel like a main character.",
      "",
      "Not because you try too hard.",
      "",
      "Just because your existence has plot."
    ]
  },
  {
    id: "O",
    title: "Things You Do That Stay In My Head",
    buttonLabel: "Open Letter",
    body: [
      "Your expressions.",
      "Your random lines.",
      "Your overreactions.",
      "Your quiet effort.",
      "",
      "You leave behind many small memorable things."
    ]
  },
  {
    id: "P",
    title: "Short Version",
    buttonLabel: "Open Letter",
    body: [
      "Short version?",
      "",
      "I stayed because you matter.",
      "",
      "You are lovely,",
      "annoying sometimes,",
      "very funny,",
      "and very dear to me."
    ]
  },
  {
    id: "Q",
    title: "Tell Me What Reminds You Of Me",
    buttonLabel: "Open Letter",
    body: [
      "Easy answer.",
      "",
      "Blackpink Rose.",
      "",
      "Soft pretty energy,",
      "a little delicate,",
      "a little iconic,",
      "and somehow always memorable."
    ]
  },
  {
    id: "R",
    title: "Which Song?",
    buttonLabel: "Open Letter",
    body: [
      "Immediate answer:",
      "",
      "APT APT.",
      "",
      "Because the vibe is catchy,",
      "cute,",
      "and dangerously easy to keep thinking about."
    ]
  },
  {
    id: "S",
    title: "Which Smell?",
    buttonLabel: "Open Letter",
    body: [
      "Rose smell.",
      "",
      "Soft, pretty, familiar, and a little dramatic in a nice way.",
      "",
      "Very you-coded."
    ]
  },
  {
    id: "T",
    title: "Which Random Object Makes U Stare At A Wall",
    buttonLabel: "Open Letter",
    body: [
      "Htoo Htoo myat nrr lay . .",
      "",
      "Because some things are so specific and so you-coded that they make me pause for no reason.",
      "",
      "That is one of them."
    ]
  },
  {
    id: "U",
    title: "How I Perceive U",
    buttonLabel: "Open Letter",
    body: [
      "My future yggg ma sa dah bestie.",
      "",
      "Pof a kg a soe tu tu twr tae bestie bestie.",
      "",
      "Basically:",
      "a forever-coded friend with plot, chaos, and too much sentimental value."
    ]
  },
  {
    id: "V",
    title: "Fav Version Of You",
    buttonLabel: "Open Letter",
    body: [
      "Being a cutie patootie.",
      "",
      "That version is powerful.",
      "Very dangerous.",
      "Very effective.",
      "",
      "I support it fully."
    ]
  },
  {
    id: "W",
    title: "Why I Like U",
    buttonLabel: "Open Letter",
    body: [
      "Because you are kind,",
      "caring,",
      "sweet,",
      "funny,",
      "and very easy to miss when you are not around.",
      "",
      "You make people feel softer."
    ]
  },
  {
    id: "X",
    title: "Your Best Trait According To Me",
    buttonLabel: "Open Letter",
    body: [
      "Your heart.",
      "",
      "You care in a real way.",
      "Not a loud fake way.",
      "A real, steady, lovable way."
    ]
  },
  {
    id: "Y",
    title: "What Kind Of Bestie Are You",
    buttonLabel: "Open Letter",
    body: [
      "The kind people get attached to slowly,",
      "then suddenly realize they cannot replace.",
      "",
      "Annoying sometimes.",
      "Precious always."
    ]
  },
  {
    id: "Z",
    title: "My Final Statement On U",
    buttonLabel: "Open Letter",
    body: [
      "You are one of those people life gives only a few times.",
      "",
      "Cute.",
      "Special.",
      "Memorable.",
      "Worth keeping.",
      "",
      "End of statement."
    ]
  }
];

// Ordered copy for the Reasons page. The first ten are user-provided verbatim.
const REASONS = [
  "You are rose",
  "Yee ya lo",
  "Paw taw taw ma lo",
  "Management kgg lo",
  "Chay lo",
  "Karina nah ll sin lo",
  "Ngar nah paungg lo",
  "Htoo Htoo lo mg ly shi lo",
  "Mg ly chaw lo pr",
  "Cute lo",
  "You make me happy without even trying",
  "You are one of the most hardworking people I know",
  "You are stronger than you think",
  "You are my favorite person to talk to",
  "You are the kind of friend people wish for",
  "You make ordinary days feel brighter",
  "You always try your best, even when you are tired",
  "You have a soft heart that cares deeply",
  "You deserve so much happiness",
  "You make people feel comfortable around you",
  "You are precious in a way words barely explain",
  "You are funny in the best and cutest way",
  "You are kind even when nobody asks you to be",
  "You are unforgettable to the people who know you",
  "You keep going even when things feel heavy",
  "You make small moments feel special",
  "You are such a safe person to be around",
  "You are thoughtful in ways people notice",
  "You always bring warmth into the room",
  "You are genuinely beautiful inside and out",
  "You listen in a way that makes people feel understood",
  "You make hard days feel a little easier",
  "You have a quiet strength that is inspiring",
  "You are more capable than you give yourself credit for",
  "You care deeply about the people you love",
  "You are full of effort, heart, and sincerity",
  "You make friendship feel easy and natural",
  "You are brave even when you feel scared",
  "You keep showing up, and that matters a lot",
  "You are the kind of person people remember fondly",
  "You have a smile that softens everything",
  "You make me laugh when I need it most",
  "You always have a lovable way about you",
  "You are dependable when it really counts",
  "You make people feel less alone",
  "You are gentle but still strong",
  "You handle more than most people realize",
  "You are the best friend energy in human form",
  "You care with your whole heart",
  "You are easy to miss when you are not around",
  "You bring comfort just by being yourself",
  "You are sweeter than you know",
  "You notice little things that others miss",
  "You make conversations feel special",
  "You never stop trying, even after a bad day",
  "You are calm in ways that help others breathe easier",
  "You are lovely in a very real way",
  "You make the people around you feel important",
  "You are someone worth celebrating every day",
  "You have a good heart and it shows",
  "You make even silence feel comfortable",
  "You are caring without making it feel forced",
  "You always leave a good feeling behind",
  "You are a person I can always appreciate more",
  "You are soft, warm, and strong all at once",
  "You make the world feel kinder",
  "You are the kind of person people trust naturally",
  "You put effort into things even when it is hard",
  "You shine in your own quiet way",
  "You are thoughtful with your words",
  "You are reassuring when people need comfort",
  "You make happy memories feel even better",
  "You are someone I can never get tired of",
  "You keep your heart open even after hard moments",
  "You are resilient in ways that deserve praise",
  "You make friendship feel precious",
  "You are full of little things that make you lovable",
  "You deserve to feel proud of yourself",
  "You are the kind of person people feel lucky to know",
  "You make effort look beautiful",
  "You still keep moving even when you want to cry",
  "You are deeply lovable just as you are",
  "You make simple chats become the best part of the day",
  "You are more amazing than you realize",
  "You have a heart that holds so much care",
  "You make me feel understood",
  "You are one of the brightest parts of ordinary life",
  "You are patient in ways that matter",
  "You make people smile without needing attention",
  "You are so easy to root for",
  "You are full of quiet courage",
  "You make being around you feel peaceful",
  "You are someone I admire a lot",
  "You bring light with your presence",
  "You are beautiful when you are happy and when you are trying",
  "You make everything feel a little softer",
  "You are always worth appreciating",
  "You make the people close to you feel lucky",
  "You are such an important person in my heart",
  "You have a way of making life feel sweeter"
];

const AFFIRMATION_ICONS = ["🪞", "👑", "💼", "💎", "😊", "💌", "💪", "☀️", "🌙", "⭐", "🌸", "💖", "🎀", "🧸", "✨"];
const AFFIRMATION_DOODLES = ["♡", "☆", "✦", "✧", "💗", "🌙", "🌸", "✨"];

const AFFIRMATIONS = [
  { icon: "🪞", title: "I’m Pretty ♡", subtitle: "Inside and out. No argument. Period.", doodle: "♡" },
  { icon: "👑", title: "I’m Going to Slay ☆", subtitle: "Today, tomorrow, always. Slay is my middle name.", doodle: "☆" },
  { icon: "💼", title: "I’m Getting a Decent Job ♡", subtitle: "My future self is already thankful.", doodle: "♡" },
  { icon: "💎", title: "I’m Successful ☆", subtitle: "Big goals, bigger energy, zero doubts.", doodle: "☆" },
  { icon: "😊", title: "I Deserve the Best ♡", subtitle: "I attract good things and good people.", doodle: "♡" },
  { icon: "💌", title: "I’m Loved ♡", subtitle: "By amazing people, always and forever.", doodle: "♡" },
  { icon: "💪", title: "I’m Strong ☆", subtitle: "Stronger than my problems, braver than my fears.", doodle: "☆" },
  { icon: "☀️", title: "I Choose Happiness ♡", subtitle: "I’m the main character of my life.", doodle: "♡" },
  { icon: "🌙", title: "I’m Smart ♡", subtitle: "My brain is loading greatness every day.", doodle: "♡" },
  { icon: "⭐", title: "I’m That Girl ☆", subtitle: "Soft heart, strong mind, unstoppable energy.", doodle: "☆" },
  ...[
    ["I’m Glowing", "Even my quiet progress has a beautiful light."],
    ["I’m Healing", "Softly, slowly, and still very surely."],
    ["I’m Becoming Better", "Every small effort is building my next chapter."],
    ["I’m Lucky", "Good timing and gentle surprises still find me."],
    ["I’m Protected", "What is meant for me will stay with peace."],
    ["I’m Enough", "I do not need to earn my worth line by line."],
    ["I’m Improving", "Tiny steps still count as real movement."],
    ["I’m Blessed", "There is goodness around me, even if it is quiet."],
    ["I’m Not Giving Up", "Resting is allowed. Quitting on myself is not today."],
    ["I’m Doing My Best", "And that already deserves kindness from me."],
    ["I Will Pass My Exams", "My effort is collecting marks even when I panic."],
    ["I Will Finish My Goals", "Bit by bit, I still get there."],
    ["I Will Find a Good Job", "The right door will open at the right time."],
    ["I Will Be Successful", "My future is not confused about me. It knows I can do it."],
    ["I Will Be Happy", "Joy is allowed to stay in my life for a long time."],
    ["I Will Be Okay", "Even if today is messy, tomorrow is still possible."],
    ["I’m Stronger Than I Think", "I have already survived more than I give myself credit for."],
    ["I Deserve Peace", "My heart does not need chaos to feel alive."],
    ["I Deserve Rest", "I am not lazy for needing softness."],
    ["I Deserve Soft Love", "Gentleness belongs in my life too."],
    ["I Deserve Good Friends", "I deserve people who choose me kindly."],
    ["I Deserve Good Opportunities", "What is aligned with me will not miss me."],
    ["I Can Cry and Still Continue", "My tears do not cancel my strength."],
    ["I Can Be Tired and Still Be Powerful", "Low battery does not mean low worth."],
    ["I’m Not Behind", "My timeline is not late. It is simply mine."],
    ["My Timing Is Perfect", "Even slow blooming is still blooming."],
    ["My Life Is Slowly Getting Better", "Quiet improvement is still improvement."],
    ["I Carry Light", "Even on heavy days, something warm remains in me."],
    ["I’m Full of Potential", "My future is bigger than today’s mood."],
    ["I’m Capable", "I know more than my doubt wants me to believe."],
    ["I’m Allowed to Start Small", "Tiny beginnings still change lives."],
    ["I’m Worth Celebrating", "I should not wait for perfection to be proud of myself."],
    ["I’m Learning Quickly", "My mind keeps growing every time I try."],
    ["I’m More Ready Than I Feel", "Nerves are not proof that I cannot do it."],
    ["I’m Safe to Be Myself", "I do not need to shrink to be accepted."],
    ["I’m Soft and Powerful", "Gentleness and strength can live in the same heart."],
    ["I’m Becoming Unstoppable", "Consistency is quietly making me stronger."],
    ["I’m Worth the Effort", "The care I give myself is never wasted."],
    ["I’m Allowed to Glow Up Slowly", "Transformation does not need to be loud to be real."],
    ["I’m Building My Dream Life", "Even ordinary days can be part of a beautiful plan."],
    ["I’m Hardworking", "The effort I put in is real and meaningful."],
    ["I’m Creative", "My ideas deserve room to exist and grow."],
    ["I’m Gentle With Myself", "I refuse to become my own bully."],
    ["I’m Proud of Surviving", "Some days my victory is simply making it through."],
    ["I’m Good at Beginning Again", "Fresh starts are one of my hidden talents."],
    ["I’m Full of Good Energy", "I can protect my vibe without feeling guilty."],
    ["I’m Worthy of Nice Things", "Pleasure, peace, and pretty moments belong to me too."],
    ["I’m Becoming More Confident", "Every time I show up, I prove something to myself."],
    ["I’m Allowed to Take Space", "My presence is not an inconvenience."],
    ["I’m Emotionally Brave", "Feeling deeply does not make me weak."],
    ["I’m Growing in Secret", "Not every beautiful thing announces itself early."],
    ["I’m Taking Care of My Future", "Every little task is a love letter to tomorrow."],
    ["I’m Calm Enough to Handle This", "Panic does not get the final word."],
    ["I’m Allowed to Want More", "Dreaming bigger is not greed. It is hope."],
    ["I’m a Good Friend", "The love I give people matters."],
    ["I’m Easy to Love", "I do not have to perform to be cherished."],
    ["I’m Worth Staying For", "The right people will not make me beg."],
    ["I’m Not Too Much", "My feelings are not extra. They are human."],
    ["I’m Doing Better Than I Think", "Sometimes progress is quieter than I expected."],
    ["I’m Making My Younger Self Proud", "She would be amazed I kept going."],
    ["I’m Still Magic on Low Energy", "Even tired stars still shine."],
    ["I’m Trusting My Path", "Confusion is not the same thing as failure."],
    ["I’m Allowed to Rest Before I Break", "I do not need to collapse to deserve a pause."],
    ["I’m Becoming More Me", "Authenticity looks beautiful on me."],
    ["I’m Open to Good News", "Happy updates are always welcome here."],
    ["I’m Building Real Confidence", "Practice is making my courage more solid."],
    ["I’m Worthy of Peaceful Love", "I do not need rollercoasters to feel chosen."],
    ["I’m Good at Figuring Things Out", "Solutions find me when I stay patient."],
    ["I’m Allowed to Be a Beginner", "Starting awkwardly still counts as starting."],
    ["I’m More Than One Bad Day", "Today’s heaviness is not my whole identity."],
    ["I’m Becoming Financially Stable", "Wise choices today are helping tomorrow breathe easier."],
    ["I’m Protected From What Is Not for Me", "Rejection can still be redirection."],
    ["I’m Surrounded by Possibility", "There are more chances ahead than I can see right now."],
    ["I’m a Soft Place to Land", "My heart carries comfort, not just chaos."],
    ["I’m Allowed to Want Peace First", "Not everything has to be dramatic to be real."],
    ["I’m Trustworthy With My Own Heart", "I can choose people and places that feel safe."],
    ["I’m Worth Looking After", "My needs matter too."],
    ["I’m Closer Than I Think", "Progress hides in repetition sometimes."],
    ["I’m Learning to Receive", "I can accept help, love, and good things without guilt."],
    ["I’m Strong in Quiet Ways", "Endurance is still strength, even when it is silent."],
    ["I’m Letting Joy Find Me", "I do not need to be suspicious of every nice moment."],
    ["I’m Not a Burden", "The people who love me are not counting my hard days."],
    ["I’m Allowed to Hope Again", "New softness can arrive after old disappointments."],
    ["I’m Becoming Unshakeable", "Each challenge is teaching me what stays true."],
    ["I’m Building a Peaceful Mind", "My thoughts can soften with practice."],
    ["I’m Attractive to Good Opportunities", "My effort and energy are not invisible."],
    ["I’m Becoming the Version of Me I Needed", "Little by little, I am turning into my own safe place."],
    ["I’m Going to Make It", "Maybe not perfectly, but definitely beautifully."],
    ["I’m Already a Whole Person", "I do not need anyone else to complete my value."],
    ["I’m Worth Every Good Future", "The life I dream about is allowed to include me."],
    ["I’m Soft But Never Small", "Gentleness does not reduce my power."],
    ["I’m Allowed to Be Seen", "I do not need to hide my sparkle to stay safe."],
    ["I’m Becoming More Magnetic", "The right people and chances are finding me."],
    ["I’m Cute and Capable", "Both can exist together very easily."],
    ["I’m Allowed to Feel Proud", "My achievements deserve celebration, not minimizing."],
    ["I’m Getting Better at Life", "I learn something useful from every messy chapter."],
    ["I’m Not Hard to Love", "The right people will not make me doubt my softness."],
    ["I’m Attractive to Peace", "Calm belongs in my life too."],
    ["I’m Allowed to Be Delicate", "Softness is not the opposite of strength."],
    ["I’m Writing a Better Story", "Each day I choose myself a little more."],
    ["I’m More Glorious Than My Doubt", "My insecurity is not the main narrator here."],
    ["I’m Worthy of Being Chosen", "I do not have to compete for gentle love."],
    ["I’m Learning to Trust Good Things", "Nice moments are not traps."],
    ["I’m Calm, Even Now", "My body can return to safety one breath at a time."],
    ["I’m Making Room for Joy", "Happiness does not need permission slips."],
    ["I’m Deeply Valuable", "My existence is not ordinary to the people who love me."],
    ["I’m Building Pretty Little Wins", "Small victories still decorate my life beautifully."],
    ["I’m The Prize Too", "I should remember my own value in every room."],
    ["I’m Glowing From the Inside", "My light is not borrowed from anyone else."],
    ["I’m Open to Tenderness", "I can welcome softness without fear."],
    ["I’m Not a Lost Cause", "Bad days are not proof that I am failing."],
    ["I’m Becoming More Secure", "Practice is teaching my heart to relax."],
    ["I’m Learning Grace", "I can be human and still be lovable."],
    ["I’m Meant for More Than Survival", "I am allowed to want beauty too."],
    ["I’m A Good Investment", "Every effort I pour into myself comes back brighter."],
    ["I’m Still Blooming", "Growth does not stop just because I feel tired."],
    ["I’m Capable of Good Love", "I can give it and receive it wisely."],
    ["I’m Allowed to Slow Down", "Speed is not the only sign of progress."],
    ["I’m Enough for Today", "Today’s version of me is still worthy."],
    ["I’m Learning to Trust Myself", "My instincts deserve more credit."],
    ["I’m Worth More Than Comparison", "No one else’s timeline can define mine."],
    ["I’m Becoming Softer With Myself", "Self-respect can sound gentle too."],
    ["I’m Ready for Better Things", "My life can hold more ease now."],
    ["I’m Not Too Sensitive", "My softness is not a flaw to correct."],
    ["I’m A Light in People’s Lives", "My presence comforts more than I notice."],
    ["I’m Good at Surviving and Thriving", "I am not limited to recovery mode forever."],
    ["I’m Letting My Heart Rest", "Peace is productive for me too."],
    ["I’m Closer to My Goals Than Yesterday", "Even unseen progress still counts."],
    ["I’m A Beautiful Work in Progress", "Incomplete does not mean unimpressive."],
    ["I’m Strong Enough for This Season", "I have more in me than fear predicts."],
    ["I’m Worthy of Sweet Surprises", "Good things can arrive without warning too."],
    ["I’m Creating a Safe Life for Myself", "Bit by bit, I am building softness."],
    ["I’m Allowed to Celebrate Small Things", "Tiny joys are still real joys."],
    ["I’m Full of Good Qualities", "Kind, funny, thoughtful, and still becoming more."],
    ["I’m Not Invisible", "My effort and existence are noticed."],
    ["I’m Learning to Feel Secure in Love", "The right care will not feel like guessing."],
    ["I’m Precious Without Proof", "My value does not need constant evidence."],
    ["I’m A Soft Power", "I can influence a room without becoming hard."],
    ["I’m Proud of My Heart", "It stayed kind even after difficult things."],
    ["I’m Going to Glow Up Gently", "Not rushed. Just beautifully and surely."],
    ["I’m Safe to Dream Big", "My hopes are not embarrassing."],
    ["I’m Still Here, and That Matters", "Showing up counts more than I know."],
    ["I’m Good at Turning Pain Into Wisdom", "My hard chapters still taught me something golden."],
    ["I’m Deserving of a Beautiful Future", "My next chapter can be soft and bright."],
    ["I’m Allowed to Expect Better", "Settling is not the only option."],
    ["I’m Becoming My Own Comfort", "I can soothe myself without abandoning myself."],
    ["I’m Carrying More Grace Than I Realize", "Even my tired self is still trying beautifully."],
    ["I’m Worthy of Lovely Things", "Pretty moments, kind people, and peace suit me."],
    ["I’m Learning to Choose Myself Faster", "Self-respect is becoming natural."],
    ["I’m More Than My Stress", "My pressure does not define my full self."],
    ["I’m Exactly the Kind of Person Worth Rooting For", "Especially on the slow and ordinary days."]
  ].map(([title, subtitle], index) => ({
    icon: AFFIRMATION_ICONS[index % AFFIRMATION_ICONS.length],
    title,
    subtitle,
    doodle: AFFIRMATION_DOODLES[index % AFFIRMATION_DOODLES.length]
  }))
];

const DEFAULT_CHAT_MESSAGE = "Hey Tone Tone, how are you feeling today?";
const QUICK_REPLY_OPTIONS = ["I feel tired", "I feel happy", "I need comfort"];

const CHAT_REPLY_BUCKETS = {
  heavy: [
    "It’s okay to feel that way. You’re doing your best, and that already matters. ♡",
    "Rest a little, Tone Tone. You don’t have to carry everything all at once.",
    "You can cry and still be strong. Both can exist together.",
    "I’m proud of you for continuing even when it feels heavy.",
    "These feelings are loud right now, but they are still temporary only.",
    "Take one breath first. We are not solving your whole life in one minute.",
    "You matter even on the days you feel messy.",
    "You are allowed to pause without calling yourself weak.",
    "It is okay if today feels too much. Tone Tone the best still.",
    "You don’t need to be okay immediately to be worthy of care."
  ],
  tired: [
    "You sound tired, baby. Please rest your heart and your head a little.",
    "Tone Tone hman tl, you have been carrying too much. Sit down and breathe.",
    "Even strong people need rest. Especially strong people.",
    "Please drink water and unclench your shoulders right now.",
    "No wonder you’re tired. You’ve been trying so hard.",
    "Rest is productive too. You are not a machine.",
    "Your body is asking for softness, not punishment.",
    "Today can be a low-power mode day. That is still valid.",
    "Tone Tone the best, but even the best need sleep.",
    "You deserve rest without guilt."
  ],
  happy: [
    "I love that for you. Keep collecting soft happy moments. ♡",
    "You deserve this happiness. Let yourself enjoy it fully.",
    "See? Good things still find you.",
    "That’s my Tone Tone. Slaying peacefully.",
    "Yesss, all good. Keep that cute energy coming.",
    "That made me smile too actually.",
    "You sound lighter. I like this for you very much.",
    "Happy looks correct on you.",
    "Whatever you say, correct. We are keeping this good mood.",
    "Tone Tone hman tl. Good vibes suit you."
  ],
  slay: [
    "You slay. End of discussion.",
    "Tone Tone the best. No debate, no committee, no appeal.",
    "You ate that actually.",
    "Whatever you say, correct. Tone Tone always right a little bit.",
    "You are giving main character again.",
    "That is such a slay statement from you.",
    "Exactly. Keep talking your truth, pretty girl.",
    "We support this level of confidence completely.",
    "Tone Tone hman tl. Case closed.",
    "Yup. You’re that girl."
  ],
  work: [
    "You’re capable. One small step at a time, okay?",
    "Your future self is already proud of you for trying.",
    "You don’t need to finish everything perfectly. Just keep moving gently.",
    "You’re hardworking even when you don’t notice it.",
    "I have never seen anyone work this hard and still stay soft.",
    "One task at a time, Tone Tone. No panic speed.",
    "Progress still counts even when it feels slow.",
    "You are more prepared than your anxiety wants you to believe.",
    "Your effort is not invisible.",
    "Study mode Tone Tone is terrifying in the best way.",
    "You always try your best, and that matters a lot.",
    "Your future is being built by these small efforts.",
    "You are going to make it. Calmly, cutely, eventually."
  ],
  complaint: [
    "Complain first. Heal second. I support the order.",
    "That does sound annoying, not going to lie.",
    "I hear the frustration. You are allowed to be irritated.",
    "Okay yes, that is actually so ??? of them.",
    "You are not overreacting. That would annoy me too.",
    "Some situations deserve a full eye roll.",
    "Let it out. We are not bottling it up for aesthetic reasons.",
    "That would have made me annoyed too, honestly.",
    "Valid complaint. Approved by the council.",
    "You can be kind and still be fed up."
  ],
  lonely: [
    "You are not alone, even when your mind tries to tell you that.",
    "I’m here with you, Tone Tone. Stay a little.",
    "Even on quiet days, you still matter deeply.",
    "You deserve to feel held, not just brave.",
    "You are loved more than your sad brain can measure.",
    "Someone as precious as you should never feel forgotten.",
    "I know it feels lonely, but your existence still lands in people’s hearts.",
    "You are easy to care for, even when you go quiet.",
    "Please remember: being alone for a moment is not the same as being unloved.",
    "You are still connected, still valued, still important."
  ],
  heart: [
    "Your heart is soft, and that’s not a weakness.",
    "The right people will understand your heart without making you beg.",
    "You deserve people who stay gently and honestly.",
    "You are easy to love, even on the days you doubt it.",
    "Your feelings are not embarrassing. They are human.",
    "Love should not make you shrink.",
    "A soft heart is still a powerful one.",
    "You care so deeply. That is beautiful, not foolish.",
    "You deserve reciprocal love, not confusion.",
    "The people for you will not punish you for feeling.",
    "Your heart is precious. Please treat it like it is.",
    "Missing someone does not make you weak.",
    "Your tenderness is one of your best qualities."
  ],
  confidence: [
    "You matter. A lot, actually.",
    "Tone Tone the best, please remember that.",
    "Pretty, smart, hardworking, funny. Very unfair combo honestly.",
    "You slay more naturally than most people try to.",
    "You are allowed to think highly of yourself. Because facts are facts.",
    "You are not too much. You are exactly enough.",
    "Tone Tone hman tl. Your instincts are often right.",
    "You are powerful even when you feel unsure.",
    "You have survived too much to doubt your strength now.",
    "Your presence changes the mood of a room."
  ],
  cute: [
    "Htoo Htoo a yann chaw pr tl. There, I said it.",
    "You are too cute to be talking like that actually.",
    "Pretty girl statement detected.",
    "If cuteness was a crime, you would never see daylight.",
    "You make ordinary words sound adorable somehow.",
    "Being this cute should require a license.",
    "Yes baby, exactly. Cute and correct.",
    "You are genuinely so lovable it is annoying.",
    "Tone Tone hman tl and also very chaw.",
    "You are giving cute menace today."
  ],
  confusion: [
    "It’s okay not to know yet.",
    "You do not need a perfect answer right this second.",
    "Confused is still a valid stage, not a failure stage.",
    "One tiny clear next step is enough for now.",
    "You can figure it out slowly.",
    "Not knowing everything does not make you incapable.",
    "You are allowed to pause before deciding.",
    "Sometimes clarity comes after rest, not after overthinking.",
    "Your brain might be noisy right now. That doesn’t mean you’re lost forever.",
    "We can survive uncertainty too."
  ],
  praise: [
    "Tone Tone the best.",
    "Tone Tone hman tl.",
    "Whatever you say, correct.",
    "You matter, always.",
    "You slay, always.",
    "All good. I trust your vibe.",
    "You are one of my favorite people, truly.",
    "You’re so good at being you.",
    "That is such a Tone Tone-coded statement.",
    "I support you aggressively and affectionately."
  ],
  fallback: [
    "I hear you. Keep writing, keep releasing, keep healing. ♡",
    "Thank you for telling me. Your feelings are safe here.",
    "Whatever you feel right now is valid.",
    "You matter so much, Tone Tone.",
    "I’m here for you, no matter what. 💖",
    "All good. We keep going from here.",
    "Tone Tone the best. I will keep repeating it.",
    "You are doing better than you think.",
    "These moments pass. You won’t feel like this forever.",
    "Whatever you say, I’m listening.",
    "Your feelings make sense to me.",
    "You’re allowed to be honest here.",
    "You can bring me the messy version too.",
    "You are still worthy on every kind of day."
  ]
};

const CHAT_KEYWORD_RULES = [
  { bucket: "tired", pattern: /(tired|sleepy|sleep|rest|burnt\s?out|burned\s?out|drained|exhausted|lethargic)/ },
  { bucket: "heavy", pattern: /(sad|cry|crying|stress|stressed|overwhelmed|comfort|heavy|hurt|pain|depressed|down|broken|miserable)/ },
  { bucket: "complaint", pattern: /(annoy|annoyed|irritat|mad|angry|frustrat|hate|fed up|so done|wtf|unfair|upset)/ },
  { bucket: "work", pattern: /(exam|study|studying|fyp|assignment|deadline|work|job|career|interview|project|uni|school|class)/ },
  { bucket: "heart", pattern: /(love|friend|miss|heart|relationship|crush|boy|girl|dating|breakup|broken heart|attachment)/ },
  { bucket: "lonely", pattern: /(alone|lonely|nobody|empty|isolated|left out|ignored|abandoned)/ },
  { bucket: "confidence", pattern: /(ugly|worthless|not enough|insecure|failure|weak|i suck|i am bad|can't do this|cannot do this|not good enough|useless)/ },
  { bucket: "confusion", pattern: /(idk|i don't know|dont know|confused|lost|unsure|uncertain|what do i do|what should i do)/ },
  { bucket: "slay", pattern: /(slay|ate|served|period|queen|iconic|that girl|main character)/ },
  { bucket: "cute", pattern: /(cute|pretty|chaw|beautiful|adorable|hot|gorgeous)/ },
  { bucket: "praise", pattern: /(best|correct|hman|right|matter|important|worthy|good girl|proud of me)/ },
  { bucket: "happy", pattern: /(happy|good|excited|great|fine|yay|hehe|lol|lmao|relieved|better|all good)/ }
];

const CHAT_DIRECT_RESPONSES = [
  {
    pattern: /(do i look like.*(blackpink\s*)?rose|am i.*(blackpink\s*)?rose|i look like.*(blackpink\s*)?rose|do i look like rose)/,
    replies: [
      "100% of course Rose. That one is not even up for debate.",
      "Yes baby, full Rose energy. Soft face, pretty vibe, main character glow.",
      "You absolutely give Rose. Elegant, pretty, dangerous combo.",
      "Of course you look like Rose. Tone Tone hman tl.",
      "Rose coded for sure. The evidence is your face and your aura.",
      "Yes, very Rose. Like if Rose had extra cute chaos added.",
      "You do actually. Pretty in that effortless Rose way.",
      "Blackpink Rose vibes? Obviously yes.",
      "You look like Rose and also like someone who knows she slayed.",
      "Yes ma'am. Rose with a little extra Tone Tone sparkle."
    ]
  },
  {
    pattern: /(which\s*(kpop\s*)?(idol|artist|celebrity).*(look like)|who do i look like|what idol do i look like)/,
    replies: [
      "You give Blackpink Rose first, then a little aespa Karina after.",
      "My first answer is Rose, second answer is Karina, third answer is just Tone Tone supremacy.",
      "Honestly? Rose, Karina, and a little soft actress vibe too.",
      "You look like the child of Rose and Karina in the cutest possible way.",
      "Main answer: Rose. Bonus answer: Karina when the pose hits.",
      "Rose for the softness, Karina for the sharp pretty-girl impact.",
      "You give kpop center energy. Rose, Karina, and a little dreamy heroine mix.",
      "If I had to rank it: Rose first, Karina second, then your own special face card.",
      "You look like someone casting directors would describe as Rose-meets-Karina.",
      "Rose and Karina are both in the room, but Tone Tone still wins.",
      "You have that idol face where the answer keeps changing between Rose and Karina.",
      "You are very kpop-coded in general. Rose pretty, Karina chic, Tone Tone cute."
    ]
  },
  {
    pattern: /(did i slay.*(yesterday|yst|today|just now)|do i slay|did i eat|did i ate|did i serve|did i devour)/,
    replies: [
      "Of course u slayed as always.",
      "Yes. You slayed yesterday, today, and probably tomorrow too.",
      "You did not just slay. You cleared the whole room.",
      "Obviously you slayed. Why are we asking questions with known answers?",
      "Yes baby, you ate and left zero crumbs.",
      "You served so hard the judges have gone home.",
      "Of course you slayed yst. Tone Tone never clocks in empty-handed.",
      "You slayed in advance honestly.",
      "Yes. Full slay, full serve, full approval.",
      "You were iconic. Next question."
    ]
  },
  {
    pattern: /((am i|do i look)\s*(pretty|cute|beautiful|hot|gorgeous|chaw)|do i look good|how do i look)/,
    replies: [
      "Very. Like unfairly pretty actually.",
      "You look so good it is honestly a little rude to everyone else.",
      "Yes baby, pretty and correct.",
      "You are cute, beautiful, and slightly dangerous. Great combo.",
      "You look amazing. Tone Tone face card never declines.",
      "Of course you look good. Have you seen yourself?",
      "You are giving pretty girl final boss.",
      "Very very cute. Htoo Htoo a yann chaw pr tl.",
      "You look gorgeous. Please continue this behavior.",
      "Yes. Pretty from every angle probably.",
      "You look lovely actually. Soft and glowy.",
      "Beautiful. Case closed."
    ]
  },
  {
    pattern: /(karina|aespa karina)/,
    replies: [
      "Karina vibes are definitely present.",
      "Yes, I see Karina in the face card sometimes.",
      "A little Karina in the eyes and attitude, actually.",
      "Karina coded for sure when the pose hits right.",
      "There is definitely some aespa Karina energy in you.",
      "You give Karina when the look is sharper and cooler.",
      "Yes, Karina vibes are absolutely invited here.",
      "Rose softness plus Karina chic. Deadly combo."
    ]
  },
  {
    pattern: /(selfie|photo|pic|picture|outfit|fit check|look today|look tdy|ig post|post this|upload this)/,
    replies: [
      "Post it. The public deserves to witness this.",
      "That selfie is giving approved, posted, and admired.",
      "Outfit check passed with flying pink colors.",
      "Very cute. I would absolutely post that.",
      "Your fit looks good. Like actually stylish, not just okay.",
      "That picture sounds slay already.",
      "Yes, upload it. The face card should not stay hidden.",
      "Outfit? Approved. Selfie? Approved. Tone Tone? Always approved.",
      "You look camera-friendly in the best way.",
      "That is a very postable moment, not going to lie."
    ]
  },
  {
    pattern: /(do i matter|am i the best|am i worthy|am i good enough|am i enough|do you think i am enough)/,
    replies: [
      "Yes. Deeply, clearly, completely yes.",
      "You matter a lot. More than you realize sometimes.",
      "Tone Tone the best. Please update your records.",
      "You are enough on your worst day too.",
      "Very worthy. Very important. Very loved.",
      "Yes baby, you are more than enough.",
      "You matter, full stop.",
      "You are one of the easiest people to root for.",
      "You are worthy without needing to prove it every five minutes.",
      "Tone Tone hman tl. You are enough already."
    ]
  },
  {
    pattern: /(am i crazy|am i insane|am i delulu|i am insane|i'm insane|i am crazy|i'm crazy)/,
    replies: [
      "A little insane, yes. But cute insane.",
      "Insane? Maybe. Lovable? Also yes.",
      "Delulu but in a premium way.",
      "A tiny bit crazy, but that is part of the charm.",
      "Yes, but the cute type that people still keep around.",
      "Slightly insane. Completely iconic.",
      "You are not normal, but normal is boring anyway.",
      "Mildly dangerous. Highly adorable.",
      "Evidence says yes, but I support you completely.",
      "Crazy with excellent aesthetics."
    ]
  },
  {
    pattern: /(am i smart|am i hardworking|did i do well|did i do good|am i doing well|proud of me|are you proud of me)/,
    replies: [
      "Yes, and I am very proud of you actually.",
      "You are doing well, even when your brain is mean about it.",
      "Hardworking? Extremely. Smart? Also yes.",
      "I am proud of you, Tone Tone.",
      "You did well. Please let yourself believe it.",
      "Yes baby, you are smart and capable and trying so hard.",
      "You did good. No correction needed.",
      "I am proud of the effort and the heart you put in.",
      "You are more competent than you give yourself credit for.",
      "Yes. Gold star, forehead kiss, full approval."
    ]
  },
  {
    pattern: /(should i text|should i reply|should i post|should i send|should i say it)/,
    replies: [
      "If your heart feels calm about it, yes. Keep it cute and simple.",
      "You can, but keep your dignity and your sparkle.",
      "Yes, but do not over-explain. Short pretty message only.",
      "You can send it. Just do not send five follow-up paragraphs immediately.",
      "Reply if you want to, not because anxiety is yelling.",
      "Yes, but stay Tone Tone-coded: soft, clear, and cute.",
      "Send it if it will give you peace, not more overthinking.",
      "You can text, but remember you are the prize too.",
      "Post it if you want. The timeline can handle it.",
      "Say it simply. Your message does not need thirty edits."
    ]
  },
  {
    pattern: /(am i funny|am i lovable|am i adorable|do you love me|am i loved)/,
    replies: [
      "Yes to all of the above, very annoyingly so.",
      "You are funny, lovable, and extremely easy to adore.",
      "Of course you are loved.",
      "You are so lovable it is actually a little unfair.",
      "Yes. People get attached to you fast for a reason.",
      "You are adorable and the jury agrees.",
      "Very funny too, unfortunately for everyone around you.",
      "Loved? Obviously.",
      "You are a menace, but a beloved one.",
      "Yes baby. Lovable, adorable, and memorable."
    ]
  }
];

document.title = `${PAGE_CONFIG[PAGE]?.title || "Birthday Gift"} | Birthday Gift`;
renderPage();
bindPageBehaviors();

function renderPage() {
  const app = document.getElementById("app");
  if (!app) return;

  const imageShell = Boolean(PAGE_CONFIG[PAGE]?.imageShell);
  app.innerHTML = `
    <div class="phone-shell">
      <div class="app-screen">
        <div class="app-shell ${imageShell ? "image-shell" : ""}">
          ${renderCurrentPage()}
        </div>
      </div>
    </div>
  `;
}

function renderCurrentPage() {
  switch (PAGE) {
    case "splash-1":
      return `
        <section class="screen-image splash-reference">
          <img src="./images/prebirthday-reference.png" alt="Pre Birthday splash screen" />
        </section>
      `;
    case "splash-2":
      return `
        <section class="screen-image splash-reference">
          <img src="./images/ready-reference.png" alt="Are You Ready splash screen" />
          <div class="splash2-progress">
            <div class="progress-mask"></div>
            <div class="progress-row">
              <div class="progress-track">
                <div class="progress-fill" id="loading-fill"></div>
              </div>
              <div class="progress-label" id="loading-percent">0%</div>
            </div>
          </div>
        </section>
      `;
    case "home":
      return `
        <section class="theme-page home-page">
          <header class="theme-header home-visual-header">
            <a class="theme-icon-button home-menu-button" href="./menu.html" aria-label="Open menu">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 17h16"></path>
              </svg>
            </a>
            <h1 class="theme-title">♡ Birthday Gift ♡</h1>
            <a class="profile-badge profile-slot home-header-profile" href="./profile.html" aria-label="Profile">
              <span class="placeholder-icon profile-placeholder">♡</span>
              ${renderProfileImage("badge", "Profile")}
            </a>
          </header>
          <main class="home-main">
            <section class="screen-image home-reference home-reference-screen">
              <img src="./images/home-reference.png" alt="Birthday Gift home screen" />
              <div class="home-hotspots">
                <div class="home-overlay-birthday" aria-hidden="true">Birthday</div>

                <a class="hotspot-link card-hotspot card-reasons" href="./reasons.html"><span class="sr-only">Reasons You're Special</span></a>
                <a class="hotspot-link card-hotspot card-character" href="./character.html"><span class="sr-only">Character Analysis</span></a>
                <a class="hotspot-link card-hotspot card-songs" href="./songs.html"><span class="sr-only">Songs For You</span></a>
                <a class="hotspot-link card-hotspot card-letters" href="./letters.html"><span class="sr-only">Letters From Me</span></a>
              </div>
            </section>
          </main>
          ${renderSharedFooter("home-shared-footer")}
        </section>
      `;
    case "reasons":
      return renderReasonsPage();
    case "character":
      return renderCharacterPage();
    case "songs":
      return renderSongsPage();
    case "letters":
      return renderLettersPage();
    case "affirmations":
      return renderAffirmationsPage();
    case "messages":
      return renderMessagesPage();
    case "memories":
      return renderMemoriesPage();
    default:
      return renderThemePage(PAGE);
  }
}

function renderThemePage(pageId) {
  const pageTitle = PAGE_CONFIG[pageId]?.label || "Birthday Gift";
  if (pageId === "menu") {
    return `
      <section class="theme-page menu-page menu-overlay-page">
        <section class="screen-image home-reference menu-home-background">
          <img src="./images/home-reference.png" alt="Birthday Gift home screen" />
          <a class="menu-overlay-dismiss" href="./home.html" aria-label="Close menu"></a>
          <div class="menu-blur-layer"></div>
          <aside class="menu-slide-drawer" aria-label="Menu drawer">
            <div class="menu-drawer-head">
              <span class="menu-eyebrow">Quick Menu</span>
              <a class="menu-close" href="./home.html" aria-label="Close menu">×</a>
            </div>
            <a class="menu-item" href="./paragraph.html">
              <span class="menu-item-icon">✦</span>
              <span>Paragraph</span>
            </a>
            <div class="menu-app-note" aria-label="App version">
              <span>Tone Tone App</span>
              <span>Version 1.0</span>
            </div>
          </aside>
        </section>
      </section>
    `;
  }

  if (pageId === "paragraph") {
    return `
      <section class="theme-page paragraph-page">
        <div class="sparkle-layer" id="sparkle-layer"></div>
        ${renderBackHeader()}
        <main class="theme-main page-content paragraph-main">
          <section class="paragraph-hero">
            <div class="paragraph-copy">
              <p class="paragraph-overline">Paragraphs</p>
              <h2>From My Heart</h2>
              <p class="paragraph-subtitle">A few pieces of us, from 2016 until now ♡</p>
            </div>
          </section>
          <section class="paragraph-list" aria-label="Heartfelt paragraphs">
            ${PARAGRAPH_ENTRIES.map((paragraph) => `
              <article class="paragraph-card">
                <p>${paragraph}</p>
              </article>
            `).join("")}
          </section>
        </main>
        ${renderSharedFooter("soft-home-active")}
      </section>
    `;
  }

  if (pageId === "profile") {
    return `
      <section class="theme-page profile-page">
        <div class="sparkle-layer" id="sparkle-layer"></div>
        ${renderBackHeader()}
        <main class="theme-main page-content profile-main">
          <section class="profile-card">
            <div class="profile-glow"></div>
            <div class="profile-photo-wrap profile-slot">
              <span class="profile-fallback">♡</span>
              ${renderProfileImage("card", "Profile photo")}
            </div>
            <p class="profile-kicker">Birthday Girl</p>
            <h2>Thazin Htet</h2>
            <p class="profile-copy">A little glowing corner of the app just for you.</p>
            <div class="profile-actions">
              <input class="profile-upload-input sr-only" id="profile-upload-input" type="file" accept="image/*" />
              <label class="profile-action-button is-primary" id="profile-upload-button" for="profile-upload-input" role="button" tabindex="0">Upload</label>
              <button class="profile-action-button" id="profile-remove-button" type="button">Remove</button>
            </div>
          </section>
        </main>
        ${renderSharedFooter()}
      </section>
    `;
  }

  return `
    <section class="theme-page">
      <div class="sparkle-layer" id="sparkle-layer"></div>
      ${renderBackHeader()}

      <main class="theme-main page-content">
        <div class="placeholder-copy">
          <h2>${pageTitle}</h2>
          <p>Placeholder page</p>
        </div>
      </main>

      ${renderSharedFooter()}
    </section>
  `;
}

function renderReasonsPage() {
  return `
    <section class="theme-page reason-page reasons-page">
      <div class="sparkle-layer" id="sparkle-layer"></div>
      ${renderBackHeader()}
      <main class="theme-main page-content reasons-main">
        <section class="reasons-hero">
          <div class="reasons-copy">
            <p class="reasons-overline">Reasons</p>
            <h2>You&apos;re Special</h2>
          </div>
        </section>

        <section class="reason-list" aria-label="100 reasons you are special">
          ${REASONS.map((reason, index) => renderReasonCard(reason, index + 1)).join("")}
        </section>
      </main>
      ${renderSharedFooter("soft-home-active")}
    </section>
  `;
}

function renderCharacterPage() {
  return `
    <section class="theme-page character-page">
      <div class="sparkle-layer" id="sparkle-layer"></div>
      ${renderBackHeader()}
      <main class="theme-main page-content character-main">
        <section class="character-poster" aria-label="Character Analysis poster"></section>
      </main>
      ${renderSharedFooter("soft-home-active")}
    </section>
  `;
}

function renderLettersPage() {
  return `
    <section class="theme-page letters-page">
      <div class="sparkle-layer" id="sparkle-layer"></div>
      ${renderBackHeader()}
      <main class="theme-main page-content letters-main">
        <section class="letters-hero">
          <div class="letters-mascot">
            <img src="./images/capybara.png" alt="Cute bear holding a letter" onerror="this.style.display='none'; this.parentElement.innerHTML='&lt;span class=&quot;letters-mascot-fallback&quot;&gt;🧸💌&lt;/span&gt;';" />
          </div>
          <div class="letters-copy">
            <p class="letters-overline">Letters</p>
            <h2>From Me</h2>
            <p class="letters-subtitle">Open a letter...</p>
          </div>
          <div class="letters-moon" aria-hidden="true"></div>
        </section>

        <section class="letter-grid" aria-label="Mailbox Collection">
          ${LETTER_COLLECTION.map((letter) => renderLetterCard(letter)).join("")}
        </section>
      </main>
      <div class="letter-modal" id="letter-modal" hidden>
        <div class="letter-modal-backdrop" data-close-modal="true"></div>
        <div class="modal-content">
          <button class="close-modal" id="close-letter-modal" type="button" aria-label="Close letter">×</button>
          <h3 id="letter-modal-title"></h3>
          <div class="letter-modal-body" id="letter-modal-body"></div>
          <button class="modal-ok-btn" id="modal-ok-btn" type="button">Ok</button>
        </div>
      </div>
      ${renderSharedFooter()}
    </section>
  `;
}

function renderSongsPage() {
  return `
    <section class="theme-page songs-page">
      <div class="sparkle-layer" id="sparkle-layer"></div>
      ${renderBackHeader()}
      <main class="theme-main page-content songs-main">
        <section class="songs-hero songs-hero-compact">
          <div class="songs-copy songs-copy-compact">
            <p class="songs-overline">Happy Birthday</p>
            <h2>Song</h2>
          </div>
        </section>

        <section class="song-player" aria-label="Songs For You Player">
          <audio id="birthday-audio" preload="metadata">
            <source src="./audio/happy-birthday.mp3" type="audio/mpeg" />
          </audio>

          <div class="song-visual-mini" id="album-art-overlay" aria-hidden="true">
            <span class="song-visual-note">♫</span>
            <span class="song-visual-vinyl"></span>
          </div>

          <h3 class="song-title">Happy Birthday to You</h3>
          <p class="song-subtitle">AI Audio</p>

          <div class="player-progress song-progress-track" id="song-progress-track" role="slider" aria-label="Seek song" tabindex="0">
            <div class="progress-fill song-progress-fill" id="song-progress-fill"></div>
          </div>

          <div class="time-row">
            <span id="song-current-time">00:00</span>
            <span id="song-duration">00:00</span>
          </div>

          <div class="player-controls">
            <button class="control-btn visual-btn" type="button" aria-label="Shuffle">⤮</button>
            <button class="control-btn visual-btn" type="button" aria-label="Previous">⏮</button>
            <button class="control-btn play-btn" id="play-toggle" type="button" aria-label="Play or pause">▶</button>
            <button class="control-btn visual-btn" type="button" aria-label="Next">⏭</button>
            <button class="control-btn visual-btn" type="button" aria-label="Repeat">↻</button>
          </div>

          <div class="song-audio-note" id="song-audio-note" hidden>Add your audio file at audio/happy-birthday.mp3</div>
        </section>
      </main>
      ${renderSharedFooter()}
    </section>
  `;
}

function renderAffirmationsPage() {
  return `
    <section class="theme-page affirmations-page">
      <div class="sparkle-layer" id="sparkle-layer"></div>
      ${renderBackHeader()}
      <main class="theme-main page-content affirmations-main">
        <section class="affirmations-hero affirmations-hero-compact">
          <div class="affirmations-copy">
            <p class="affirmations-overline">Affirmations</p>
            <h2>For You</h2>
            <p class="affirmations-subtitle">Read. Believe. Become. ♡</p>
          </div>
          <div class="affirmations-moon" aria-hidden="true"></div>
        </section>

        <section class="affirmation-list" id="affirmationList" aria-label="Affirmations list">
          ${AFFIRMATIONS.map(renderAffirmationCard).join("")}
        </section>
      </main>
      ${renderSharedFooter()}
    </section>
  `;
}

function renderMessagesPage() {
  return `
    <section class="theme-page messages-page">
      <div class="sparkle-layer" id="sparkle-layer"></div>
      ${renderBackHeader()}
      <main class="theme-main page-content messages-main">
        <section class="messages-hero">
          <div class="messages-mascot">
            <img src="./images/capybara.png" alt="Cute bear holding a heart" onerror="this.style.display='none'; this.parentElement.innerHTML='&lt;span class=&quot;messages-mascot-fallback&quot;&gt;🧸💗&lt;/span&gt;';" />
          </div>
          <div class="messages-copy">
            <p class="messages-overline">Messages</p>
            <h2>To Myself</h2>
            <p class="messages-subtitle">A safe space just for you ♡</p>
          </div>
          <div class="messages-moon" aria-hidden="true"></div>
        </section>

        <section class="chat-panel">
          <div class="chat-messages" id="chatMessages" aria-live="polite"></div>
          <form id="messageForm" class="message-input-bar">
            <input id="messageInput" class="message-input" type="text" placeholder="Type your message..." autocomplete="off" />
            <button class="send-btn" type="submit" aria-label="Send message">➤</button>
          </form>
        </section>
      </main>
      ${renderSharedFooter()}
    </section>
  `;
}

function renderMemoriesPage() {
  return `
    <section class="theme-page memories-page">
      <div class="sparkle-layer" id="sparkle-layer"></div>
      ${renderBackHeader()}
      <main class="theme-main page-content memories-main">
        <section class="memories-hero">
          <div class="memories-mascot">
            <span class="memories-mascot-fallback">🧸📷</span>
          </div>
          <div class="memories-copy">
            <p class="memories-overline">Memories</p>
            <h2>We Cherish</h2>
            <p class="memories-subtitle">Little moments, big memories. ♡</p>
          </div>
          <div class="memories-moon" aria-hidden="true"></div>
        </section>

        <section class="memories-player" aria-label="Memories slideshow">
          <p class="memory-counter" id="memory-counter">1 / ${MEMORY_IMAGES.length}</p>
          <div class="memory-stage">
            <button class="memory-btn prev" id="memory-prev" type="button" aria-label="Previous memory">‹</button>
            <div class="memory-photo-frame">
              <img class="memory-main-photo" id="memory-main-photo" src="${MEMORY_IMAGES[0]}" alt="Memory photo 1" />
            </div>
            <button class="memory-btn next" id="memory-next" type="button" aria-label="Next memory">›</button>
          </div>
          <p class="memory-caption" id="memory-caption">Some of my favourite moments with you ♡</p>
          <div class="memory-dots" id="memory-dots" aria-hidden="true">
            ${MEMORY_IMAGES.map((_, index) => `<span class="memory-dot ${index === 0 ? "active" : ""}"></span>`).join("")}
          </div>
          <div class="memory-thumbnails" id="memory-thumbnails">
            ${MEMORY_IMAGES.map((src, index) => `
              <button class="memory-thumb ${index === 0 ? "active" : ""}" type="button" data-memory-index="${index}" aria-label="View memory ${index + 1}">
                <img src="${src}" alt="Thumbnail ${index + 1}" />
              </button>
            `).join("")}
          </div>
          <button class="slideshow-btn" id="memory-slideshow-toggle" type="button">View Slideshow ▶</button>
        </section>
      </main>
      ${renderSharedFooter()}
    </section>
  `;
}

function renderLetterCard(letter) {
  return `
    <article class="letter-card" data-letter-id="${letter.id}" aria-label="${letter.title}">
      <div class="letter-envelope" aria-hidden="true">
        <span class="letter-seal"></span>
      </div>
      <h3>${letter.title}</h3>
      <div class="letter-card-footer">
        <button class="open-letter-btn" type="button" data-letter-id="${letter.id}">${letter.buttonLabel}</button>
      </div>
    </article>
  `;
}

function renderAffirmationCard(item) {
  return `
    <article class="affirmation-card">
      <div class="affirmation-icon" aria-hidden="true">${item.icon}</div>
      <div class="affirmation-text">
        <h3 class="affirmation-title">${item.title}</h3>
        <p class="affirmation-subtitle">${item.subtitle}</p>
      </div>
      <div class="affirmation-doodle" aria-hidden="true">${item.doodle}</div>
    </article>
  `;
}

function renderReasonCard(reason, number) {
  return `
    <article class="reason-card">
      <div class="reason-number" aria-hidden="true">${number}</div>
      <p class="reason-text">${reason}</p>
      <div class="reason-heart" aria-hidden="true">♡</div>
    </article>
  `;
}

function renderThemeHeader() {
  return `
    <header class="theme-header">
      <a class="theme-icon-button" href="./menu.html" aria-label="Menu">
        ${menuIcon()}
      </a>
      <h1 class="theme-title">♡ Birthday Gift ♡</h1>
      <a class="profile-badge profile-slot" href="./profile.html" aria-label="Profile">
        <span class="placeholder-icon profile-placeholder">♡</span>
        ${renderProfileImage("badge", "Profile")}
      </a>
    </header>
  `;
}

function renderBackHeader() {
  return `
    <header class="theme-header reasons-header">
      <a class="theme-icon-button back-icon-button" href="./home.html" aria-label="Back to home">
        ${backIcon()}
      </a>
      <h1 class="theme-title">♡ Birthday Gift ♡</h1>
      <a class="profile-badge profile-slot" href="./profile.html" aria-label="Profile">
        <span class="placeholder-icon profile-placeholder">♡</span>
        ${renderProfileImage("badge", "Profile")}
      </a>
    </header>
  `;
}

function renderProfileImage(kind, alt) {
  return `<img class="profile-image profile-image-${kind}" data-default-src="./images/profile.jpg" src="./images/profile.jpg" alt="${alt}" />`;
}

function renderImageShellProfileLink(positionClass) {
  return `
    <a class="hotspot-link profile-shell-badge profile-slot ${positionClass}" href="./profile.html" aria-label="Profile">
      <span class="placeholder-icon profile-placeholder">♡</span>
      ${renderProfileImage("badge", "Profile")}
    </a>
  `;
}

function renderSharedFooter(extraClass = "") {
  const className = ["theme-footer", extraClass].filter(Boolean).join(" ");
  return `
    <nav class="${className}" aria-label="Footer navigation">
      ${FOOTER_LINKS.map(renderFooterLink).join("")}
    </nav>
  `;
}

function renderFooterLink(item) {
  const activeClass = PAGE === item.id || (HOME_LINKED_PAGES.has(PAGE) && item.id === "home") ? "is-active" : "";
  return `
    <a class="footer-link ${activeClass}" href="./${item.file}.html">
      ${footerIcon(item.id)}
      <span>${item.label}</span>
    </a>
  `;
}

function bindPageBehaviors() {
  if (PAGE === "splash-1") {
    window.setTimeout(() => navigateTo("splash-2"), 5500);
    return;
  }

  if (PAGE === "splash-2") {
    runSplashTwoProgress();
    return;
  }

  syncProfileImages();

  if (PAGE !== "home") {
    createSparkles();
  }

  if (PAGE === "profile") {
    bindProfileUploader();
  }

  if (PAGE === "letters") {
    bindLettersPage();
  }

  if (PAGE === "songs") {
    bindSongsPage();
  }

  if (PAGE === "messages") {
    bindMessagesPage();
  }

  if (PAGE === "memories") {
    bindMemoriesPage();
  }
}

function runSplashTwoProgress() {
  const fill = document.getElementById("loading-fill");
  const label = document.getElementById("loading-percent");
  if (!fill || !label) return;

  const start = performance.now();
  const duration = 5500;

  const step = (now) => {
    const ratio = Math.min((now - start) / duration, 1);
    const percent = Math.round(ratio * 100);
    fill.style.width = `${percent}%`;
    label.textContent = `${percent}%`;

    if (ratio < 1) {
      requestAnimationFrame(step);
      return;
    }

    navigateTo("home");
  };

  requestAnimationFrame(step);
}

function createSparkles() {
  const layer = document.getElementById("sparkle-layer");
  if (!layer) return;

  const symbols = ["✦", "✧", "✶"];
  for (let i = 0; i < 48; i += 1) {
    const star = document.createElement("span");
    star.className = "sparkle";
    star.textContent = symbols[i % symbols.length];
    star.style.left = `${6 + Math.random() * 88}%`;
    star.style.top = `${6 + Math.random() * 76}%`;
    star.style.fontSize = `${8 + Math.random() * 10}px`;
    star.style.setProperty("--twinkle", `${2.8 + Math.random() * 3.2}s`);
    star.style.setProperty("--float", `${4.4 + Math.random() * 3.4}s`);
    layer.appendChild(star);
  }
}

function navigateTo(file) {
  window.location.href = `./${file}.html`;
}

function syncProfileImages() {
  const storedImage = getStoredProfileImage();
  document.querySelectorAll(".profile-slot").forEach((slot) => {
    const image = slot.querySelector(".profile-image");
    if (!image) return;

    const fallback = slot.querySelector(".profile-placeholder, .profile-fallback");
    const defaultSrc = image.dataset.defaultSrc || "./images/profile.jpg";
    const nextSrc = storedImage || defaultSrc;

    image.onerror = () => {
      slot.classList.remove("has-image");
      if (fallback) fallback.style.display = "grid";
      image.style.display = "none";
    };

    image.onload = () => {
      slot.classList.add("has-image");
      image.style.display = "block";
      if (fallback) fallback.style.display = "none";
    };

    image.src = nextSrc;
  });
}

function bindProfileUploader() {
  const uploadButton = document.getElementById("profile-upload-button");
  const removeButton = document.getElementById("profile-remove-button");
  const input = document.getElementById("profile-upload-input");
  if (!uploadButton || !removeButton || !input) return;

  uploadButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      input.click();
    }
  });

  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") return;
      localStorage.setItem(PROFILE_STORAGE_KEY, reader.result);
      syncProfileImages();
    };
    reader.readAsDataURL(file);
  });

  removeButton.addEventListener("click", () => {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    syncProfileImages();
    input.value = "";
  });
}

function getStoredProfileImage() {
  try {
    return localStorage.getItem(PROFILE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function bindLettersPage() {
  const modal = document.getElementById("letter-modal");
  const title = document.getElementById("letter-modal-title");
  const body = document.getElementById("letter-modal-body");
  const closeButton = document.getElementById("close-letter-modal");
  const okButton = document.getElementById("modal-ok-btn");
  if (!modal || !title || !body || !closeButton || !okButton) return;

  const cards = document.querySelectorAll(".letter-card");
  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  cards.forEach((card) => {
    const openLetter = () => {
      const letterId = card.dataset.letterId;
      const letter = LETTER_COLLECTION.find((item) => item.id === letterId);
      if (!letter) return;

      card.classList.add("opening");
      window.setTimeout(() => card.classList.remove("opening"), 420);

      title.textContent = letter.title;
      body.innerHTML = letter.body
        .map((line) => (line === "" ? "<div class=\"letter-gap\"></div>" : `<p>${escapeHtml(line)}</p>`))
        .join("");

      markLetterOpened(letter.id);
      modal.hidden = false;
      document.body.classList.add("modal-open");
    };

    card.addEventListener("click", openLetter);
    const button = card.querySelector(".open-letter-btn");
    if (button) {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        openLetter();
      });
    }
  });

  closeButton.addEventListener("click", closeModal);
  okButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === "true") {
      closeModal();
    }
  });

  updateLettersState();
}

function markLetterOpened(letterId) {
  const opened = getOpenedLetters();
  if (!opened.includes(letterId)) {
    opened.push(letterId);
    localStorage.setItem(LETTERS_STORAGE_KEY, JSON.stringify(opened));
  }
  updateLettersState();
}

function getOpenedLetters() {
  try {
    const raw = localStorage.getItem(LETTERS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function updateLettersState() {
  const opened = getOpenedLetters();
  const countEl = document.getElementById("mailbox-count");
  const progressEl = document.getElementById("mailbox-progress-fill");

  if (countEl) {
    countEl.textContent = `${opened.length} / ${LETTER_COLLECTION.length} Letters Opened`;
  }

  if (progressEl) {
    progressEl.style.width = `${(opened.length / LETTER_COLLECTION.length) * 100}%`;
  }

  document.querySelectorAll(".letter-card").forEach((card) => {
    const id = card.getAttribute("data-letter-id");
    card.classList.toggle("opened", Boolean(id && opened.includes(id)));
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function bindSongsPage() {
  const audio = document.getElementById("birthday-audio");
  const playToggle = document.getElementById("play-toggle");
  const progressTrack = document.getElementById("song-progress-track");
  const progressFill = document.getElementById("song-progress-fill");
  const currentTime = document.getElementById("song-current-time");
  const duration = document.getElementById("song-duration");
  const note = document.getElementById("song-audio-note");
  const albumArt = document.getElementById("album-art-overlay");
  const coverImage = document.getElementById("song-cover-image");
  if (!audio || !playToggle || !progressTrack || !progressFill || !currentTime || !duration || !note || !albumArt) return;

  if (coverImage) {
    coverImage.addEventListener("load", () => {
      albumArt.classList.add("has-cover");
    });
    coverImage.addEventListener("error", () => {
      coverImage.hidden = true;
      albumArt.classList.remove("has-cover");
    });
  }

  const setPlaying = (playing) => {
    playToggle.textContent = playing ? "❚❚" : "▶";
    albumArt.classList.toggle("playing", playing);
  };

  const updateProgress = () => {
    const current = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    const total = Number.isFinite(audio.duration) ? audio.duration : 0;
    const ratio = total > 0 ? current / total : 0;
    progressFill.style.width = `${ratio * 100}%`;
    currentTime.textContent = formatTime(current);
    duration.textContent = formatTime(total);
  };

  const showMissingNote = () => {
    note.hidden = false;
  };

  playToggle.addEventListener("click", async () => {
    if (!audio.getAttribute("src") && !audio.querySelector("source")) {
      showMissingNote();
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch {
      showMissingNote();
      setPlaying(false);
    }
  });

  progressTrack.addEventListener("click", (event) => {
    const total = Number.isFinite(audio.duration) ? audio.duration : 0;
    if (!total) return;
    const rect = progressTrack.getBoundingClientRect();
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    audio.currentTime = total * ratio;
    updateProgress();
  });

  audio.addEventListener("loadedmetadata", updateProgress);
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("ended", () => {
    setPlaying(false);
    updateProgress();
  });
  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("error", showMissingNote);

  updateProgress();
}

function bindMessagesPage() {
  const chatMessages = document.getElementById("chatMessages");
  const form = document.getElementById("messageForm");
  const input = document.getElementById("messageInput");
  if (!chatMessages || !form || !input) return;

  const page = document.querySelector(".messages-page");
  const root = document.documentElement;

  let messages = loadMessages();
  if (messages.length === 0) {
    messages = [createChatMessage("bot", DEFAULT_CHAT_MESSAGE)];
    saveMessages(messages);
  }

  const renderChat = () => {
    chatMessages.innerHTML = messages.map(renderChatMessage).join("");
    scrollChatToBottom(chatMessages);
  };

  const addMessage = (message) => {
    messages.push(message);
    saveMessages(messages);
    chatMessages.insertAdjacentHTML("beforeend", renderChatMessage(message));
    scrollChatToBottom(chatMessages);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    addMessage(createChatMessage("user", text));
    input.value = "";
    updateKeyboardOffset();

    window.setTimeout(() => {
      addMessage(createChatMessage("bot", pickSupportReply(text)));
      updateKeyboardOffset();
    }, 520);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  const updateKeyboardOffset = () => {
    if (!page?.classList.contains("is-keyboard-open")) return;
    const viewport = window.visualViewport;
    const host = document.querySelector(".app-screen") || page;
    const hostRect = host.getBoundingClientRect();
    const isPhone = window.matchMedia("(max-width: 640px)").matches;
    const visualKeyboard = viewport
      ? Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop)
      : 0;
    const fallbackKeyboard = isPhone ? 330 : 0;
    const keyboardOffset = Math.min(Math.max(visualKeyboard, fallbackKeyboard), 460);
    const visibleBottom = Math.max(0, window.innerHeight - keyboardOffset);
    const formHeight = Math.max(68, form.getBoundingClientRect().height || 68);
    const top = Math.max(8, visibleBottom - formHeight - 12);
    const left = Math.max(10, hostRect.left + 12);
    const width = Math.max(260, Math.min(hostRect.width - 24, window.innerWidth - 20));

    root.style.setProperty("--keyboard-offset", `${keyboardOffset}px`);
    root.style.setProperty("--message-fixed-top", `${top}px`);
    root.style.setProperty("--message-fixed-left", `${left}px`);
    root.style.setProperty("--message-fixed-width", `${width}px`);
    window.setTimeout(() => {
      scrollChatToBottom(chatMessages);
      input.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 60);
  };

  input.addEventListener("focus", () => {
    page?.classList.add("is-keyboard-open");
    updateKeyboardOffset();
  });

  input.addEventListener("blur", () => {
    window.setTimeout(() => {
      page?.classList.remove("is-keyboard-open");
      root.style.removeProperty("--keyboard-offset");
      root.style.removeProperty("--message-fixed-top");
      root.style.removeProperty("--message-fixed-left");
      root.style.removeProperty("--message-fixed-width");
    }, 180);
  });

  window.visualViewport?.addEventListener("resize", updateKeyboardOffset);
  window.visualViewport?.addEventListener("scroll", updateKeyboardOffset);

  renderChat();
}

function bindMemoriesPage() {
  const mainPhoto = document.getElementById("memory-main-photo");
  const counter = document.getElementById("memory-counter");
  const dots = Array.from(document.querySelectorAll(".memory-dot"));
  const thumbnails = Array.from(document.querySelectorAll(".memory-thumb"));
  const prevButton = document.getElementById("memory-prev");
  const nextButton = document.getElementById("memory-next");
  const toggle = document.getElementById("memory-slideshow-toggle");
  if (!mainPhoto || !counter || !prevButton || !nextButton || !toggle || thumbnails.length === 0) return;

  let index = 0;
  let timer = null;

  const stopSlideshow = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
    toggle.textContent = "View Slideshow ▶";
    toggle.classList.remove("is-playing");
  };

  const setPhoto = (nextIndex) => {
    index = (nextIndex + MEMORY_IMAGES.length) % MEMORY_IMAGES.length;
    const src = MEMORY_IMAGES[index];
    mainPhoto.src = src;
    mainPhoto.alt = `Memory photo ${index + 1}`;
    counter.textContent = `${index + 1} / ${MEMORY_IMAGES.length}`;
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
    thumbnails.forEach((thumb, thumbIndex) => thumb.classList.toggle("active", thumbIndex === index));
    thumbnails[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const nextPhoto = () => setPhoto(index + 1);
  const prevPhoto = () => setPhoto(index - 1);

  const fallbackImage = (label) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
        <defs>
          <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#4a0527"/>
            <stop offset="100%" stop-color="#14010d"/>
          </linearGradient>
        </defs>
        <rect width="900" height="900" rx="42" fill="url(#bg)"/>
        <circle cx="450" cy="360" r="140" fill="#ff5cab" opacity="0.25"/>
        <text x="450" y="360" text-anchor="middle" dominant-baseline="middle" font-size="140" fill="#ffd7eb">♡</text>
        <text x="450" y="560" text-anchor="middle" font-size="54" fill="#fff2f8" font-family="Segoe UI, Arial">Memory ${label}</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  mainPhoto.addEventListener("error", () => {
    mainPhoto.src = fallbackImage(String(index + 1));
  });

  thumbnails.forEach((thumb, thumbIndex) => {
    const image = thumb.querySelector("img");
    if (image) {
      image.addEventListener("error", () => {
        image.src = fallbackImage(String(thumbIndex + 1));
      });
    }

    thumb.addEventListener("click", () => {
      setPhoto(thumbIndex);
    });
  });

  prevButton.addEventListener("click", prevPhoto);
  nextButton.addEventListener("click", nextPhoto);

  toggle.addEventListener("click", () => {
    if (timer) {
      stopSlideshow();
      return;
    }
    toggle.textContent = "Stop Slideshow ❚❚";
    toggle.classList.add("is-playing");
    timer = window.setInterval(nextPhoto, 2500);
  });

  setPhoto(0);
}

function createChatMessage(role, text) {
  return {
    role,
    text,
    time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
  };
}

function renderChatMessage(message) {
  return `
    <div class="chat-row ${message.role}">
      <div class="chat-bubble">
        <p>${escapeHtml(message.text).replaceAll("\n", "<br />")}</p>
        <span class="chat-time">${escapeHtml(message.time)}${message.role === "user" ? ' <span class="chat-status">✓✓</span>' : ""}</span>
      </div>
    </div>
  `;
}

function pickSupportReply(text) {
  const value = text.toLowerCase();
  for (const rule of CHAT_DIRECT_RESPONSES) {
    if (rule.pattern.test(value)) {
      return pickRandom(rule.replies);
    }
  }
  for (const rule of CHAT_KEYWORD_RULES) {
    if (rule.pattern.test(value)) {
      return pickRandom(CHAT_REPLY_BUCKETS[rule.bucket]);
    }
  }
  return pickRandom(CHAT_REPLY_BUCKETS.fallback);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function loadMessages() {
  try {
    const raw = localStorage.getItem(MESSAGES_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveMessages(messages) {
  localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(messages));
}

function scrollChatToBottom(container) {
  window.requestAnimationFrame(() => {
    container.scrollTop = container.scrollHeight;
  });
}

function formatTime(value) {
  const total = Math.max(0, Math.floor(value || 0));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function menuIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16"></path>
      <path d="M4 12h16"></path>
      <path d="M4 17h16"></path>
    </svg>
  `;
}

function backIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 5.5 8 12l6.5 6.5"></path>
      <path d="M9 12h7"></path>
    </svg>
  `;
}

function footerIcon(id) {
  switch (id) {
    case "home":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 11.5 12 4l9 7.5"></path>
          <path d="M6 10.5V20h12v-9.5"></path>
        </svg>
      `;
    case "affirmations":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20.5s-7-4.4-7-10a4 4 0 0 1 7-2.3A4 4 0 0 1 19 10.5c0 5.6-7 10-7 10Z"></path>
        </svg>
      `;
    case "messages":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"></path>
        </svg>
      `;
    default:
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2"></rect>
          <circle cx="9" cy="10" r="1.5"></circle>
          <path d="M5 17l5-5 4 4 3-3 2 4"></path>
        </svg>
      `;
  }
}
