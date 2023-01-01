import Image from "next/image"
import snakeGame from "../public/snakeGame.png"

export default function Page() {
  return (
    <main className="flex-container home">
      <div>
        <p>Hi all. I am</p>
        <h1 className="home__headline">Micheal Weaver</h1>
        <h2 className="home__subheadline">{'>'} Front-end developer</h2>
        <p className="lable">complete the game to continue</p>
        <p className="lable home__lable">you can also see it on my Github page</p>
        <p className="code-snippet home__lable">const githubLink = “https://github.com/example/url”</p>
      </div>
      <Image 
      src={snakeGame}
      draggable={false}
      />
    </main>
  )
}