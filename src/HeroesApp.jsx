import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (
    <AuthProvider value={{}}>
      <AppRouter/>
    </AuthProvider>
  )
}
