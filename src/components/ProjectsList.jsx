import Project from "./Project.jsx";
import data from "../data/data.js";

function ProjectsList() {
  return (
    <>
      <section>
        {data.map((item) => (
          <Project key={item.id} projectInfo={item} />
        ))}
      </section>
    </>
  );
}

export default ProjectsList;
