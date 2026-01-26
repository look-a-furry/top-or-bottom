export interface PersonalityType {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  compatibleWith: string[];
  color: string;
  gradient: string;
}

// Three axes:
// Social: Pack (P) vs Solitary (S)
// Energy: Playful (Y) vs Calm (C)
// Nature: Wild (W) vs Cozy (Z)

export const personalityTypes: Record<string, PersonalityType> = {
  "PYW": {
    id: "PYW",
    name: "Wolf",
    emoji: "🐺",
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

export type TraitAxis = 'social' | 'energy' | 'nature';

export interface TraitScore {
  social: number;  // Positive = Pack, Negative = Solitary
  energy: number;  // Positive = Playful, Negative = Calm
  nature: number;  // Positive = Wild, Negative = Cozy
}

export function calculatePersonalityType(scores: TraitScore): string {
  const social = scores.social >= 0 ? 'P' : 'S';
  const energy = scores.energy >= 0 ? 'Y' : 'C';
  const nature = scores.nature >= 0 ? 'W' : 'Z';
  return `${social}${energy}${nature}`;
}
