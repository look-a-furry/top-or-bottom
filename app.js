// Personality Adjectives for 18+ Mode
const personalityAdjectives = {
  "dominant": {
    name: "Dominant",
    emoji: "👑",
    description: "You naturally take charge in intimate situations. You enjoy being in control, setting the pace, and guiding your partner. Your confidence and assertiveness make you a natural leader in the bedroom.",
    traits: ["Assertive", "Confident", "Protective", "In Control", "Commanding"]
  },
  "submissive": {
    name: "Submissive",
    emoji: "🦋",
    description: "You find pleasure in surrendering control to a trusted partner. You enjoy being guided, following directions, and letting someone else take the lead. Your trust and openness create deep connections.",
    traits: ["Trusting", "Receptive", "Devoted", "Yielding", "Responsive"]
  },
  "switch": {
    name: "Switch",
    emoji: "🔄",
    description: "You're versatile and adaptable, equally comfortable taking charge or surrendering control depending on your mood and partner. Your flexibility makes you an exciting and unpredictable partner.",
    traits: ["Versatile", "Adaptable", "Balanced", "Intuitive", "Dynamic"]
  },
  "kinky": {
    name: "Kinky",
    emoji: "⛓️",
    description: "You have an adventurous spirit when it comes to intimacy. You're curious about exploring beyond the conventional and enjoy trying new things that push boundaries in exciting ways.",
    traits: ["Adventurous", "Curious", "Open-minded", "Creative", "Daring"]
  },
  "vanilla": {
    name: "Vanilla",
    emoji: "🌸",
    description: "You appreciate intimate connections that focus on emotional depth and traditional expressions of affection. You value romance, tenderness, and meaningful connection over novelty.",
    traits: ["Romantic", "Tender", "Sensual", "Affectionate", "Intimate"]
  },
  "playful": {
    name: "Playful",
    emoji: "😈",
    description: "You bring a sense of fun and lightheartedness to intimate moments. You enjoy teasing, games, and keeping things exciting with humor and spontaneity.",
    traits: ["Teasing", "Fun-loving", "Spontaneous", "Mischievous", "Lighthearted"]
  }
};

