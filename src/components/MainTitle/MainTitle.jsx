import './MainTitle.scss';

function MainTitle({ primary, secondary }) {
    return (
        <h2 className="main-title">{primary} <span className='secondary-title'>{secondary}</span></h2>
    )
}

export default MainTitle;