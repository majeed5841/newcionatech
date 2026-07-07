import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'

export function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="text-blue-600 hover:underline mb-6 block">
          ← Back to Services
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Web Development</h1>
        <p className="text-xl text-slate-600 mb-8">Custom web applications built with modern technologies</p>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What We Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>React & TypeScript Development</li>
                <li>Full Stack Applications</li>
                <li>Performance Optimization</li>
                <li>Responsive Design</li>
                <li>API Integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'TanStack'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button className="w-full md:w-auto" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}