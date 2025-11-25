import { Calendar } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="py-16 px-6 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-2">Upcoming Events</h2>
        <div className="w-24 h-[2px] bg-black mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 mb-12">See what’s next in our workshops and industry sessions.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <img src="/mnt/data/Screenshot 2025-11-26 at 12.50.18\u202fAM.png" alt="Event 1" className="rounded-xl w-full h-56 object-cover mb-4" />
          <span className="inline-block bg-[#C2D9F0] text-black px-4 py-1 rounded-full text-sm mb-3">Learn More</span>
          <h3 className="font-semibold text-xl mb-1">CCA Connect Bootcamp Experience is the New Menu</h3>
          <p className="text-gray-700 text-sm flex items-center gap-2"><Calendar className="w-4 h-4" /> November 27, 2025</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <img src="/mnt/data/Screenshot 2025-11-26 at 12.50.18\u202fAM.png" alt="Event 2" className="rounded-xl w-full h-56 object-cover mb-4" />
          <span className="inline-block bg-[#C2D9F0] text-black px-4 py-1 rounded-full text-sm mb-3">Stay Tuned</span>
          <h3 className="font-semibold text-xl mb-1">Masterclass Summit</h3>
          <p className="text-gray-700 text-sm flex items-center gap-2"><Calendar className="w-4 h-4" /> January 2026</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <img src="/mnt/data/Screenshot 2025-11-26 at 12.50.18\u202fAM.png" alt="Event 3" className="rounded-xl w-full h-56 object-cover mb-4" />
          <span className="inline-block bg-[#C2D9F0] text-black px-4 py-1 rounded-full text-sm mb-3">Stay Tuned</span>
          <h3 className="font-semibold text-xl mb-1">Masterclass Summit</h3>
          <p className="text-gray-700 text-sm flex items-center gap-2"><Calendar className="w-4 h-4" /> March 2026</p>
        </div>
      </div>
    </section>
  );
}
