export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-[#f6f4f4]"
      style={{ fontFamily: 'var(--font-jost), sans-serif' }} // Jost applied to whole section
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE — VIDEO AND HEADING */}
        <div>
          <h2
            className="text-5xl font-semibold mb-3 text-gray-900"
            style={{ fontFamily: 'var(--font-jost), sans-serif' }}
          >
            How It Works for You
          </h2>

          <div className="w-full md:w-[510px] h-[330px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/qc3-uDobJCw"
              title="How It Works — Culinary Connect"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE — TEXT CONTENT */}
        <div>
          <ul className="space-y-6 text-2xl text-gray-800">
            <li className="flex gap-4 items-start">
              <img src="/icons/1.png" alt="Experts" className="w-14 h-14 mt-1" />
              <ul
                className="list-disc list-inside space-y-1 text-gray-700 ml-2"
                style={{ fontFamily: 'var(--font-jost), sans-serif' }}
              >
                <p>We have invited experts per field to be our partner experts.</p>
              </ul>
            </li>

            <li className="flex gap-4 items-start">
              <img src="/icons/2.png" alt="Projects" className="w-14 h-14 mt-1" />
              <ul
                className="list-disc list-inside space-y-1 text-gray-700 ml-2"
                style={{ fontFamily: 'var(--font-jost), sans-serif' }}
              >
                <p>We will build projects and proposals hand‑in‑hand with our clients and partners.</p>
              </ul>
            </li>

            <li className="flex gap-4 items-start">
              <img src="/icons/3.png" alt="Matching" className="w-14 h-14 mt-1" />
              <ul
                className="list-disc list-inside space-y-1 text-gray-700 ml-2"
                style={{ fontFamily: 'var(--font-jost), sans-serif' }}
              >
                <p>Culinary Connect will match project requests and our partners' expertise.</p>
              </ul>
            </li>

            <li className="flex gap-4 items-start">
              <img src="/icons/4.png" alt="Management" className="w-12 h-12 mt-8" />
              <div style={{ fontFamily: 'var(--font-jost), sans-serif' }}>
                <p className="mb-1 ml-2">Culinary Connect can handle:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <p>Screening Project Requirements, Proposal Preparation, Contract Negotiation, Payments Security, Project Management</p>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
