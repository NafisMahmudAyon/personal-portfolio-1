'use client'
import { Switch } from '@/components/aspect-ui'
import { UseThemeSwitcher } from '@/components/UseThemeSwitcher'
import { Moon, Sun } from "lucide-react"
import React from 'react'
import './example.css'

const layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = UseThemeSwitcher()
  const isSwitched = theme === 'dark' ? true : false
  const handleSwitchChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (

    <>

      {children}
      <Switch checked={isSwitched}
        onChange={handleSwitchChange}
        activeSwitchIcon={<Moon className='text-primary-200' />}
        deactiveSwitchIcon={<Sun className='text-primary-900' />}
        switchIconEnabled={true}
        size='lg'
        className='fixed bottom-6 right-6 z-50'
        activeClassName='bg-primary-200'
        deactiveClassName='bg-primary-900'
        activeSwitchClassName='bg-primary-900'
        deactiveSwitchClassName='bg-primary-200'
      />

    </>
  )
}

export default layout