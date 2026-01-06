import { Link } from 'react-router-dom'

const quickLinks = [
  { path: '/numbers', icon: '🔢', title: 'Số đếm', desc: '0-1000+' },
  { path: '/time', icon: '🕐', title: 'Thời gian', desc: 'Giờ, ngày, tháng' },
  { path: '/questions', icon: '❓', title: 'Từ hỏi', desc: 'Mikä, Missä, ...' },
  { path: '/adjectives', icon: '📝', title: 'Tính từ', desc: 'Hyvä, iso, ...' },
]

const verbLinks = [
  { path: '/verbs/v1', label: 'V1', example: 'puhua' },
  { path: '/verbs/v2', label: 'V2', example: 'syödä' },
  { path: '/verbs/v3', label: 'V3', example: 'tulla' },
  { path: '/verbs/v4', label: 'V4', example: 'haluta' },
  { path: '/verbs/v5', label: 'V5', example: 'tarvita' },
  { path: '/verbs/v6', label: 'V6', example: 'rohjeta' },
]

export default function Home() {
  return (
    <div>
      {/* Welcome Section */}
      <div className="card mb-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold mb-2">🇫🇮 Tervetuloa!</h1>
          <p className="text-xl opacity-90">Chào mừng đến với ứng dụng học tiếng Phần Lan</p>
          <p className="mt-4 opacity-80">Khám phá từ vựng, ngữ pháp và động từ tiếng Phần Lan</p>
        </div>
      </div>

      {/* Quick Start */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🚀 Bắt đầu nhanh</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="card hover:scale-105 transform transition-all text-center"
            >
              <span className="text-4xl mb-2 block">{link.icon}</span>
              <h3 className="font-bold text-gray-800">{link.title}</h3>
              <p className="text-sm text-gray-500">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Verb Types */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 6 Loại động từ</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {verbLinks.map((verb) => (
            <Link
              key={verb.path}
              to={verb.path}
              className="card hover:scale-105 transform transition-all text-center py-4"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                {verb.label}
              </span>
              <p className="text-xs text-gray-500 mt-1">{verb.example}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Grammar Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📍 Ngữ pháp</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/grammar/location" className="card hover:scale-105 transform transition-all">
            <span className="text-3xl mb-2 block">📍</span>
            <h3 className="font-bold text-gray-800">Địa điểm</h3>
            <p className="text-xs text-gray-500">-ssa/-ssä, -sta/-stä</p>
          </Link>
          <Link to="/grammar/possession" className="card hover:scale-105 transform transition-all">
            <span className="text-3xl mb-2 block">👤</span>
            <h3 className="font-bold text-gray-800">Sở hữu</h3>
            <p className="text-xs text-gray-500">Minulla on...</p>
          </Link>
          <Link to="/grammar/partitive" className="card hover:scale-105 transform transition-all">
            <span className="text-3xl mb-2 block">🔹</span>
            <h3 className="font-bold text-gray-800">Partitive</h3>
            <p className="text-xs text-gray-500">-a/-ä, -ta/-tä</p>
          </Link>
          <Link to="/grammar/plural" className="card hover:scale-105 transform transition-all">
            <span className="text-3xl mb-2 block">👥</span>
            <h3 className="font-bold text-gray-800">Số nhiều</h3>
            <p className="text-xs text-gray-500">-t, -i-</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
