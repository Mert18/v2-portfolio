import classes from './Header.module.css';

function Header() {

    return (
        <div className={classes.header}>
            <div className={classes.text}>
                <div className={classes.title}>
                    <h1>Mert UYGUR</h1>
                </div>
                <div className={classes.info}>
                    <h3>Computer Engineering Student</h3>
                    <h3>Full Stack Developer</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;