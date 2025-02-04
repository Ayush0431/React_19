import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import Netflix from './components/Netflix.jsx'
import { SeriesCard } from './components/SeriesCard.jsx'
import Profile from './components/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Profile/> */}
  </StrictMode>,
)
