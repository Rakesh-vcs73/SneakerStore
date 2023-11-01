//Data Driven React
/*
Props - Create reusable and composable react components
Create react components from array of data
*/
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

import "./style.css"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(<App/>)