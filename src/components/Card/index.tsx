import './styles.css'

type Props = {
    cover:string;
    music:string;
    artist:string;
}

export function Card(props:Props) {
    return (
        <div className="card">
            <div className="img">
                <img src={props.cover} alt="" />
            </div>
            <div className="card-info">
                <h3 className="title">{props.music}</h3>
                <h4 className="artist">{props.artist}</h4>
            </div>
        </div>
    )
}