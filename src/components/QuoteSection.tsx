import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface QuoteData {
  content: string;
  author: string;
}

const DUMMY_QUOTES: QuoteData[] = [
  {
    content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    content: "Your health is an investment, not an expense. Take care of yourself today.",
    author: "Unknown"
  },
  {
    content: "Courage is not the absence of fear, but triumph over it.",
    author: "Nelson Mandela"
  },
  {
    content: "We are stronger together than we are apart.",
    author: "Unknown"
  },
  {
    content: "Hope is the thing with feathers that perches in the soul.",
    author: "Emily Dickinson"
  },
  {
    content: "Every day is a new beginning. Take a breath and start again.",
    author: "Unknown"
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  }
];

export default function QuoteSection() {
  const [quote, setQuote] = useState<QuoteData | null>(null);

  useEffect(() => {
    const randomQuote = DUMMY_QUOTES[Math.floor(Math.random() * DUMMY_QUOTES.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Daily Support Quote
          </h2>
          <p className="text-gray-600">A moment of inspiration for your journey</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-6 left-6 text-pink-200 opacity-50">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative z-10">
            {quote ? (
              <div className="animate-fade-in">
                <blockquote className="text-xl sm:text-2xl text-gray-800 font-medium mb-6 leading-relaxed italic">
                  "{quote.content}"
                </blockquote>
                <p className="text-lg text-purple-600 font-semibold">
                  — {quote.author}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
