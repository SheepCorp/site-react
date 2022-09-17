import { useState } from "react";
import "./ForUs.scss";
import Team from './Team'
import Dreams from './Dreams'
import Goals from './Goals'

function ForUs() {
    const [team, setTeam] = useState(true)
    const [dreams, setDreams] = useState(false)
    const [goals, setGoals] = useState(false)

    function showTeams() {
        setTeam(true)
        setDreams(false)
        setGoals(false)
    }
    function showDreams() {
        setTeam(false)
        setDreams(true)
        setGoals(false)
    }
    function showGoals() {
        setTeam(false)
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
                <div onClick={showTeams()}>
                    <img src="" alt="" />
                    <span>EQUIPE</span>
                </div>
                <div onClick={showDreams()}>
                    <img src="" alt="" />
                    <span>SONHO</span>
                </div>
                <div onClick={showGoals()}>
                    <img src="" alt="" />
                    <span>METAS</span>
                </div>
            </div>
            {team = true ? <Team/> : null}
            {dreams = true ? <Dreams/> : null}
            {goals = true ? <Goals/> : null}
        </section>
    );
}

export default ForUs;