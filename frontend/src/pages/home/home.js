import './Home.scss'

import doctor from '../../assets/images/doctor.png'
import xray from '../../assets/images/xray.png'

export const Home = (props) => {
    return (
        <div className='home'>
            <h2>Home</h2>
            <h3>Application for registering basic patient data. </h3>

            <div className='homeImage'>
                <img src={doctor} alt='A doctor with his patient'></img>
                <img src={xray} alt='A doctor with his patient'></img>
            </div>
        </div>
    )
}