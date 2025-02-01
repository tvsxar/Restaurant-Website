import './Offers.scss';
import MainTitle from '../MainTitle/MainTitle';
import startImg from '../../assets/images/first-serving-img.png';
import endImg from '../../assets/images/second-serving-img.png';

function Offers() {
    return (
        <section className="offers">
            <div className="container">
                <div className="offers-content">
                    <div className="offer start">
                        <img className='offers-img' src={startImg} alt="serving" />

                        <div className="offer-text">
                            <MainTitle primary={`Ex tempor euismod sapientem ouis lexor pro.`}
                            secondary={`Ad vix dicta iudico singulis, ius ex mollis veritus.`} />

                            <p className="offer-description">{`Possit tritani consectetuer 
                            eu his, nusquam minimum ut per, eu eos ocurreret splendide 
                            hendrerit. Dicant placerat democritum eos id, sit mollis 
                            invidunt mediocritatem ei, ne fuisset dolores periculis sed.`}</p>
                        </div>
                    </div>

                    <div className="offer end">
                        <div className="offer-text">
                            <MainTitle primary={`Te elit antiopam vix zril recusabo ut pri.`}
                            secondary={`Quas suscipit ad mea verear vivendo tincidunt.`} />

                            <p className="offer-description">{`Pri cu dico labores officiis, 
                            odio principes complectitur ad sea. Sea id doctus forensibus, 
                            nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad 
                            meliore perpetua referrentur sed. Quas suscipit ad mea verear 
                            vivendo tincidunt.`}</p>
                        </div>

                        <img className='offers-img' src={endImg} alt="serving" />
                    </div>

                    <div className="premium-offer">
                        <h3 className="premium-offer-title">Wanna know more about the Premium deal?</h3>

                        <a href="#!" className="premium-offer-link">See the full range of Premium</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers;