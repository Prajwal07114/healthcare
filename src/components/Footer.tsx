import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
          <span className="font-semibold text-lg">Cancer Awareness & Support</span>
        </div>
        <p className="text-gray-400 text-sm">
          Together we fight, together we heal, together we hope.
        </p>
        <p className="text-gray-500 text-xs mt-4">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
