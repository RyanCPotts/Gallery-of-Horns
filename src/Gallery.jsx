import HornedBeast from './HornedBeast.jsx'

function Gallery(props) {
    const beastOne={
        title:'beast One',
        imageUrl:'https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_in_Desert_WW176409/portrait_overview/8vo3llqoyc_Black_Rhino_in_Desert_WW176409.jpg',
        description:'one horn'

    }

    const beastTwo={
        title:'beast Two',
        imageUrl:'https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_in_Desert_WW176409/portrait_overview/8vo3llqoyc_Black_Rhino_in_Desert_WW176409.jpg',
        description:'CHARGE'

    }
    return (
        <>
            <HornedBeast
             beastOne={beastOne}
             />
        </>
    )


}

export default Gallery