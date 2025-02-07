import Project from "./Project.jsx";
import data from "../data/data.js";

function ProjectsList({ darkMode }) {
  return (
    <>
      <section className="project-container">
        {data.map((item) => (
          <Project darkMode={darkMode} key={item.id} projectInfo={item} />
        ))}
      </section>
    </>
  );
}

export default ProjectsList;