// Personality Types Data
const personalityTypes = {
  "PYW": {
    id: "PYW",
    name: "Wolf",
    emoji: "🐺",
    image: "img/wolf_by_sorakirby_&_pastelwolf.webp",
    credit: "sorakirby & pastelwolf",
    tagline: "The Pack Leader",
    description: "You're a natural born leader with boundless energy and a wild spirit! Wolves thrive in social settings where they can rally others toward exciting adventures. You're fiercely loyal to your pack and always ready to explore new territories together. Your enthusiasm is contagious, and others naturally look to you for direction and motivation.",
    traits: ["Social", "Energetic", "Adventurous", "Loyal", "Protective"],
    strengths: ["Natural leadership", "Building strong communities", "Inspiring others", "Facing challenges head-on"],
    challenges: ["Learning to slow down", "Accepting help from others", "Handling solitude"],
    compatibleWith: ["Dog", "Fox", "Bear"],
    color: "#6B7280",
    gradient: "linear-gradient(135deg, #374151 0%, #6B7280 50%, #9CA3AF 100%)"
  },
  "PYZ": {
    id: "PYZ",
    name: "Dog",
    emoji: "🐕",
    image: "img/dog_by_Elutaru.webp",
    credit: "Elutaru",
    tagline: "The Loyal Companion",
    description: "You're the ultimate friend everyone wishes they had! Dogs are social butterflies who bring joy and playfulness wherever they go. You love being surrounded by your favorite people in comfortable, familiar spaces. Your enthusiasm for life is matched only by your dedication to those you care about.",
    traits: ["Friendly", "Playful", "Loyal", "Affectionate", "Optimistic"],
    strengths: ["Making friends easily", "Spreading joy", "Unconditional love", "Creating warm atmospheres"],
    challenges: ["Setting boundaries", "Being alone", "Handling rejection"],
    compatibleWith: ["Wolf", "Red Panda", "Rabbit"],
    color: "#D97706",
    gradient: "linear-gradient(135deg, #B45309 0%, #D97706 50%, #FBBF24 100%)"
  },
  "PCW": {
    id: "PCW",
    name: "Bear",
    emoji: "🐻",
    image: "img/bear_by_deadstraybear.webp",
    credit: "deadstraybear",
    tagline: "The Gentle Giant",
    description: "You possess a rare combination of strength and serenity. Bears are social creatures who prefer meaningful connections over superficial ones. You love exploring the great outdoors with close friends, taking time to appreciate nature's beauty. Your calm presence makes others feel safe and protected.",
    traits: ["Strong", "Protective", "Patient", "Nature-loving", "Thoughtful"],
    strengths: ["Providing stability", "Deep friendships", "Patience", "Physical presence"],
    challenges: ["Opening up emotionally", "Fast-paced environments", "Dealing with drama"],
    compatibleWith: ["Wolf", "Owl", "Red Panda"],
    color: "#78350F",
    gradient: "linear-gradient(135deg, #451A03 0%, #78350F 50%, #A16207 100%)"
  },
  "PCZ": {
    id: "PCZ",
    name: "Red Panda",
    emoji: "🦊",
    image: "img/redpanda_by_cinnamonspots.webp",
    credit: "cinnamonspots",
    tagline: "The Cozy Curator",
    description: "You're the master of creating warm, welcoming spaces where friends can relax and be themselves. Red Pandas enjoy gentle social gatherings in comfortable settings. You have a talent for making everyone feel at ease with your calm demeanor and thoughtful nature. Quality time with loved ones is your favorite activity.",
    traits: ["Gentle", "Welcoming", "Thoughtful", "Cozy", "Caring"],
    strengths: ["Creating comfort", "Emotional support", "Peaceful presence", "Hosting gatherings"],
    challenges: ["Asserting yourself", "High-energy situations", "Confrontation"],
    compatibleWith: ["Dog", "Bear", "Rabbit"],
    color: "#DC2626",
    gradient: "linear-gradient(135deg, #991B1B 0%, #DC2626 50%, #F87171 100%)"
  },
  "SYW": {
    id: "SYW",
    name: "Fox",
    emoji: "🦊",
    image: "img/fox_by_moozleart.webp",
    credit: "moozleart",
    tagline: "The Clever Trickster",
    description: "You're quick-witted, curious, and always on the move! Foxes are independent spirits who love exploring and discovering new things on their own terms. You have a playful side that comes out when you're comfortable, but you value your freedom above all else. Your cleverness and adaptability help you thrive in any situation.",
    traits: ["Clever", "Independent", "Curious", "Adaptable", "Mischievous"],
    strengths: ["Problem-solving", "Thinking outside the box", "Quick learning", "Self-reliance"],
    challenges: ["Trusting others", "Commitment", "Asking for help"],
    compatibleWith: ["Wolf", "Cat", "Owl"],
    color: "#EA580C",
    gradient: "linear-gradient(135deg, #C2410C 0%, #EA580C 50%, #FB923C 100%)"
  },
  "SYZ": {
    id: "SYZ",
    name: "Cat",
    emoji: "🐱",
    image: "img/tiger_by_unknown.webp",
    credit: "unknown",
    tagline: "The Independent Spirit",
    description: "You march to the beat of your own drum, and that's exactly how you like it! Cats are playful yet selective about their company, preferring cozy indoor spaces where they can do their own thing. You have bursts of energy followed by peaceful relaxation. Those lucky enough to earn your trust get to see your affectionate side.",
    traits: ["Independent", "Playful", "Selective", "Graceful", "Mysterious"],
    strengths: ["Self-sufficiency", "Setting boundaries", "Elegance", "Selective bonding"],
    challenges: ["Opening up", "Group activities", "Following rules"],
    compatibleWith: ["Fox", "Rabbit", "Owl"],
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #5B21B6 0%, #7C3AED 50%, #A78BFA 100%)"
  },
  "SCW": {
    id: "SCW",
    name: "Owl",
    emoji: "🦉",
    image: "img/owl_by_pulexart.webp",
    credit: "pulexart",
    tagline: "The Wise Observer",
    description: "You see what others miss. Owls are thoughtful individuals who prefer observing from a quiet vantage point, taking in the world's mysteries. You value solitude and deep thinking, often coming up with insights that surprise others. Nature calls to you, especially during the peaceful hours when others are asleep.",
    traits: ["Wise", "Observant", "Thoughtful", "Mysterious", "Independent"],
    strengths: ["Deep insight", "Patience", "Wisdom", "Seeing the big picture"],
    challenges: ["Social situations", "Spontaneity", "Expressing emotions"],
    compatibleWith: ["Bear", "Fox", "Cat"],
    color: "#4338CA",
    gradient: "linear-gradient(135deg, #312E81 0%, #4338CA 50%, #6366F1 100%)"
  },
  "SCZ": {
    id: "SCZ",
    name: "Rabbit",
    emoji: "🐰",
    image: "img/bunny_by_spookyfoxinc.webp",
    credit: "spookyfoxinc",
    tagline: "The Gentle Dreamer",
    description: "You find magic in life's simple pleasures. Rabbits are gentle souls who cherish peace, comfort, and quiet moments of contentment. You prefer your own cozy space where you can relax without pressure. Though you may seem shy at first, you have a rich inner world and form deep bonds with those patient enough to know you.",
    traits: ["Gentle", "Peaceful", "Dreamy", "Sensitive", "Content"],
    strengths: ["Finding joy in small things", "Inner peace", "Creativity", "Empathy"],
    challenges: ["Assertiveness", "New situations", "Handling stress"],
    compatibleWith: ["Dog", "Red Panda", "Cat"],
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #BE185D 0%, #EC4899 50%, #F9A8D4 100%)"
  }
};

