import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'

export function Consulting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="text-blue-600 hover:underline mb-6 block">
          ← Back to Services
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Consulting</h1>
        <p className="text-xl text-slate-600 mb-8">Technical expertise and strategic guidance</p>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What We Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Architecture & Planning</li>
                <li>Code Review & Optimization</li>
                <li>Best Practices Implementation</li>
                <li>Team Training & Mentoring</li>
                <li>Performance Audits</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expertise Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Architecture', 'Performance', 'Security', 'Scalability', 'DevOps'].map((area) => (
                  <span key={area} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {area}
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