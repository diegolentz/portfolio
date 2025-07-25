// src/Components/ProyectosDetalles/proyecto.tsx
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useToast } from "../../Context/toast/useToast";
import { Proyecto, proyectosData } from "../../Data/proyectos";
import { CardProyecto } from "../CardProyecto/cardProyecto";
import "./proyecto.css";
import { useTheme } from '../../Context/theme/ThemeContext';

export const Proyectos = () => {
    const { id } = useParams<{ id: string }>();
    const idProyect = Number(id);
    const [proyecto, setProyecto] = useState<Proyecto | null>(null);
    const { openToast } = useToast();
    const navigate = useNavigate();
    const { isDark, toggleTheme } = useTheme();

    // menú “burger”
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (e: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const obtenerProyecto = (id: number) => {
        if (isNaN(id)) {
            openToast("ID inválido", "error");
            return navigate("/home");
        }
        const p = proyectosData.find((x) => x.id === id);
        if (!p) {
            openToast("Proyecto no encontrado", "error");
            return navigate("/home");
        }
        setProyecto(p);
    };

    useEffect(() => {
        obtenerProyecto(idProyect);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idProyect]);

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
                    <HashLink smooth to="/home#about">
                        Sobre mí
                    </HashLink>
                    <HashLink smooth to="/home#skills">
                        Habilidades
                    </HashLink>
                    <HashLink smooth to="/home#proyects">
                        Proyectos
                    </HashLink>
                    <HashLink smooth to="/home#contact">
                        Contacto
                    </HashLink>
                </div>

                <div className="burger">
                    <Button
                        id="burger-button"
                        onClick={handleClick}
                        sx={{
                            color: 'var(--color-font)',
                            backgroundColor: 'var(--container-bg-color)',

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
                        onClose={() => handleClose()}
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
                        <MenuItem onClick={handleClose} component={HashLink} smooth to="/home#about" sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
                                                        Sobre mi
                        </MenuItem>
                        <MenuItem onClick={handleClose} component={HashLink} smooth to="/home#skills" sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
                                                        Habilidades
                            
                        </MenuItem>
                        <MenuItem onClick={handleClose} component={HashLink} smooth to="/home#proyects" sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
                            Proyectos
                        </MenuItem>
                        <MenuItem onClick={handleClose} component={HashLink} smooth to="/home#contact" sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
                            Contacto
                        </MenuItem>
                         <MenuItem
                            onClick={() => {
                                toggleTheme();
                                handleClose();
                            }}
                            sx={{ fontSize: '1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}
                        >
                            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                            {isDark ? 'Claro' : 'Oscuro'}
                        </MenuItem>
                    </Menu>
                </div>
            </nav>

            {proyecto && (
                <div className="proyectosContainer">
                    <h2 className="tituloProyecto">{proyecto.titulo}</h2>
                    <div className="imagenesProyectos">

                        {proyecto.imgs.map((img, index) => (
                            <CardProyecto
                                key={index}
                                img={img}
                                descripcion={proyecto.descripcion[index] || ""}
                            />
                        ))}
                    </div>
                </div>
            )}

        </>
    );
};
