function Project({ projectInfo, darkMode }) {
  return (
    <>
      <div
        className="card"
        style={{
          borderColor: darkMode ? "white" : "var(--dark)",
          backgroundColor: darkMode ? "salmon" : "papayawhip",
        }}
      >
        <h2 style={{ textDecoration: darkMode ? "underline" : "none" }}>
          {projectInfo.name}
        </h2>
        <p>{projectInfo.description}</p>
        <ul>
          {projectInfo.techstack.map((item, index) => (
            <span key={index}> {item} </span>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Project;
