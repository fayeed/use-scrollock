import React from 'react'

import { useMyHook } from 'use-scrollock'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