// Questions Data
const questions = [
  // Social Axis Questions (Pack vs Solitary)
  {
    id: 1,
    text: "It's Friday night. What sounds like the perfect evening?",
    axis: 'social',
    answers: [
      { text: "A big party with lots of friends and new people to meet!", score: 2 },
      { text: "Hanging out with my close friend group", score: 1 },
      { text: "A quiet night in with one best friend", score: -1 },
      { text: "Solo time with a good book or game", score: -2 }
    ]
  },
  {
    id: 2,
    text: "You're planning a vacation. What's your ideal setup?",
    axis: 'social',
    answers: [
      { text: "Group trip with a big crew!", score: 2 },
      { text: "Traveling with a few close friends", score: 1 },
      { text: "Just me and one special person", score: -1 },
      { text: "Solo adventure at my own pace", score: -2 }
    ]
  },
  {
    id: 3,
    text: "When you're feeling down, what helps most?",
    axis: 'social',
    answers: [
      { text: "Being surrounded by supportive friends", score: 2 },
      { text: "Talking it out with someone close", score: 1 },
      { text: "Some alone time to process my feelings", score: -1 },
      { text: "Complete solitude until I feel better", score: -2 }
    ]
  },
  {
    id: 4,
    text: "At a convention or large event, you're most likely to...",
    axis: 'social',
    answers: [
      { text: "Make friends with everyone I meet!", score: 2 },
      { text: "Stick with my group but chat with others", score: 1 },
      { text: "Explore mostly alone, maybe chat occasionally", score: -1 },
      { text: "Find a quiet corner and observe", score: -2 }
    ]
  },

  // Energy Axis Questions (Playful vs Calm)
  {
    id: 5,
    text: "How would your friends describe your energy?",
    axis: 'energy',
    answers: [
      { text: "A bouncing ball of endless enthusiasm!", score: 2 },
      { text: "Fun and lively when the moment's right", score: 1 },
      { text: "Chill and easygoing", score: -1 },
      { text: "The calm, zen presence in any group", score: -2 }
    ]
  },
  {
    id: 6,
    text: "It's a lazy Sunday afternoon. You're most likely...",
    axis: 'energy',
    answers: [
      { text: "Starting an impromptu adventure or project", score: 2 },
      { text: "Playing games or doing something active", score: 1 },
      { text: "Relaxing with a low-key hobby", score: -1 },
      { text: "Napping or meditating peacefully", score: -2 }
    ]
  },
  {
    id: 7,
    text: "When trying something new, you typically...",
    axis: 'energy',
    answers: [
      { text: "Dive in headfirst with excitement!", score: 2 },
      { text: "Jump in with cautious enthusiasm", score: 1 },
      { text: "Take my time to ease into it", score: -1 },
      { text: "Observe and learn before committing", score: -2 }
    ]
  },
  {
    id: 8,
    text: "Your ideal weekend morning looks like...",
    axis: 'energy',
    answers: [
      { text: "Up early for exciting plans!", score: 2 },
      { text: "A fun brunch or morning activity", score: 1 },
      { text: "Slow start with coffee and relaxation", score: -1 },
      { text: "Sleep in as long as possible", score: -2 }
    ]
  },

  // Nature Axis Questions (Wild vs Cozy)
  {
    id: 9,
    text: "Where do you feel most at home?",
    axis: 'nature',
    answers: [
      { text: "Deep in nature, far from civilization", score: 2 },
      { text: "A park or outdoor space near town", score: 1 },
      { text: "A cozy cafe or comfortable indoor spot", score: -1 },
      { text: "My own room with all my favorite things", score: -2 }
    ]
  },
  {
    id: 10,
    text: "Your dream living situation would be...",
    axis: 'nature',
    answers: [
      { text: "A cabin in the mountains or forest", score: 2 },
      { text: "A house with a big yard and garden", score: 1 },
      { text: "A cozy apartment in a nice neighborhood", score: -1 },
      { text: "A perfectly decorated, comfortable home", score: -2 }
    ]
  },
  {
    id: 11,
    text: "When stressed, you recharge by...",
    axis: 'nature',
    answers: [
      { text: "Hiking, camping, or being in wilderness", score: 2 },
      { text: "A walk outside or time in nature", score: 1 },
      { text: "Curling up in my favorite cozy spot", score: -1 },
      { text: "Blankets, snacks, and comfort content", score: -2 }
    ]
  },
  {
    id: 12,
    text: "Your ideal date would be...",
    axis: 'nature',
    answers: [
      { text: "An outdoor adventure like hiking or kayaking", score: 2 },
      { text: "A picnic in a beautiful park", score: 1 },
      { text: "A nice dinner at a cozy restaurant", score: -1 },
      { text: "Movie night with snacks at home", score: -2 }
    ]
  }
];

