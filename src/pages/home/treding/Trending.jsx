import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
const Trending = () => {

    
  return (
    <div className='carouselSelect'>

      <contentWrapper>
        <span className="carouseltitle">Trending</span>
        <SwitchTabs data={["Day","Week"]} />
      </contentWrapper>
    </div>
  )
}

export default Trending
