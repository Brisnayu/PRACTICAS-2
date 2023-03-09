import "./Projects.css";
import { ProjectCard } from "../../src/components/ProjectCard/ProjectCard";
import { adoptionBoard } from "../../src/utils/adoptionData";

export const Projects = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <section class="projects">
        <h2>TABLERO DE ADOPTION</h2>
        <div class="gallery">
        ${adoptionBoard.map((pr) => ProjectCard(pr)).join("")}
        </div>
    </section>
    `
}