function HornedBeast(props) {
    return (
        <>
            
            <h2>{props.title}</h2>
            <img src={props.imageUrl} onClick={()=>props.onBeastSelect(props.beast)} alt={props.title} height="250px"/>
            <p>{props.description}</p>
            <button onClick={props.updateCount}>CLICK HERE</button>
            <p>❤️{props.count}</p>
        
        </>
    );
}

export default HornedBeast;