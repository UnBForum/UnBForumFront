import { ColorMode, NativeBaseProvider, StorageManager } from 'native-base'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'

export function App() {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        const mode = localStorage.getItem('@UnBForum:theme')
        return mode === 'dark' ? 'dark' : 'light'
      } catch (error) {
        console.log(error)
        return 'light'
      }
    },
    set: async (mode: ColorMode) => {
      try {
        localStorage.setItem('@UnBForum:theme', mode!)
      } catch (error) {
        console.log(error)
      }
    },
  }

  return (
    <NativeBaseProvider colorModeManager={colorModeManager}>
      <ThemeProvider theme={defaultTheme}>
        <HashRouter>
          <Router />
        </HashRouter>
        <GlobalStyle />
      </ThemeProvider>
    </NativeBaseProvider>
  )
}
