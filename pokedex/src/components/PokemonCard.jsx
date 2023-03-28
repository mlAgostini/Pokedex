function PokemonCard(props) {
    
    return (
        <figure>
            {props.imgSrc ? (
            <img src={props.imgSrc} alt={props.name}/>
            ) : (
                <p>???</p>
            )}
            <figcaption>Bulbasaur.</figcaption>
        </figure>
    );
}



export default PokemonCard;