// 18+ Spicy Questions for Intimacy Axis
const nsfwQuestions = [
  {
    id: 13,
    text: "In intimate moments, you prefer to...",
    axis: 'intimacy',
    answers: [
      { text: "Take complete control and call all the shots", score: 3 },
      { text: "Usually lead, but enjoy switching things up", score: 1 },
      { text: "Usually follow, but take charge sometimes", score: -1 },
      { text: "Surrender completely and let my partner guide me", score: -3 }
    ]
  },
  {
    id: 14,
    text: "When it comes to bedroom activities, you...",
    axis: 'intimacy',
    answers: [
      { text: "Love exploring new kinks and pushing boundaries", score: 2, kink: 2 },
      { text: "Enjoy some variety but have favorite go-to activities", score: 1, kink: 1 },
      { text: "Prefer keeping things sensual and romantic", score: -1, kink: -1 },
      { text: "Stick to classic intimacy - it's classic for a reason", score: -2, kink: -2 }
    ]
  },
  {
    id: 15,
    text: "Your fantasy scenario would involve...",
    axis: 'intimacy',
    answers: [
      { text: "Being worshipped and having complete power", score: 3 },
      { text: "An exciting power exchange with my partner", score: 0 },
      { text: "Deep emotional connection and tender moments", score: -1, kink: -1 },
      { text: "Being completely at my partner's mercy", score: -3 }
    ]
  },
  {
    id: 16,
    text: "The idea of restraints, toys, or roleplay makes you feel...",
    axis: 'intimacy',
    answers: [
      { text: "Extremely excited - the more creative the better!", score: 1, kink: 3 },
      { text: "Curious and open to trying with the right person", score: 0, kink: 1 },
      { text: "A bit nervous, but maybe with someone I trust", score: 0, kink: -1 },
      { text: "Not really my thing - I prefer keeping it simple", score: -1, kink: -3 }
    ]
  },
  {
    id: 17,
    text: "When your partner wants to try something new, you...",
    axis: 'intimacy',
    answers: [
      { text: "Get excited and often suggest taking it even further", score: 1, kink: 2 },
      { text: "Happily go along and enjoy their enthusiasm", score: -1 },
      { text: "Need time to warm up but usually enjoy it", score: -1 },
      { text: "Prefer to stick with what I know works for us", score: 0, kink: -2 }
    ]
  },
  {
    id: 18,
    text: "In a perfect intimate encounter, you would be...",
    axis: 'intimacy',
    answers: [
      { text: "The one pinning my partner down", score: 3 },
      { text: "Playfully wrestling for the top position", score: 0 },
      { text: "Pulled close and held tight", score: -2 },
      { text: "The one being pinned down", score: -3 }
    ]
  },
  {
    id: 19,
    text: "Dirty talk during intimacy...",
    axis: 'intimacy',
    answers: [
      { text: "I love giving commands and praise", score: 2 },
      { text: "I enjoy playful teasing back and forth", score: 0 },
      { text: "I like hearing how much I'm wanted", score: -1 },
      { text: "I prefer soft whispers and sweet words", score: -1, kink: -1 }
    ]
  },
  {
    id: 20,
    text: "After an intimate session, you typically want to...",
    axis: 'intimacy',
    answers: [
      { text: "Admire my handiwork and care for my partner", score: 2 },
      { text: "Cuddle and laugh about what just happened", score: 0 },
      { text: "Be held and told I did a good job", score: -2 },
      { text: "Gentle aftercare and sweet pillow talk", score: -1 }
    ]
  }
];

