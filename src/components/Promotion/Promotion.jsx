import './Promotion.scss'
import MainTitle from '../MainTitle/MainTitle';
import Card from '../Card/Card';
import cupIcon from '../../assets/icons/cup-icon.svg';
import dishIcon from '../../assets/icons/dish-icon.svg';
import calendarIcon from '../../assets/icons/calendar-icon.svg';

function Promotion() {
    return (
        <section className="promotion">
            <div className="container">
                <div className="promotion-content">
                    <div className="title-container">
                        <MainTitle primary={'Promoting your business and services with Propel:'} 
                        secondary={'A responsive, multi-page business template with everything you need propel your business.'} />
                    </div>

                    <div className="card-container">
                        <Card img={cupIcon} title={'Pro ad constituto'} 
                        description={'Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.'} />
                        <Card img={dishIcon} title={'Eam commodo'} 
                        description={'Fuisset intellegat delicatissimi ex mea. Cu probo integre nec.'} />
                        <Card img={calendarIcon} title={'Reformidans eis'} 
                        description={'Facer nostro causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet.'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotion;