import './Header.scss'
import medcloudLogo from '../../assets/images/medcloud.png'
import { Nav } from '../Nav'


export function Header() {
    return (
        <div className='header'>

            <div className='logoHeader'>
                <a href="https://medcloud.link/"
                    target="_blank" rel="noreferrer" title='Medcloud'>
                    <img src={medcloudLogo}  alt='Medcloud logo'></img>
                </a>
            </div>
            <hr></hr>
            <Nav />
            <hr></hr>

        </div>
    )
}