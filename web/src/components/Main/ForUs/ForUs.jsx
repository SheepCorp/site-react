import { useState } from "react";
import "./ForUs.scss";
import Team from './Team/Team'
import Dreams from './Dreams/Dreams'
import Goals from './Goals/Goals'

function ForUs() {
    const [dreams, setDreams] = useState(false)
    const [goals, setGoals] = useState(false)

    function showTeams() {
        setDreams(false)
        setGoals(false)
    }
    function showDreams() {
        setDreams(true)
        setGoals(false)
    }
    function showGoals() {
        setDreams(false)
        setGoals(true)
    }

    return (
        <section className="ForUs">
            <h2>
                Somos uma empresa de desenvolvimento de software voltada para o
                desenvolvimento de projetos de pequenas e grandes empresas.
            </h2>
            <div className='routes'>
                <div onClick={showTeams()} className='route'>
                    <img src="" alt="" />
                    <span>EQUIPE</span>
                </div>
                <div onClick={showDreams()} className='route'>
                    <img src="" alt="" />
                    <span>SONHO</span>
                </div>
                <div onClick={showGoals()} className='route'>
                    <img src="" alt="" />
                    <span>METAS</span>
                </div>
            </div>
            {dreams === true ? <Dreams/> : <Team/>}
            {goals === true ? <Goals/> : <Team/>}
        </section>
    );
}

export default ForUs;