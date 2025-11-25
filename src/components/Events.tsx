import { Calendar } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="py-16 px-6 bg-[#f4f4f4]">
      <div className="max-w-9xl mx-auto text-center">
        <h2 className="text-black text-5xl font-semibold mb-4">Upcoming Events</h2>
        <div className="w-24 h-[2px] bg-black mx-auto mb-2"></div>
        <p className="text-xl text-gray-600 mb-8">See what’s next in our workshops and industry sessions.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <img src="/events/1.png" alt="Event 1" className="rounded-2xl shadow-xl w-full h-56 object-cover mb-4" />
          <span className="ml-6 inline-block bg-[#8FFFC6] text-black px-4 py-1 rounded-full text-sm mb-3">Learn More</span>
          <h3 className="ml-6 text-gray-800 font-semibold text-xl mb-1">Experience is the New Menu</h3>
          <p className="ml-6 text-gray-700 text-lg flex items-center gap-2"><Calendar className="w-4 h-4" /> November 27, 2025</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <img src="/events/2.png" alt="Event 2" className="rounded-2xl shadow-xl  w-full h-56 object-cover mb-4" />
          <span className="ml-6 inline-block bg-[#C2D9F0] text-black px-4 py-1 rounded-full text-sm mb-3">Stay Tuned</span>
          <h3 className="ml-6 text-gray-800 font-semibold text-xl mb-1">January Masterclass Summit</h3>
          <p className="ml-6 text-gray-700 text-lg flex items-center gap-2"><Calendar className="w-4 h-4" /> January 2026</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <img src="/events/3.png" alt="Event 3" className="rounded-2xl shadow-xl  w-full h-56 object-cover mb-4" />
          <span className="ml-6 inline-block bg-[#C2D9F0] text-black px-4 py-1 rounded-full text-sm mb-3">Stay Tuned</span>
          <h3 className="ml-6 text-gray-800 font-semibold text-xl mb-1">March Masterclass Summit</h3>
          <p className="ml-6 mb-4 text-gray-700 text-lg flex items-center gap-2"><Calendar className="w-4 h-4" /> March 2026</p>
        </div>
      </div>
    </section>
  );
}
