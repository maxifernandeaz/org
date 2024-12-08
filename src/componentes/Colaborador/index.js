import "./Colaborador.css"
import { IoMdCloseCircle} from "react-icons/io";
import { RiPokerHeartsLine, RiPokerHeartsFill  } from "react-icons/ri";

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    // condicion ? verdadero : valso

    return <div className="colaborador">
        <IoMdCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ?  <RiPokerHeartsLine onClick={() => like(id)}/> : <RiPokerHeartsFill color="red" onClick={() => like(id)}  />}
            </div>
    </div>
}

export default Colaborador