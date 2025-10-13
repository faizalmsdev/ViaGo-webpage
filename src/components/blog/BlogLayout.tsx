import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

interface BlogLayoutProps {
  title: string;
  excerpt: string;
  readTime: string;
  publishDate: string;
  category: string;
  author?: string;
  children: ReactNode;
}

export function BlogLayout({ 
  title, 
  excerpt, 
  readTime, 
  publishDate, 
  category, 
  author = "ViaGo Team",
  children 
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-900 pt-20">
      {/* Blog Header */}
      <section className="py-12 bg-zinc-800">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline"
            className="mb-6 text-[#ffbf00] border-[#ffbf00] hover:bg-[#ffbf00] hover:text-black"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#ffbf00] text-black px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-zinc-300 mb-8">
              {excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-800 border-zinc-700 p-8">
              <div className="prose prose-lg prose-invert max-w-none">
                {children}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience ViaGo?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Download Chennai's best bike ride-hailing app with zero commission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#ffbf00] hover:bg-[#ffd700] text-black font-semibold"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.viagocab.viago&hl=en_IN", "_blank")}
            >
              Download ViaGo App
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-[#ffbf00] border-[#ffbf00] hover:bg-[#ffbf00] hover:text-black"
              onClick={() => window.location.href = '/driver-signup'}
            >
              Become a Driver
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}