function Header( props ) {
 
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.name}</h2>
            <h3>{props.place}</h3>
        </header>
    )

}

export default Header;