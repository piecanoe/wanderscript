export default function Card(props) {
    return (
        <section className="card">
            <img className="card-photo" src={props.photo} alt="Attraction" />
            <div className="card-info">
                <div className = "card-map">
                    <h2 className="card-country">{props.country}</h2>
                    <a className="google-maps" href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card-attraction">{props.attraction}</h1>
                <h3 className="card-dates">
                    <p>
                        <span className="card-start-date">{props.startDate}</span>
                        <span> - </span>
                        <span className="card-end-date">{props.endDate}</span>
                    </p>
                </h3>
                <p className="card-description">{props.description}</p>
            </div>
        </section>
    )
}