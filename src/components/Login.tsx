const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Login
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Welcome back! Please sign in to continue.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
                         focus:border-blue-500 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
                         focus:border-blue-500 outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg 
                       hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Extra Actions */}
        <div className="flex justify-between text-sm text-gray-500 mt-6">
          <button className="hover:text-blue-600">
            Forgot password?
          </button>
          <button className="hover:text-blue-600">
            Create account
          </button>
        </div>
      </div>
    </div>
    );
}

export default Login;