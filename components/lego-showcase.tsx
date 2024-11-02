import { Card } from '@/components/ui/card';
import Image from 'next/image';

const EXAMPLE_IMAGES = [
  {
    before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?w=400&h=400&fit=crop',
  },
  {
    before: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1558679928-be7e02981a07?w=400&h=400&fit=crop',
  },
];

export function LegoShowcase() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Example Transformations</h2>
        <div className="space-y-8">
          {EXAMPLE_IMAGES.map((example, index) => (
            <div key={index} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={example.before}
                      alt="Original photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-500">Original</p>
                </div>
                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={example.after}
                      alt="LEGO conversion"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-500">LEGO Version</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}