import { createFileRoute } from '@tanstack/react-router'
import { UiUxDesign } from '../../pages/services/UiUxDesign'

export const Route = createFileRoute('/services/ui-ux-design')({
  component: UiUxDesign,
})