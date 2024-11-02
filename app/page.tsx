import { ImageUploader } from '@/components/image-uploader';
import { LegoShowcase } from '@/components/lego-showcase';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            LEGO Headshots AI
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Transform your photos into charming LEGO minifigure portraits using advanced AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ImageUploader />
          <LegoShowcase />
        </div>
      </div>
    </main>
  );
}