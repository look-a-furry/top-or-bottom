import { TraitAxis } from './types';

export interface Answer {
  text: string;
  score: number; // Positive or negative based on axis
}

export interface Question {
  id: number;
  text: string;
  axis: TraitAxis;
  answers: Answer[];
}

export const questions: Question[] = [
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
      { text: "A cozy café or comfortable indoor spot", score: -1 },
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
