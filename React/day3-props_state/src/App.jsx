import React from 'react'
import Contacts from './components/Contacts'
import something, {OneF, Two} from './test'

const App = () => {
  something(); // This is default export

  OneF(); // this is named export and will give error as it should be named same as file name
  return (
    <div>
      <Contacts />
    </div>
  )
}

export default App