import Link from 'next/link';

import classes from './ProjectItem.module.css';

function ProjectItem(props) {

    const { title, date, description, id } = props;
    console.log(title)
    const humanReadableDate = new Date(date).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const exploreLink = `/projects/${id}`;
    return (
        <li className={classes.item}>
            <div className={classes.content}>
                <div className={classes.title}>
                    <h2>{title}</h2>
                </div>
                <div className={classes.desc}>
                    <h3>{description}</h3>
                </div>
                <div className={classes.hdate}>
                    <h4>{humanReadableDate}</h4>
                </div>
                <div className={classes.explore}>
                    <Link href={exploreLink}>Explore Project</Link>
                </div>
            </div>
        </li>
    )
}

export default ProjectItem;