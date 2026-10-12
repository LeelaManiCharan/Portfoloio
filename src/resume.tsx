import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Resume } from './components/Resume'
import './index.css'
import './resume.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
)
