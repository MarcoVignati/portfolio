import Image from "next/image"
import projectsJson from "../../public/projects.json"
import reactLogo from "../../public/react-logo.png"
import project1 from "../../public/project1.png"

export default function Page() {
    return (
        <main>
            <div className="projects__tab"></div>
            <div className="projects__bot-section">
                <div className="projects__filter"></div>
                <section className="projects__display flex-container">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </section>
            </div>
        </main>
    )
}

function ProjectCard() {
    return (
        <div className="test">
            <p className="project__subtitle">Project 1<span className="project__title">_ui-animations</span></p>
            <div className="project__wrapper">
                <div className="project__image">
                    <Image
                        className="project__tech"
                        src={reactLogo}
                    />
                </div>
                <div className="project__description">
                    <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                    <a href="/">view-project</a>
                </div>
            </div>
        </div>
    )
}