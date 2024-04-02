import HornedBeast from './HornedBeast.jsx'

function Gallery(props) {
    const beastOne={
        title:'beast One',
        imageUrl:'https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_in_Desert_WW176409/portrait_overview/8vo3llqoyc_Black_Rhino_in_Desert_WW176409.jpg',
        description:'black rhino'

    }

    const beastTwo={
        title:'beast Two',
        imageUrl:'https://brightspotcdn.byu.edu/dims4/default/a22b70f/2147483647/strip/true/crop/8300x4800+0+0/resize/840x486!/quality/90/?url=https%3A%2F%2Fbrigham-young-brightspot.s3.amazonaws.com%2F54%2F85%2F5a67a65346e997d2219e9cae860a%2Fnarwhal-01.jpg',
        description:'narwhal'

    }
    return (
        <>
            <HornedBeast
             beastOne={beastOne}
             beastTwo={beastTwo}
             />
        </>
    )


}

export default Gallery