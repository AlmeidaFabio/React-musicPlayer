import logo from '../../assets/logo.png'
import './styles.css'

export function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}