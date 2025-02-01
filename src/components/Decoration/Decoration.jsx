import './Decoration.scss';
import MainTitle from '../MainTitle/MainTitle';
import decorationImg from '../../assets/images/decoration-img.png'

function Decoration() {
    return (
        <section className="decoration">
            <div className="decoration-img-container">
                <img src={decorationImg} alt="decoration-img" className='decoration-img' />
            </div>
            
            <div className="container">
                <div className="decoration-content">
                    <MainTitle primary={'Illud decore voluptaria has at. '} 
                    secondary={`Hinc invenire atomorum no vel. Ut vis 
                        nullam blandit neglegentur, omittam perpetua 
                        voluptatum qui eu. Iusto laoreet suscipit vis ad, 
                        ad ferri tempor duo.`} />

                    <div className="decoration-link-container">
                        <a href="#!" className='decoration-link'>MORE ABOUT US</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Decoration;