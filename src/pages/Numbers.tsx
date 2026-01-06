import { useState } from 'react'
import numbersData from '../data/numbers.json'

interface NumberItem {
  finnish: string
  vietnamese: string
}

interface Section {
  title: string
  items: NumberItem[]
}

export default function Numbers() {
  const [activeSection, setActiveSection] = useState<number>(0)
  const [showVietnamese, setShowVietnamese] = useState<{ [key: string]: boolean }>({})

  const toggleVietnamese = (key: string) => {
    setShowVietnamese((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">🔢 {numbersData.title}</h1>
        <p className="text-gray-600">{numbersData.description}</p>
      </div>

      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {numbersData.sections.map((section: Section, index: number) => (
          <button
            key={section.title}
            onClick={() => setActiveSection(index)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeSection === index
                ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Number Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {numbersData.sections[activeSection].items.map((item: NumberItem, index: number) => {
          const key = `${activeSection}-${index}`
          return (
            <div
              key={key}
              onClick={() => toggleVietnamese(key)}
              className="card cursor-pointer hover:scale-105 transform transition-all"
            >
              <div className="text-center">
                <p className="text-lg font-bold text-[#667eea] mb-1">{item.finnish}</p>
                <p
                  className={`text-sm text-gray-600 transition-opacity ${
                    showVietnamese[key] ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.vietnamese}
                </p>
                {!showVietnamese[key] && (
                  <p className="text-xs text-gray-400">Nhấn để xem nghĩa</p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Examples Section */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📝 Ví dụ ghép số</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {numbersData.examples.map((example: NumberItem, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 rounded-lg p-4"
            >
              <p className="font-bold text-[#764ba2]">{example.finnish}</p>
              <p className="text-gray-600">= {example.vietnamese}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
        <h3 className="font-bold text-yellow-800 mb-2">💡 Mẹo nhớ</h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Số 11-19: số đơn vị + <strong>toista</strong> (ví dụ: yksi + toista = yksitoista)</li>
          <li>• Số chục: số đơn vị + <strong>kymmentä</strong> (ví dụ: kaksi + kymmentä = kaksikymmentä)</li>
          <li>• Ghép số: số chục + số đơn vị viết liền (ví dụ: kaksikymmentä + yksi = kaksikymmentäyksi)</li>
        </ul>
      </div>
    </div>
  )
}
