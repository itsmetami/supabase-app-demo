import { login, signup } from '@/app/auth/actions'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string; message?: string }
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Welcome Back
        </h1>

        {searchParams.error && (
          <p className="mb-4 text-center text-sm text-red-600">
            {searchParams.error}
          </p>
        )}
        {searchParams.message && (
          <p className="mb-4 text-center text-sm text-green-600">
            {searchParams.message}
          </p>
        )}

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="mt-2 flex gap-2">
            <button
              formAction={login}
              className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Log In
            </button>
            <button
              formAction={signup}
              className="w-full rounded-md border border-gray-300 bg-white py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}