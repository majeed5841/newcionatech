import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'

export function UiUxDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="text-blue-600 hover:underline mb-6 block">
          ← Back to Services
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">UI/UX Design</h1>
        <p className="text-xl text-slate-600 mb-8">Beautiful and intuitive user interfaces</p>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What We Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>User Research & Analysis</li>
                <li>Wireframing & Prototyping</li>
                <li>Visual Design</li>
                <li>Accessibility (WCAG)</li>
                <li>Design Systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Design Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Testing'].map((tool) => (
                  <span key={tool} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {tool}
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