
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/Button"

function DashboardLayout({ children }) {
  const location = useLocation()
  const pathname = location.pathname
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState(3)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: "🏠" },
    { name: "My Articles", href: "/dashboard/my-articles", icon: "📄" },
    { name: "Create Article", href: "/dashboard/create-article", icon: "✏️" },
    { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 md:gap-4">
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
            <Link to="/" className="flex items-center gap-2 font-bold">
              <span className="text-blue-600 text-xl hidden md:inline-block">ArticleFeed</span>
              <span className="text-blue-600 text-xl md:hidden">AF</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-md hover:bg-gray-100">
              🔔
              {notifications > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                  {notifications}
                </span>
              )}
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">JD</div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-64 bg-white p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center gap-2 font-bold">
                <span className="text-blue-600 text-xl">ArticleFeed</span>
              </Link>
              <button className="p-1" onClick={() => setIsMobileMenuOpen(false)}>
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === item.href ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden w-64 border-r bg-gray-50 md:block">
          <nav className="flex flex-col gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === item.href ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                }`}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <div className="mt-auto pt-4">
              <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600">
                🚪 Logout
              </Button>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

