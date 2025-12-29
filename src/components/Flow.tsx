export default function Flow() {
    const steps = [
    { step: "01", title: "Add Job", desc: "Enter company, role, and location" },
    { step: "02", title: "Track Status", desc: "Update interview and offer stages" },
    { step: "03", title: "Filter & Search", desc: "Find applications instantly" },
    { step: "04", title: "Stay Organized", desc: "All jobs in one dashboard" },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-14">
          How It Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white rounded-xl p-6 shadow text-center"
            >
              <div className="text-blue-600 text-3xl font-bold mb-4">
                {s.step}
              </div>
              <h4 className="text-lg font-semibold mb-2">
                {s.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}