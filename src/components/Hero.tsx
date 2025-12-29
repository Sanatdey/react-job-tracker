export default function Hero({setMode}: any) {
    return (
        <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Track Your Job Applications  
          <span className="text-blue-600"> Effortlessly</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Stay organized, monitor progress, and never lose track of your job
          applications again.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={() => {
            setMode("MYAPPS");
          }}>
            Start Tracking
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"onClick={() => {
            setMode("JOBS");
          }}>
            Apply Now
          </button>
        </div>
      </div>
    </section>
    );
}