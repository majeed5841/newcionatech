import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      link: '/services/web-development',
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      link: '/services/ui-ux-design',
    },
    {
      id: 3,
      title: 'Consulting',
      description: 'Technical expertise and strategic guidance',
      link: '/services/consulting',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600">Comprehensive solutions for your digital needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-end">
                <Link to={service.link} className="w-full">
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}