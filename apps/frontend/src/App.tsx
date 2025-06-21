import { Button } from '@repo/ui'
import { useState } from 'react'
import sun from './assets/sun.svg'
import moon from './assets/moon.svg'
import { SunIcon } from './components/assets/sun-icon'
import { MoonIcon } from './components/assets/moon-icon'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`min-h-screen bg-background p-8 ${isDarkMode ? 'dark' : ''}`}>
      <Button onClick={() => setIsDarkMode(!isDarkMode)}>
      {!isDarkMode ? (
          <SunIcon className="w-5 h-5 text-yellow-500" />
        ) : (
          <MoonIcon className="w-5 h-5 text-gray-700" />
        )}
      </Button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Store Frontend
        </h1>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Store frontend app is using components from @repo/ui
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">🚀</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App