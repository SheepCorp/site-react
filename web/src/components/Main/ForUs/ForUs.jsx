import "./ForUs.scss";
import Card from "./Card/Card";

function ForUs() {
    return (
        <section className="ForUs">
            <h2>
                Somos uma empresa de desenvolvimento de software voltada para o
                desenvolvimento de projetos de pequenas e grandes empresas.
            </h2>
            <div className='routes'>
                <div>
                    <input type="radio" name="route" id="team" />
                    <label htmlFor="team">EQUIPE</label>
                </div>
                <div>
                    <input type="radio" name="route" id="dreams" />
                    <label htmlFor="dreams">SONHOS</label>
                </div>
                <div>
                    <input type="radio" name="route" id="goals" />
                    <label htmlFor="goals">METAS</label>
                </div>
            </div>
            <div className="carrousel">
                <Card name="Pedro Augusto - DEV" img="" alt="" />
            </div>
        </section>
    );
}

export default ForUs;
