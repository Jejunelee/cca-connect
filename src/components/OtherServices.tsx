export default function OtherServices() {
    return (
      <section 
        className="min-h-screen py-16 sm:py-32" 
        style={{ 
          background: "linear-gradient(to bottom, #afcfe4 40%, #f4f4f4 40%)",
          fontFamily: "var(--font-jost), sans-serif"
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-center text-black text-2xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Pillar 1 */}
            <div className="text-center group cursor-pointer">
              <div className="relative max-w-xs mx-auto transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-full h-full bg-black transition-all duration-500 group-hover:bg-blue-600 group-hover:shadow-2xl group-hover:shadow-blue-500/25 group-hover:-translate-y-1 group-hover:translate-x-1"></div>
                <div className="relative overflow-hidden">
                  <img
                    src="/otherservices/5.png"
                    alt="Food & Bar Menu Development"
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  </div>
                </div>
              </div>
              <p className="text-gray-800 font-medium text-lg sm:text-xl mt-6 sm:mt-8 px-2 transition-all duration-300 group-hover:text-blue-600 group-hover:font-semibold">PR & Marketing</p>
            </div>
  
            {/* Pillar 2 */}
            <div className="text-center group cursor-pointer">
              <div className="relative max-w-xs mx-auto transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-full h-full bg-black transition-all duration-500 group-hover:bg-green-600 group-hover:shadow-2xl group-hover:shadow-green-500/25 group-hover:-translate-y-1 group-hover:translate-x-1"></div>
                <div className="relative overflow-hidden">
                  <img
                    src="/otherservices/6.png"
                    alt="Kitchen & Bakery Training"
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  </div>
                </div>
              </div>
              <p className="text-gray-800 font-medium text-lg sm:text-xl mt-6 sm:mt-8 px-2 transition-all duration-300 group-hover:text-green-600 group-hover:font-semibold">Legal & Accounting</p>
            </div>
  
            {/* Pillar 3 */}
            <div className="text-center group cursor-pointer">
              <div className="relative max-w-xs mx-auto transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-full h-full bg-black transition-all duration-500 group-hover:bg-purple-600 group-hover:shadow-2xl group-hover:shadow-purple-500/25 group-hover:-translate-y-1 group-hover:translate-x-1"></div>
                <div className="relative overflow-hidden">
                  <img
                    src="/otherservices/7.png"
                    alt="Culinary, Hospitality, and Management Training Development"
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  </div>
                </div>
              </div>
              <p className="text-gray-800 font-medium text-lg sm:text-xl mt-6 sm:mt-8 px-2 transition-all duration-300 group-hover:text-purple-600 group-hover:font-semibold">Talent Acquisition</p>
            </div>
  
            {/* Pillar 4 */}
            <div className="text-center group cursor-pointer">
              <div className="relative max-w-xs mx-auto transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-full h-full bg-black transition-all duration-500 group-hover:bg-orange-600 group-hover:shadow-2xl group-hover:shadow-orange-500/25 group-hover:-translate-y-1 group-hover:translate-x-1"></div>
                <div className="relative overflow-hidden">
                  <img
                    src="/otherservices/8.png"
                    alt="Service Design"
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  </div>
                </div>
              </div>
              <p className="text-gray-800 font-medium text-lg sm:text-xl mt-6 sm:mt-8 px-2 transition-all duration-300 group-hover:text-orange-600 group-hover:font-semibold">Packaging & Distribution</p>
            </div>
  
          </div>
        </div>
      </section>
    )
  }