import { useState } from "react";
import Habilidades from './Habilidades'
import Educacion from './Educacion'
import Tecnologias from './Tecnologias'
import RedesSociales from './RedesSociales'

export default function NavSecond() {
    const [clickSkill, setClickSkill] = useState(false);
    const [clickEducation, setClickEducation] = useState(false);
    const [clickTechnology, setClickTechnology] = useState(false);
    const [clickNetwork, setClickNetwork] = useState(false);
    function clicks(num) {
        console.log("entro");

        setClickSkill(false);
        setClickEducation(false);
        setClickTechnology(false);
        setClickNetwork(false);
        switch (num) {
            case 1:
                setClickSkill(true);
                break;
            case 2:
                setClickEducation(true);
                break;
            case 3:
                setClickTechnology(true);
                break;
            case 4:
                setClickNetwork(true);
                break;
            default:
                console.log("sorry");
                break;
        }
    }

    return (
        <div>
            <nav className='divNavSecond'>
                <a onClick={() => { clicks(1) }}>Habilidades</a>
                <a onClick={() => { clicks(2) }}>Educacion</a>
                <a onClick={() => { clicks(3) }}>Tecnologias</a>
                <a onClick={() => { clicks(4) }}>Redes Sociales</a>
            </nav>
            <div>

                {clickSkill ? <Habilidades /> : ""
                }
                {clickEducation ? <Educacion /> : ""
                }
                {clickTechnology ? <Tecnologias /> : ""
                }
                {clickNetwork ? <RedesSociales /> : ""
                }

            </div>
        </div>
    )
}