// Quiz State
let currentQuestion = 0;
let scores = { social: 0, energy: 0, nature: 0, intimacy: 0, kink: 0 };
let selectedAnswer = null;
let isTransitioning = false;
let currentPersonality = null;
let currentAdjective = null;
let isNsfwMode = false;
let activeQuestions = questions;

// DOM Elements
const landingPage = document.getElementById('landing-page');
const quizPage = document.getElementById('quiz-page');
const resultsPage = document.getElementById('results-page');

// Initialize the app
function init() {
  populateTypeGrid();
  showPage('landing');
  setMode('sfw'); // Default to SFW mode
}

// Set quiz mode (SFW or NSFW)
function setMode(mode) {
  isNsfwMode = mode === 'nsfw';

  // Update button states
  const sfwButton = document.getElementById('sfw-mode');
  const nsfwButton = document.getElementById('nsfw-mode');
  const modeDescription = document.getElementById('mode-description');
  const intimacyTraitCard = document.getElementById('intimacy-trait-card');

  if (isNsfwMode) {
    sfwButton.classList.remove('active');
    nsfwButton.classList.add('active');
    modeDescription.textContent = 'Includes spicy questions about sexual preferences';
    modeDescription.classList.add('nsfw-active');
    intimacyTraitCard.classList.remove('hidden');
    activeQuestions = [...questions, ...nsfwQuestions];
  } else {
    sfwButton.classList.add('active');
    nsfwButton.classList.remove('active');
    modeDescription.textContent = 'Family-friendly personality quiz';
    modeDescription.classList.remove('nsfw-active');
    intimacyTraitCard.classList.add('hidden');
    activeQuestions = questions;
  }
}

// Populate personality type grid on landing page
function populateTypeGrid() {
  const grid = document.getElementById('type-grid');
  grid.innerHTML = '';

  Object.values(personalityTypes).forEach(type => {
    const card = document.createElement('div');
    card.className = 'type-card';
    card.style.background = type.gradient;
    card.innerHTML = `
      <img class="type-emoji" src="${type.image}" alt="${type.name}">
      <span class="type-credit">credit: ${type.credit}</span>
      <span class="type-name">${type.name}</span>
      <span class="type-tagline">${type.tagline}</span>
    `;
    grid.appendChild(card);
  });
}

// Show a specific page
function showPage(pageName) {
  landingPage.classList.add('hidden');
  quizPage.classList.add('hidden');
  resultsPage.classList.add('hidden');

  if (pageName === 'landing') {
    landingPage.classList.remove('hidden');
  } else if (pageName === 'quiz') {
    quizPage.classList.remove('hidden');
  } else if (pageName === 'results') {
    resultsPage.classList.remove('hidden');
  }
}

