'use client'

import './style.scss';

import Image from 'next/image';
import { useEffect, useState } from 'react';


const width = 8;

const candies = [
  'circle',
  'star',
  'triangle'
]

export default function GameBoard() {

  const [currentCandyArrangement, setCurrentCandyArrangement] = useState<string[]>([])
  const [candyBeingDragged, setCandyBeingDragged] = useState<any>(null)
  const [candyBeingReplaced, setCandyBeingReplaced] = useState<any>(null)

  function createBoard() {
    const randomCandyArrangement: string[] = []
    for (let i = 0; i < width * width; i++) {
      let randomCandy = candies[Math.floor(Math.random() * candies.length)]
      randomCandyArrangement.push(randomCandy)
    }
    setCurrentCandyArrangement(randomCandyArrangement)
  }

  // Functions to check for rows of matching candies

  function checkForRowOfThree() {
    for (let i = 0; i <= 64; i++) {
      const rowOfThree = [i, i + 1, i + 2]
      const decidedCandy = currentCandyArrangement[i]
      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
      const isBlank = currentCandyArrangement[i] === 'blank'

      if (notValid.includes(i)) continue

      if (rowOfThree.every(candy => currentCandyArrangement[candy] === decidedCandy && !isBlank)) {
        rowOfThree.forEach(candy => currentCandyArrangement[candy] = 'blank')
        return true
      }
    }
  }

  function checkForRowOfFour() {
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3]
      const decidedCandy = currentCandyArrangement[i]
      const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]
      const isBlank = currentCandyArrangement[i] === 'blank'

      if (notValid.includes(i)) continue

      if (rowOfFour.every(candy => currentCandyArrangement[candy] === decidedCandy && !isBlank)) {
        rowOfFour.forEach(candy => currentCandyArrangement[candy] = 'blank')
        return true
      }
    }
  }

  // Functions to check for columns of matching candies

  function checkForColumnOfThree() {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2]
      const decidedCandy = currentCandyArrangement[i]
      const isBlank = currentCandyArrangement[i] === 'blank'

      if (columnOfThree.every(candy => currentCandyArrangement[candy] === decidedCandy && !isBlank)) {
        columnOfThree.forEach(candy => currentCandyArrangement[candy] = 'blank')
        return true
      }
    }
  }

  function checkForColumnOfFour() {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
      const decidedCandy = currentCandyArrangement[i]
      const isBlank = currentCandyArrangement[i] === 'blank'

      if (columnOfFour.every(candy => currentCandyArrangement[candy] === decidedCandy && !isBlank)) {
        columnOfFour.forEach(candy => currentCandyArrangement[candy] = 'blank')
        return true
      }
    }
  }

  function moveIntoSquareBelow() {
    for (let i = 0; i <= 55; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
      const isFirstRow = firstRow.includes(i)

      if (isFirstRow && currentCandyArrangement[i] === 'blank') {
        let randomNumber = Math.floor(Math.random() * candies.length)
        currentCandyArrangement[i] = candies[randomNumber]
      }

      if ((currentCandyArrangement[i + width]) === 'blank') {
        currentCandyArrangement[i + width] = currentCandyArrangement[i]
        currentCandyArrangement[i] = 'blank'
      }
    }
  }

  // Functions to deal with dragging candy

  function dragStart(e: any) {
    setCandyBeingDragged(e.target)
  }

  function dragDrop(e: any) {
    setCandyBeingReplaced(e.target)
  }

  function dragEnd() {
    const candyBeingDraggedId = parseInt(candyBeingDragged.getAttribute('data-id'))
    const candyBeingReplacedId = parseInt(candyBeingReplaced.getAttribute('data-id'))

    currentCandyArrangement[candyBeingReplacedId] = candyBeingDragged.getAttribute('alt')
    currentCandyArrangement[candyBeingDraggedId] = candyBeingReplaced.getAttribute('alt')

    const validMoves = [
      candyBeingDraggedId - 1,
      candyBeingDraggedId - width,
      candyBeingDraggedId + 1,
      candyBeingDraggedId + width
    ]

    const validMove = validMoves.includes(candyBeingReplacedId)

    const isAColumnOfFour = checkForColumnOfFour()
    const isARowOfFour = checkForRowOfFour()
    const isAColumnOfThree = checkForColumnOfThree()
    const isARowOfThree = checkForRowOfThree()

    if (candyBeingReplacedId && validMove && (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {
      setCandyBeingDragged(null)
      setCandyBeingReplaced(null)
    } else {
      currentCandyArrangement[candyBeingReplacedId] = candyBeingReplaced.getAttribute('alt')
      currentCandyArrangement[candyBeingDraggedId] = candyBeingDragged.getAttribute('alt')
      setCurrentCandyArrangement([...currentCandyArrangement])
    }
  }

  useEffect(() => {
    createBoard()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour()
      checkForRowOfFour()
      checkForColumnOfThree()
      checkForRowOfThree()
      moveIntoSquareBelow()
      setCurrentCandyArrangement([...currentCandyArrangement])
    }, 100)
    return () => clearInterval(timer)
  }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentCandyArrangement])

  return (
    <main>
      <section className='game_board'>
        {currentCandyArrangement.map((candyColor, index) => (
          <div className="candy-wrapper" key={index}>
            <Image
              key={index}
              className='candy'
              data-id={index}
              src={`/formats/${candyColor}-candy.png`}
              alt={candyColor}
              draggable={true}
              onDragStart={dragStart}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
              width={50}
              height={50}
            />
          </div>
        ))}
      </section>
    </main>
  )
}
