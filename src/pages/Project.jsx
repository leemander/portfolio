export default function Project(props) {
  const { title, screenshot, description, skills, liveURL, repoURL } =
    props.props;
  return (
    <main>
      <div className="container">
        <h2>{title}</h2>
        <img src={screenshot} alt={title} />
        <p>{description}</p>
        <h3>Skills used</h3>
        <ul>
          {skills.map((skill) => (
            <li key={Math.random() * 1000}>{skill}</li>
          ))}
        </ul>
        <a href={liveURL}>Live site</a>
        <a href={repoURL}>GitHub repo</a>
      </div>
    </main>
  );
}
