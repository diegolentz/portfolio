import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../Context/theme/ThemeContext';
import { useToast } from '../../Context/toast/useToast';
import { carrouselData } from '../../Data/Carrousel';
import './home.css';

export const Home = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [fade, setFade] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const currentProject = carrouselData[currentIndex];
    const previousItem = () => selectNewItem(false);
    const nextItem = () => selectNewItem(true);
    const { openToast } = useToast();
    const nav = useNavigate();
    const { isDark, toggleTheme } = useTheme();

    const selectNewItem = (next = true) => {
        setFade(true);
        setTimeout(() => {
            const newIndex = next
                ? (currentIndex + 1) % carrouselData.length
                : (currentIndex - 1 + carrouselData.length) % carrouselData.length;
            setCurrentIndex(newIndex);
            setFade(false);
        }, 500);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (destino: string) => {
        setAnchorEl(null);
        if (destino) {
            const section = document.querySelector(destino);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        mode: "all",
        defaultValues: {
            name: '',
            subject: '',
            description: ''
        }
    })

    const enviar = (data: any) => {
        openToast(`Mensaje enviado correctamente, gracias ${data.name}`, "success");
        reset();
    }

    const goTo = (id: number) => {
        nav(`/proyect/${id}`);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextItem();
        }, 6000);

        return () => clearInterval(interval);
    }, [currentIndex]);


    return (
        <>
            <nav>
                <div className="nameImg">
                    <p className="name">Diego Lentz</p>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDark ? <DarkModeIcon className="icon" /> : <LightModeIcon className="icon" />}
                        {isDark ? 'Oscuro' : 'Claro'}
                    </button>
                </div>
                <div className="navLinks">
                    <a href="#about">Sobre mi</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#proyects">Proyectos</a>
                    <a href="#contact">Contacto</a>
                </div>
                <div className="burger">
                    <Button
                        id="burger-button"
                        onClick={handleClick}
                        sx={{
                            // color: 'var(--color-font)',
                            // backgroundColor: 'var(--nav-bg-color)', 
                             borderRadius: '1rem'
                        }}
                    >
                        <MenuIcon
                            sx={{
                                fontSize: 30,
                                color: 'var(--color-font)',
                            }}
                        />
                    </Button>

                    <Menu
                        id="burger-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => handleClose("")}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        PaperProps={{
                            sx: {
                                width: '15rem',
                                backdropFilter: 'blur(10px)',
                                backgroundColor: 'var(--nav-bg-color)',
                                color: 'var(--color-font)',
                                borderBottomLeftRadius: '10px',
                                borderBottomRightRadius: '10px',
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                mt: 1.6,
                                position: 'absolute',
                                ml: 'auto',
                                right: '0px',
                                left: 'unset',
                                border: 'var(--border-color) solid 0.5px',
                                borderTop: 'none',
                                zIndex: 2000,
                            },
                        }}
                    >
                        <MenuItem
                            onClick={() => handleClose("#about")}
                            sx={{ fontSize: '1.5rem', fontWeight: 600 }}
                        >
                            Sobre mi
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleClose("#skills")}
                            sx={{ fontSize: '1.5rem', fontWeight: 600 }}
                        >
                            Habilidades
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleClose("#proyects")}
                            sx={{ fontSize: '1.5rem', fontWeight: 600 }}
                        >
                            Proyectos
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleClose("#contact")}
                            sx={{ fontSize: '1.5rem', fontWeight: 600 }}
                        >
                            Contacto
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                toggleTheme();
                                handleClose("");
                            }}
                            sx={{ fontSize: '1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}
                        >
                            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                            {isDark ? 'Claro' : 'Oscuro'}
                        </MenuItem>
                    </Menu>
                </div>

            </nav>

            <div className='home'>
                <header id="about">
                    <div className="about">
                        <div className="img">
                            <img src="/fotocv.jpeg" alt="Foto de Diego Lentz" />
                        </div>
                        <div className="description">
                            <h3>Hola, soy Diego Lentz</h3>
                            <div>
                                <p>Desarrollador de Software</p>
                                <p>Con experiencia en el desarrollo de aplicaciones web escalables y apasionado por la tecnología.</p>
                                <p>Con sólidas habilidades para resolver problemas y gran capacidad para el trabajo en equipo.</p>
                                <p>Busco constantemente aprender y mejorar mis habilidades para contribuir al éxito de proyectos innovadores.</p>
                            </div>
                        </div>
                    </div>
                </header>

                <section className='skills' id='skills'>
                    <h3>Habilidades</h3>
                    <h4>Lenguajes & Frameworks</h4>
                    <div className='cards'>
                        {/* Java */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg" alt="Java" width="60" height="60" />
                            <p>Java</p>
                        </div>
                        {/* TypeScript */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="60" height="60" />
                            <p>Typescript</p>
                        </div>
                        {/* Kotlin */}
                        <div className='card'>
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" alt="Kotlin" width="60" height="60" />
                            <p>Python</p>
                        </div>
                        {/* JavaScript */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="60" height="60" />
                            <p>JavaScript</p>
                        </div>
                        {/* C */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" width="60" height="60" />
                            <p>C</p>
                        </div>
                        {/* Angular */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" alt="Angular" width="60" height="60" />
                            <p>Angular 17</p>
                        </div>
                        {/* React */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="60" height="60" />
                            <p>Ract.js</p>
                        </div>
                        {/* HTML5 */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="60" height="60" />
                            <p>Html</p>
                        </div>
                        {/* CSS3 */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="60" height="60" />
                            <p>Css</p>
                        </div>
                        {/* Spring Boot */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" alt="Spring Boot" width="60" height="60" />
                            <p>SpringBoot</p>
                        </div>
                    </div>

                    <h4>Herramientas & Plataformas</h4>
                    <div className='cards'>
                        {/* Git */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" width="60" height="60" />

                            <p>Git</p>
                        </div>
                        {/* Docker */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" width="60" height="60" />
                            <p>Docker</p>
                        </div>

                        {/* Redis */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" alt="Redis" width="60" height="60" />
                            <p>Redis</p>
                        </div>
                        {/* MongoDB */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="60" height="60" />
                            <p>MongoDB</p>
                        </div>
                        {/* PostgreSQL */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="60" height="60" />
                            <p>PostgreSQL</p>
                        </div>
                        {/* MySQL */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" width="60" height="60" />
                            <p>MySQL</p>
                        </div>
                        {/* Jira */}
                        <div className='card'>
                            <img src="https://cdn.worldvectorlogo.com/logos/jira-1.svg" alt="Jira" width="60" height="60" />
                            <p>Jira</p>
                        </div>
                        {/* Material UI */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" alt="Material UI" width="60" height="60" />
                            <p>Material UI</p>
                        </div>
                        {/* Neo4j */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/neo4j/neo4j-original.svg" alt="Neo4j" width="60" height="60" />
                            <p>Neo4j</p>
                        </div>
                        {/* Bootstrap */}
                        <div className='card'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="60" height="60" />
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </section>
                <section className='proyects' id='proyects'>
                    <h3>Proyectos</h3>
                    <div className="containerDetalleProducto">
                        <div className="data">
                            <img
                                className={`imagen1 ${fade ? "fade-out" : ""}`}
                                src={currentProject.imagen}
                                alt={currentProject.titulo}
                            />
                        </div>
                        <div className="descripcion">
                            <h4>{currentProject.titulo}</h4>
                            <div className="descripcion-texto">
                                {currentProject.descripcion.map((linea) => (
                                    <p >{linea}</p>
                                ))}
                            </div>

                            <button className='verMasButton' onClick={() => goTo(currentProject.id)}>Ver mas</button>
                        </div>

                    </div>
                    <div className="controlers">
                        <button onClick={previousItem} className="anterior">
                            <UndoOutlinedIcon style={{ fontSize: 20 }} />
                        </button>
                        <button onClick={nextItem} className="siguiente">
                            <RedoOutlinedIcon style={{ fontSize: 20 }} />
                        </button>
                    </div>
                </section>

                <section className="contact" id='contact'>
                    <h3>Contacto</h3>
                    <div className="contactDownlad">
                        <form onSubmit={handleSubmit(enviar)} className='formulario'>
                            <div className='input'>
                                <input
                                    type="text"
                                    className="campo"
                                    placeholder="Nombre"
                                    {...register("name", {
                                        required: "Nombre requerido",
                                        minLength: { value: 4, message: "El nombre debe tener mas de 3 caracteres" }
                                    })}
                                />
                                {errors.name && <p className='error'>{errors.name.message}</p>}
                            </div>
                            <div className='input'>
                                <input
                                    type="text"
                                    className="campo"
                                    placeholder="Asunto"
                                    {...register("subject", {
                                        required: "Asunto requerido",
                                        minLength: { value: 4, message: "El asunto debe tener mas de 3 caracteres" }
                                    })}
                                />
                                {errors.subject && <p className='error'>{errors.subject.message}</p>}
                            </div>
                            <div className="textArea">
                                <textarea
                                    className="subject"
                                    placeholder="Descripcion"
                                    {...register("description", {
                                        required: "Descripcion requerida",
                                        minLength: { value: 4, message: "La descripcion debe tener mas de 3 caracteres" }
                                    })}
                                />
                                {errors.description && <p className='error'>{errors.description.message}</p>}
                            </div>
                            <button type="submit" className="btn">Enviar</button>
                        </form>
                        <div className='download'>
                            <a
                                href="/diegoLentzCV2025.pdf"
                                download="DiegoLentz_CV.pdf"
                                className="download-btn"
                            >
                                <div className='download-text'>
                                    <p>Descarga el CV.
                                    </p>
                                    <CloudDownloadOutlinedIcon style={{ fontSize: 30 }} />

                                </div>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}