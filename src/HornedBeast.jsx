function HornedBeast(props) {
    return (
        <>
            <h1>Horned Beast Component</h1>
            <h2>{props.beastOne.title}</h2>
            <img src={props.beastOne.imageUrl} alt={props.beastOne.title} />
            <p>{props.beastOne.description}</p>

            <h2>{props.beastTwo.title}</h2>
            <img src={props.beastTwo.imageUrl} alt={props.beastTwo.title} />
            <p>{props.beastTwo.description}</p>
        </>
    );
}

export default HornedBeast;