import './cardProyecto.css'
interface CardProps {
    img: string;
    descripcion: string;
}

export const CardProyecto = ({ img, descripcion }: CardProps) => {
    return (
        <div className="card-proyecto">
            <div className="cardImagenWrapper">
                <img className="cardImagenProyecto" src={img} alt="Proyecto" />
                <p className="descripcionProyect">{descripcion}</p>
            </div>
        </div>
    );
};