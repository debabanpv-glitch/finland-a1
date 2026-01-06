import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Numbers from './pages/Numbers'

// Placeholder components for other pages
const ComingSoon = ({ title }: { title: string }) => (
  <div className="text-center py-12">
    <span className="text-6xl mb-4 block">🚧</span>
    <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
    <p className="text-gray-600">Nội dung đang được phát triển...</p>
  </div>
)

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/time" element={<ComingSoon title="Thời gian" />} />
        <Route path="/questions" element={<ComingSoon title="Từ hỏi" />} />
        <Route path="/adjectives" element={<ComingSoon title="Tính từ" />} />
        <Route path="/verbs/v1" element={<ComingSoon title="Động từ loại 1" />} />
        <Route path="/verbs/v2" element={<ComingSoon title="Động từ loại 2" />} />
        <Route path="/verbs/v3" element={<ComingSoon title="Động từ loại 3" />} />
        <Route path="/verbs/v4" element={<ComingSoon title="Động từ loại 4" />} />
        <Route path="/verbs/v5" element={<ComingSoon title="Động từ loại 5" />} />
        <Route path="/verbs/v6" element={<ComingSoon title="Động từ loại 6" />} />
        <Route path="/verbs/kpt" element={<ComingSoon title="KPT - Biến âm" />} />
        <Route path="/grammar/location" element={<ComingSoon title="Địa điểm" />} />
        <Route path="/grammar/possession" element={<ComingSoon title="Sở hữu" />} />
        <Route path="/grammar/partitive" element={<ComingSoon title="Partitive" />} />
        <Route path="/grammar/plural" element={<ComingSoon title="Số nhiều" />} />
      </Routes>
    </Layout>
  )
}
