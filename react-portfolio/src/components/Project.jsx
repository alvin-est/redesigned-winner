function Project({ title, image, deployedLink, githubLink }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <a href={deployedLink}>View Deployed</a>
        <a href={githubLink}>View Code</a>
      </div>
    );
  }
  
  export default Project;