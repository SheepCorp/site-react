import "./ForUs.scss";
import { useState } from "react";
import Team from "./Team/Team";
import Dreams from "./Dreams/Dreams";
import Goals from "./Goals/Goals";

function ForUs() {
    const [ select1, setSelect1 ] = useState('select1 checked')
    const [ select2, setSelect2 ] = useState('select2')
    const [ select3, setSelect3 ] = useState('select3')

    function Selected1() {
        setSelect1('select1 checked')
        setSelect2('select2')
        setSelect3('select3')
    }
    function Selected2() {
        setSelect1('select1')
        setSelect2('select2 checked')
        setSelect3('select3')
    }
    function Selected3() {
        setSelect1('select1')
        setSelect2('select2')
        setSelect3('select3 checked')
    }
    return (
        <section className="ForUs">
            <h2>
                Somos uma empresa de desenvolvimento de software voltada para o
                desenvolvimento de projetos de pequenas e grandes empresas.
            </h2>
            <div className="routes">
                <label htmlFor={select1} className="route" onClick={Selected1}>
                    <input type="radio" name="route" id={select1} />
                    <img src="" alt="" />
                    <span>EQUIPE</span>
                </label>
                <label htmlFor={select2} className="route" onClick={Selected2}>
                    <input type="radio" name="route" id={select2} />
                    <img src="" alt="" />
                    <span>SONHO</span>
                </label>
                <label htmlFor={select3} className="route" onClick={Selected3}>
                    <input type="radio" name="route" id={select3} />
                    <img src="" alt="" />
                    <span>METAS</span>
                </label>
            </div>
            {select1.indexOf('checked') == 8 ? <Team/> : null}
            {select2.indexOf('checked') == 8 ? <Dreams/> : null}
            {select3.indexOf('checked') == 8 ? <Goals/> : null}
        </section>
    );
}

export default ForUs;
