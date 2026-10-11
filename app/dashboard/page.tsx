import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { logout } from '@/app/auth/actions'

// Force Next.js to render this page dynamically on every request
export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session_user')

  if (!session) {
    redirect('/login')
  }

  const user = JSON.parse(session.value)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome back, <span className="font-semibold">{user.name}</span>!
        </p>

        <form action={logout} className="mt-6">
          <button
            type="submit"
            className="w-full rounded-md bg-red-600 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Log Out
          </button>
        </form>
      </div>
    </div>
  )
}