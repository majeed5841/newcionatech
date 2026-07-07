import { createFileRoute } from '@tanstack/react-router'
import { Consulting } from '../../pages/services/Consulting'

export const Route = createFileRoute('/services/consulting')({
  component: Consulting,
})