// Start the quiz
function startQuiz() {
  currentQuestion = 0;
  scores = { social: 0, energy: 0, nature: 0, intimacy: 0, kink: 0 };
  selectedAnswer = null;
  isTransitioning = false;
  currentAdjective = null;

  // Ensure activeQuestions is correctly set based on current mode
  activeQuestions = isNsfwMode ? [...questions, ...nsfwQuestions] : questions;

  showPage('quiz');
  renderQuestion();
}

// Render the current question
function renderQuestion() {
  const question = activeQuestions[currentQuestion];
  const progress = (currentQuestion / activeQuestions.length) * 100;

  // Update counter and progress
  document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${activeQuestions.length}`;
  document.getElementById('progress-fill').style.width = `${progress}%`;

  // Update back button state
  document.getElementById('back-button').disabled = currentQuestion === 0;

  // Update question text
  document.getElementById('question-text').textContent = question.text;

  // Update trait indicator
  const traitIndicator = document.getElementById('trait-indicator');
  if (question.axis === 'social') {
    traitIndicator.textContent = 'Social Style';
  } else if (question.axis === 'energy') {
    traitIndicator.textContent = 'Energy Level';
  } else if (question.axis === 'nature') {
    traitIndicator.textContent = 'Environment';
  } else if (question.axis === 'intimacy') {
    traitIndicator.textContent = 'Intimacy Style';
  }

  // Render answers
  const answersContainer = document.getElementById('answers');
  answersContainer.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'answer-button';
    button.textContent = answer.text;
    button.onclick = () => handleAnswerClick(index, answer.score, answer.kink || 0);
    answersContainer.appendChild(button);
  });

  // Remove transitioning class
  document.getElementById('question-card').classList.remove('transitioning');
}

// Handle answer selection
function handleAnswerClick(answerIndex, score, kinkScore = 0) {
  if (isTransitioning) return;

  const question = activeQuestions[currentQuestion];

  // Mark answer as selected
  selectedAnswer = answerIndex;
  isTransitioning = true;

  const buttons = document.querySelectorAll('.answer-button');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === answerIndex) {
      btn.classList.add('selected');
    }
  });

  // Add transitioning class
  document.getElementById('question-card').classList.add('transitioning');

  // Update scores
  scores[question.axis] += score;
  if (kinkScore !== 0) {
    scores.kink += kinkScore;
  }

  // Transition to next question or results
  setTimeout(() => {
    if (currentQuestion < activeQuestions.length - 1) {
      currentQuestion++;
      selectedAnswer = null;
      isTransitioning = false;
      renderQuestion();
    } else {
      // Calculate final type and show results
      const typeId = calculatePersonalityType();
      const adjective = isNsfwMode ? calculateAdjective() : null;
      showResults(typeId, adjective);
    }
  }, 400);
}

// Calculate personality type from scores
function calculatePersonalityType() {
  const social = scores.social >= 0 ? 'P' : 'S';
  const energy = scores.energy >= 0 ? 'Y' : 'C';
  const nature = scores.nature >= 0 ? 'W' : 'Z';
  return `${social}${energy}${nature}`;
}

// Calculate intimacy adjective from scores (18+ mode only)
function calculateAdjective() {
  const intimacy = scores.intimacy;
  const kink = scores.kink;

  // Determine dom/sub spectrum
  // Strong dominant (>= 6), Dominant (2 to 5), Switch (-1 to 1), Submissive (-5 to -2), Strong submissive (<= -6)

  // Determine kink level
  // Kinky (>= 3), Playful (-2 to 2), Vanilla (<= -3)

  // Combined logic for adjective
  if (intimacy >= 6) {
    return kink >= 3 ? 'kinky' : 'dominant';
  } else if (intimacy >= 2) {
    if (kink >= 3) return 'kinky';
    if (kink <= -3) return 'vanilla';
    return 'dominant';
  } else if (intimacy >= -1) {
    if (kink >= 3) return 'kinky';
    if (kink <= -3) return 'vanilla';
    return 'switch';
  } else if (intimacy >= -5) {
    if (kink >= 3) return 'kinky';
    if (kink <= -3) return 'vanilla';
    return 'submissive';
  } else {
    return kink >= 3 ? 'kinky' : 'submissive';
  }
}

// Go back to previous question
function goBack() {
  if (currentQuestion > 0 && !isTransitioning) {
    currentQuestion--;
    selectedAnswer = null;
    renderQuestion();
  }
}

// Show results page
function showResults(typeId, adjectiveId = null) {
  const personality = personalityTypes[typeId];
  if (!personality) {
    goHome();
    return;
  }

  currentPersonality = personality;
  const adjective = adjectiveId ? personalityAdjectives[adjectiveId] : null;
  currentAdjective = adjective;

  // Update header
  document.getElementById('results-header').style.background = personality.gradient;
  document.getElementById('result-emoji').innerHTML = `<img class="result-emoji-img" src="${personality.image}" alt="${personality.name}"><span class="result-credit">credit: ${personality.credit}</span>`;

  // Update name with adjective if in NSFW mode
  const resultAdjective = document.getElementById('result-adjective');
  const intimacySection = document.getElementById('intimacy-section');

  if (isNsfwMode && adjective) {
    document.getElementById('result-name').textContent = `You're a ${adjective.name} ${personality.name}!`;
    resultAdjective.textContent = `${adjective.emoji} ${adjective.name}`;
    resultAdjective.classList.remove('hidden');
    intimacySection.classList.remove('hidden');
    document.getElementById('intimacy-description').textContent = adjective.description;
  } else {
    document.getElementById('result-name').textContent = `You're a ${personality.name}!`;
    resultAdjective.classList.add('hidden');
    intimacySection.classList.add('hidden');
  }

  document.getElementById('result-tagline').textContent = personality.tagline;

  // Update description
  document.getElementById('result-description').textContent = personality.description;

  // Update traits (combine personality traits with adjective traits in NSFW mode)
  const traitsContainer = document.getElementById('result-traits');
  traitsContainer.innerHTML = '';

  // Add adjective traits first if in NSFW mode
  if (isNsfwMode && adjective) {
    adjective.traits.slice(0, 2).forEach(trait => {
      const tag = document.createElement('span');
      tag.className = 'trait-tag nsfw-trait';
      tag.textContent = trait;
      traitsContainer.appendChild(tag);
    });
  }

  personality.traits.forEach(trait => {
    const tag = document.createElement('span');
    tag.className = 'trait-tag';
    tag.style.borderColor = personality.color;
    tag.textContent = trait;
    traitsContainer.appendChild(tag);
  });

  // Update strengths
  const strengthsList = document.getElementById('result-strengths');
  strengthsList.innerHTML = '';
  personality.strengths.forEach(strength => {
    const li = document.createElement('li');
    li.textContent = strength;
    strengthsList.appendChild(li);
  });

  // Update challenges
  const challengesList = document.getElementById('result-challenges');
  challengesList.innerHTML = '';
  personality.challenges.forEach(challenge => {
    const li = document.createElement('li');
    li.textContent = challenge;
    challengesList.appendChild(li);
  });

  // Update compatible types
  const compatibleContainer = document.getElementById('compatible-types');
  compatibleContainer.innerHTML = '';
  personality.compatibleWith.forEach(name => {
    const compatType = Object.values(personalityTypes).find(t => t.name === name);
    if (compatType) {
      const card = document.createElement('div');
      card.className = 'compatible-card';
      card.style.background = compatType.gradient;
      card.innerHTML = `
        <img class="compatible-emoji" src="${compatType.image}" alt="${compatType.name}">
        <span class="compatible-name">${compatType.name}</span>
      `;
      compatibleContainer.appendChild(card);
    }
  });

  showPage('results');
}

// Share result
async function shareResult() {
  if (!currentPersonality) return;

  let resultName = currentPersonality.name;
  if (isNsfwMode && currentAdjective) {
    resultName = `${currentAdjective.name} ${currentPersonality.name}`;
  }

  const shareText = `I'm a ${resultName}! ${currentPersonality.tagline} - Take the Furry Personality Test to find your type!`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: `I'm a ${resultName}!`,
        text: shareText,
        url: window.location.href
      });
    } catch (e) {
      // User cancelled or error occurred
    }
  } else {
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
      alert('Copied to clipboard!');
    } catch (e) {
      alert('Unable to share. Try copying the URL manually!');
    }
  }
}

// Go back home
function goHome() {
  showPage('landing');
  // Re-sync the mode UI to ensure buttons reflect current state
  setMode(isNsfwMode ? 'nsfw' : 'sfw');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
