import { Calendar } from "lucide-react";

export default function Events() {
  return (
    <section
      id="events"
      className="py-14 px-5 sm:px-6 bg-[#f4f4f4]"
      style={{ fontFamily: "var(--font-jost), sans-serif" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-black text-3xl sm:text-5xl font-semibold mb-3">
          Upcoming Events
        </h2>

        <div className="w-20 sm:w-24 h-[2px] bg-black mx-auto mb-3"></div>

        <p className="text-lg sm:text-xl text-gray-600 mb-10">
          See what’s next in our workshops and industry sessions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <img
            src="/events/1.png"
            alt="Event 1"
            className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover object-top mb-4"
          />
          <span className="ml-6 inline-block bg-[#8FFFC6] text-black px-4 py-1 rounded-full text-xs sm:text-sm mb-3">
            Learn More
          </span>
          <h3 className="ml-6 text-gray-800 font-semibold text-lg sm:text-xl mb-1">
            Experience is the New Menu
          </h3>
          <p className="ml-6 text-gray-700 text-base sm:text-lg flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4" /> November 27, 2025
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <img
            src="/events/2.jpg"
            alt="Event 2"
            className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover object-top mb-4"
            style={{ objectPosition: "center 30%" }}
          />
          <span className="ml-6 inline-block bg-[#C2D9F0] text-black px-4 py-1 rounded-full text-xs sm:text-sm mb-3">
            Stay Tuned
          </span>
          <h3 className="ml-6 text-gray-800 font-semibold text-lg sm:text-xl mb-1">
            Trends, Technology, & Opportunities
          </h3>
          <p className="ml-6 text-gray-700 text-base sm:text-lg flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4" /> December 4, 2025
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <img
            src="/events/3.png"
            alt="Event 3"
            className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover object-top mb-4"
          />
          <span className="ml-6 inline-block bg-[#C2D9F0] text-black px-4 py-1 rounded-full text-xs sm:text-sm mb-3">
            Stay Tuned
          </span>
          <h3 className="ml-6 text-gray-800 font-semibold text-lg sm:text-xl mb-1">
            H&R Summit
          </h3>
          <p className="ml-6 text-gray-700 text-base sm:text-lg flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4" /> March 2026
          </p>
        </div>

      </div>
    </section>
  )
}
