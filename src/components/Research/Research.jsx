import './Research.scss';
import Button from '../Button/Button';
import MainTitle from '../MainTitle/MainTitle';

function Research() {
    return (
        <section className="research">
            <div className="container">
                <div className="research-content">
                    <div className="research-text">
                        <h2 className="research-title">Party On</h2>

                        <MainTitle primary={`Quas suscipit ad mea.`}
                        secondary={`Pri cu dico labores officiis odio principes complectitur ad sea.`} />
                    </div>

                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Research;