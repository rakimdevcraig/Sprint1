function Project({ projectInfo }) {
  return (
    <>
      <h2>{projectInfo.name}</h2>
      <p>{projectInfo.description}</p>
      <ul>
        {projectInfo.techstack.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </>
  );
}

export default Project;
