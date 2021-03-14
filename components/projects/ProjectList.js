
import ProjectItem from './ProjectItem.js'

function ProjectList(props) {
    const { projects } = props;

    console.log(projects)
    return (
        <ul>
            {projects.map((item) => (
                <ProjectItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                />
            ))}
        </ul>
    )
}

export default ProjectList;