

const Feature = () => {
    const features = [
        {
        title: "Track Status",
        desc: "Monitor application stages like Applied, Interview, Offer, Rejected.",
        },
        {
        title: "Search & Filter",
        desc: "Quickly find applications using filters and search.",
        },
        {
        title: "Local Storage",
        desc: "Your data stays safe in your browser — no login needed.",
        },
    ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">
                {f.title}
              </h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
    
}

export default Feature;