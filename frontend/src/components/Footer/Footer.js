import './Footer.scss'
import medcloudLogo2 from '../../assets/images/medcloud2.png'


export function Footer() {
    return (
        <div className='footer'>

            <div className='nav-footer'>
                <ul className="social2">
                    <li>
                        <a href="https://github.com/malanski" title="github" target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="https://malanski.github.io/portfolio/" title="portfolio" target="_blank" rel="noreferrer">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ulisses-malanski" title="linkedin" target="_blank" rel="noreferrer">
                            Linkedin
                        </a>
                    </li>
                </ul>
                <div className='logoFooter'>
                    <img src={medcloudLogo2} title='Medcloud' alt='Medcloud logo'></img>
                </div>
            </div>

            <h6>Developed by Ulisses Malanski - 2022</h6>

        </div>
    )
}