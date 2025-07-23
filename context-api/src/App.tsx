import React, { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './hooks/ThemeContext'

const App = () => {

  const [theme, setTheme] = useState('light')

  const toggleTheme = (themeSetting:any) => {
    if(themeSetting) setTheme('dark')
    else setTheme('light')
  }

  useEffect(()=>{
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(theme)
  },[theme])

  return (
    <ThemeProvider value={{theme, toggleTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
        </div>
    </ThemeProvider>

  )
}

export default App
