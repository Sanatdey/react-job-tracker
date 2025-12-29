const Header = ({setMode}: any) => {
    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600" onClick={() => window.location.href = "./"}>
          JobTracker
        </h1>

        <nav className="flex gap-6 text-gray-600">
          <a className="hover:text-blue-600 cursor-pointer" onClick={() => {
            setMode("JOBS")
          }}>Jobs</a>
          <a className="hover:text-blue-600 cursor-pointer" onClick={() => {
            setMode("MYAPPS")
          }}>Applications</a>
          <a className="hover:text-blue-600 cursor-pointer" onClick={() => {
            setMode("REQ")
          }}>Recruiters</a>
        </nav>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </header>);
};

export default Header;