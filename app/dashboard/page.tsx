'use client'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome back, <span className="font-semibold">Demo User</span>!
        </p>

        <button
          onClick={() => alert('Logged out!')}
          className="mt-6 w-full rounded-md bg-red-600 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}