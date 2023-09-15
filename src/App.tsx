import './App.css'
import { Player } from './components/Player'
import { Card } from './components/Card'
import { Sidebar } from './components/Sidebar'

import cover1 from './assets/mettalica.jpg'
import cover2 from './assets/guns.jpg'
import cover3 from './assets/queen.jpg'
import cover4 from './assets/iron.jpg'


function App() {
  return (
    <main>
      <Sidebar />
      <Player />
      <div className='cards'>
        <span>Previous</span>
        <Card music='Enter Sandman' artist='Metallica' cover={cover1}/>
        <span className='coming-next'>Coming up next</span>
        <Card music='November Rain' artist="Guns N' Roses" cover={cover2}/>
        <Card music='Bohemian Rhapsody' artist='Queen' cover={cover3}/>
        <Card music='The Trooper' artist='Iron Maiden' cover={cover4}/>
      </div>
    </main>
  )
}

export default App