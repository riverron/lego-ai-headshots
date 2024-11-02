"use client";

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    maxFiles: 1,
    multiple: false,
  });

  const handleConvert = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast({
      title: "Coming Soon!",
      description: "The AI conversion feature will be available soon.",
    });
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {image ? (
            <div className="space-y-4">
              <img
                src={image}
                alt="Preview"
                className="max-w-full h-auto mx-auto rounded-lg"
              />
              <p className="text-sm text-gray-500">
                Click or drag to choose a different image
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="w-12 h-12 mx-auto text-gray-400" />
              <div>
                <p className="text-lg font-medium">Drop your photo here</p>
                <p className="text-sm text-gray-500">
                  or click to select a file
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>

      <Button
        className="w-full"
        size="lg"
        onClick={handleConvert}
        disabled={!image || isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Converting...
          </>
        ) : (
          <>
            <ImageIcon className="mr-2 h-4 w-4" />
            Convert to LEGO
          </>
        )}
      </Button>
    </div>
  );
}