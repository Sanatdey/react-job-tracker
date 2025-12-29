export default function Footer() {
        return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <p>
          © {new Date().getFullYear()} JobTracker. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a className="hover:text-white cursor-pointer">Privacy</a>
          <a className="hover:text-white cursor-pointer">Terms</a>
          <a className="hover:text-white cursor-pointer">Support</a>
        </div>
      </div>
    </footer>
  );
  
}