import { FiChevronsLeft, FiChevronsRight, FiPause } from "react-icons/fi";
import cover from '../../assets/everlong.jpg'
import './styles.css'

export function Player() {
    return (
        <div className='player'>
            <div className="cover">
                <img src={cover} alt="" />
            </div>
            <div className='infos'>
                <h1 className="title">Everlong</h1>
                <h2 className="artist">Foo Fighters</h2>
            </div>
            <div className="buttons">
                <div className="previous">
                    <FiChevronsLeft />
                </div>
                <div className="play-pause">
                    <FiPause />
                </div>
                <div className="next">
                    <FiChevronsRight />
                </div>
            </div>
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
            <div className="timer">
                3:54
            </div>
        </div>
    )
}