import { scan } from "react-scan"; // must be imported before React and React DOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FxTiles2 from './FxTiles2.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    {/* <Fxtiles/> */}
    <FxTiles2/>
  </StrictMode>,
)
