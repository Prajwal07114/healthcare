import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" fill="currentColor" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Together in the Fight Against
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Cancer
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            You are not alone. We stand together in awareness, support, and hope.
            Every story matters, every voice counts, and every day brings us closer to a cure.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto animate-slide-up">
          <img
            src="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Cancer awareness support"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-xl sm:text-2xl font-semibold">
              Hope • Strength • Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
