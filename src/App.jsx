
import { useState } from 'react'
import './App.css'
import BookCourses from './assets/Courses/BookCourses'
import Courses from './assets/Courses/Courses'
import Header from './assets/Header'

function App() {
  const [cards, setCards] = useState([]);
  const handleCard =card=>{
      const newCard = [...cards,card]
      setCards(newCard);
  }


  return (
    <div className='w-[90%] mx-auto' >
      <header>
        <Header />
      </header>
      <section className='flex mx-auto gap-4'>
          <div className='w-2/3'>
            <Courses
            handleCard={handleCard}
            ></Courses>
          </div>

          {/* Course Sclection Part */}
          <div className='w-1/3 '>
              <BookCourses
              cards={cards}
              ></BookCourses>
          </div>
      </section>

    </div>
  )
}

export default App
