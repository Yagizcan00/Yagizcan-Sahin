import React from 'react'
import Heading from '../Heading/Heading'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

function Container() {

    return (
        <div>
            <Heading />
            <hr style={{width:"80vw"}} />
            <Content />
            <Footer />
        </div>
    )
}

export default Container
