
import { getFeaturedProjects } from '../dummy-data';
import ProjectList from '../components/projects/ProjectList.js';
import classes from '../styles/Home.module.css';

import Header from '../components/ui/Header';

function HomePage() {
    const featuredProjects = getFeaturedProjects();
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Header />
            </div>

            <ProjectList projects={featuredProjects} />
        </div>
    )
}

export default HomePage;