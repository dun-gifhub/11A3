export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  bulletPoints: {
    heading?: string;
    content: string;
    evidence?: string;
    badge?: string;
  }[];
  quoteBox?: {
    text: string;
    author?: string;
    source?: string;
  };
  visualHint: {
    iconName: string;
    tag: string;
    colorTheme: 'red' | 'green' | 'amber' | 'stone';
    illustrationType?: 'poem' | 'author' | 'swallow' | 'temple' | 'analysis';
  };
  speakerNotes: string;
  presentationTips?: string;
}

export interface ResearchSection {
  id: string;
  partNumber: string;
  title: string;
  subsections: {
    subtitle: string;
    content: string;
    bullets?: string[];
    note?: string;
  }[];
}

export interface InteractiveQuestion {
  id: number;
  question: string;
  purpose: string;
  hint: string;
  suggestedAnswer: string;
  studentDiscussionPoint: string;
}

export interface ReferenceItem {
  id: number;
  authorOrOrg: string;
  workTitle: string;
  publisherOrSource: string;
  yearOrType: string;
  url?: string;
  reliabilityNote: string;
}
