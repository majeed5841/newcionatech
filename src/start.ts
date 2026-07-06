import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Router Instance create karein
const router = createTanStackRouter({
  routeTree,
})

// Register type for type-safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Yeh function TanStack Start ki hydration dhoondti hai
export function getRouter() {
  return router;
}