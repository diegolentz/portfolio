import PersonPinIcon from '@mui/icons-material/PersonPin';
import './home.css';

export const Home = () => {
    return (
        <>
            <nav>
                <div className="nameImg">
                    <PersonPinIcon className="icon" style={{ fontSize: 30 }} />
                    <p className="name">Diego Lentz</p>
                </div>
                <div className="navLinks">
                    <p>About</p>
                    <p>Proyects</p>
                    <p>Skills</p>
                    <p>Contact</p>
                </div>
            </nav>

            <div className='home'>
                <header>
                    <div className="about">
                        <div className="img">
                            <img src="/fotocv.jpeg" alt="" />
                        </div>
                        <div className="description">
                            <h3>Hi, I'm Diego Lentz</h3>
                            <p>Software Developer</p>
                            <p>Experienced in building scalable web applications and passionate about technology.</p>
                            <p>Detail-oriented and committed to writing clean, maintainable code.</p>
                            <p>Strong problem-solving skills and a collaborative team player.</p>
                        </div>
                    </div>
                </header>

                <section className='skills'>
                    <h3>Skills</h3>
                    <h4>Lenguajes & Frameworks</h4>
                    <div className='cards'>
                        {/* Java */}
                        <div className='card'>
                           <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg" alt="Java" width="60" height="60"/>
                           <p>Java</p>
                        </div>
                        {/* TypeScript */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="60" height="60"/>
                           <p>Typescript</p>
                        </div>
                        {/* Kotlin */}
                        <div className='card'>
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" alt="Kotlin" width="60" height="60"/>
                           <p>Python</p>
                        </div>
                        {/* JavaScript */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="60" height="60"/>
                           <p>JavaScript</p>
                        </div>
                        {/* C */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" width="60" height="60"/>
                           <p>C</p>
                        </div>
                        {/* Angular */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" alt="Angular" width="60" height="60"/>
                           <p>Angular 17</p>
                        </div>
                        {/* React */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="60" height="60"/>
                           <p>Ract.js</p>
                        </div>
                        {/* HTML5 */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="60" height="60"/>
                           <p>Html</p>
                        </div>
                        {/* CSS3 */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="60" height="60"/>
                           <p>Css</p>
                        </div>
                        {/* Spring Boot */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" alt="Spring Boot" width="60" height="60"/>
                           <p>SpringBoot</p>
                        </div>
                    </div>

                    <h4>Tools & Plataforms</h4>
                    <div className='cards'>
                        {/* Git */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" width="60" height="60"/>
                           <p>Git</p>
                        </div>
                        {/* Docker */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" width="60" height="60"/>
                           <p>Docker</p>
                        </div>
            
                        {/* Redis */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" alt="Redis" width="60" height="60"/>
                           <p>Redis</p>
                        </div>
                        {/* MongoDB */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="60" height="60"/>
                           <p>MongoDB</p>
                        </div>
                        {/* PostgreSQL */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="60" height="60"/>
                           <p>PostgreSQL</p>
                        </div>
                        {/* MySQL */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" width="60" height="60"/>
                           <p>MySQL</p>
                        </div>
                        {/* Jira */}
                        <div className='card'>
                            <img src="https://cdn.worldvectorlogo.com/logos/jira-1.svg" alt="Jira" width="60" height="60"/>
                           <p>Jira</p>
                        </div>
                        {/* Material UI */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" alt="Material UI" width="60" height="60"/>
                           <p>Material UI</p>
                        </div>
                        {/* Neo4j */}
                        <div className='card'>
                          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/neo4j/neo4j-original.svg" alt="Neo4j" width="60" height="60"/>
                           <p>Neo4j</p>
                        </div>
                        {/* Bootstrap */}
                        <div className='card'>
                           <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="60" height="60"/>
                           <p>Bootstrap</p>
                        </div>
                    </div>
                </section>
             
            </div>
        </>
    )
}