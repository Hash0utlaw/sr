import { Shield, Wind, Zap } from 'lucide-react'

export function IKODynastyShingles() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-orange-500 mb-4">IKO Dynasty Shingles</h3>
      <p className="text-orange-300 mb-4">
        We proudly use IKO Dynasty shingles, known for their superior performance and durability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <Shield className="w-8 h-8 text-orange-500 mr-2" />
          <span className="text-orange-300">Class 3 Impact Resistance</span>
        </div>
        <div className="flex items-center">
          <Wind className="w-8 h-8 text-orange-500 mr-2" />
          <span className="text-orange-300">High Wind Resistance</span>
        </div>
        <div className="flex items-center">
          <Zap className="w-8 h-8 text-orange-500 mr-2" />
          <span className="text-orange-300">Algae Resistant</span>
        </div>
      </div>
    </div>
  )
}

