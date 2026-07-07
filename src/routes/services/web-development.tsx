import { createFileRoute } from '@tanstack/react-router'
import { WebDevelopment } from '../../pages/services/WebDevelopment'

export const Route = createFileRoute('/services/web-development')({
  component: WebDevelopment,
})