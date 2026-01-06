import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavItem {
  path: string
  label: string
  icon: string
}

interface NavGroup {
  title: string
  icon: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    title: 'Cơ bản',
    icon: '🔢',
    items: [
      { path: '/numbers', label: 'Số đếm', icon: '🔢' },
      { path: '/time', label: 'Thời gian', icon: '🕐' },
      { path: '/questions', label: 'Từ hỏi', icon: '❓' },
      { path: '/adjectives', label: 'Tính từ', icon: '📝' },
    ],
  },
  {
    title: 'Động từ',
    icon: '📖',
    items: [
      { path: '/verbs/v1', label: 'V1', icon: '1️⃣' },
      { path: '/verbs/v2', label: 'V2', icon: '2️⃣' },
      { path: '/verbs/v3', label: 'V3', icon: '3️⃣' },
      { path: '/verbs/v4', label: 'V4', icon: '4️⃣' },
      { path: '/verbs/v5', label: 'V5', icon: '5️⃣' },
      { path: '/verbs/v6', label: 'V6', icon: '6️⃣' },
      { path: '/verbs/kpt', label: 'KPT', icon: '🔄' },
    ],
  },
  {
    title: 'Ngữ pháp',
    icon: '📍',
    items: [
      { path: '/grammar/location', label: 'Địa điểm', icon: '📍' },
      { path: '/grammar/possession', label: 'Sở hữu', icon: '👤' },
      { path: '/grammar/partitive', label: 'Partitive', icon: '🔹' },
      { path: '/grammar/plural', label: 'Số nhiều', icon: '👥' },
    ],
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="gradient-bg text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-3xl">🇫🇮</span>
              <div>
                <h1 className="text-xl font-bold">Học Tiếng Phần Lan</h1>
                <p className="text-sm opacity-80">Suomen kieli</p>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar Navigation - Desktop */}
        <nav className="hidden md:block w-64 bg-white shadow-lg min-h-screen p-4">
          {navGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                <span className="mr-2">{group.icon}</span>
                {group.title}
              </h3>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
            <nav
              className="w-64 bg-white h-full overflow-y-auto p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 pb-4 border-b">
                <h2 className="text-lg font-bold gradient-bg bg-clip-text text-transparent">Menu</h2>
              </div>
              {navGroups.map((group) => (
                <div key={group.title} className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                    <span className="mr-2">{group.icon}</span>
                    {group.title}
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                            location.pathname === item.path
                              ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="mr-2">{item.icon}</span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
