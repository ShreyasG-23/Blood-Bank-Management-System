import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Donate Blood,
                <span className="text-red-600"> Save Lives ❤️</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                Connect blood donors, hospitals, and patients through one
                powerful platform. Help save lives by donating blood when
                someone needs it the most.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button onClick={() => navigate("/register")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition">
                  Become a Donor
                </button>

                <button onClick={() => navigate("/request-blood")}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition">
                 Request Blood
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=900"
                alt="Blood Donation"
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h2 className="text-5xl font-bold text-red-600">500+</h2>
              <p className="mt-3 text-gray-600">Active Donors</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h2 className="text-5xl font-bold text-red-600">1200+</h2>
              <p className="mt-3 text-gray-600">Lives Saved</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h2 className="text-5xl font-bold text-red-600">50+</h2>
              <p className="mt-3 text-gray-600">Partner Hospitals</p>
            </div>

          </div>

          {/* Features Section */}
          <div className="mt-28">

            <h2 className="text-4xl font-bold text-center mb-4">
              Why Choose Our Platform?
            </h2>

            <p className="text-center text-gray-600 mb-12">
              Fast, secure and reliable blood donation management.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4">🩸</div>

                <h3 className="text-2xl font-bold mb-3">
                  Instant Blood Requests
                </h3>

                <p className="text-gray-600">
                  Create emergency blood requests and notify donors instantly.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4">🏥</div>

                <h3 className="text-2xl font-bold mb-3">
                  Hospital Integration
                </h3>

                <p className="text-gray-600">
                  Hospitals can manage requests and track donor availability.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4">🔍</div>

                <h3 className="text-2xl font-bold mb-3">
                  Smart Donor Search
                </h3>

                <p className="text-gray-600">
                  Find matching donors based on blood group and location.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4">🔐</div>

                <h3 className="text-2xl font-bold mb-3">
                  Secure Authentication
                </h3>

                <p className="text-gray-600">
                  JWT-based authentication keeps your account safe and secure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4">⚡</div>

                <h3 className="text-2xl font-bold mb-3">
                  Real-Time Updates
                </h3>

                <p className="text-gray-600">
                  Get notified instantly when blood requests are created.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4">❤️</div>

                <h3 className="text-2xl font-bold mb-3">
                  Save Lives
                </h3>

                <p className="text-gray-600">
                  Every blood donation can help save multiple lives.
                </p>
              </div>

            </div>
          </div>

          {/* Call To Action */}
          <div className="mt-28 bg-red-600 text-white rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold mb-4">
              Become a Hero Today ❤️
            </h2>

            <p className="text-lg mb-8">
              Join our donor community and help save lives.
            </p>

            <button onClick={() => navigate("/register")}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
                Register Now
            </button>

          </div>

        </section>

      </div>
    </>
  );
}

export default Home;