import React from 'react'
import { CustomTab } from '../../../../shared/components'
import {Education, Skills, Experience,
  Interview} from './sections'

const TABS_ARR = [
    {
      label: `Education `,
      key: 1,
      children: <Education/>,
    },
    {
      label: `Professional Skils `,
      key: 2,
      children: <Skills/>,
    },
    {
      label: `Experience `,
      key: 3,
      children: <Experience/>,
    },
    {
      label: `Interview `,
      key: 4,
      children: <Interview/>,
    }
  ]

function MyResumeTab({id}) {
  return (
    <div id={id}>
        <CustomTab items={TABS_ARR} />
        
    </div>
  )
}

export default MyResumeTab