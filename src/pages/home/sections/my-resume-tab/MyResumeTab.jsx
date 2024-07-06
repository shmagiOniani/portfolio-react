import React from 'react'
import { CustomTab } from '../../../../shared/components'

const TABS_ARR = [
    {
      label: `Education `,
      key: 1,
      children: `Education content`,
    },
    {
      label: `Professional Skils `,
      key: 2,
      children: `Professional Skils content`,
    },
    {
      label: `Experience `,
      key: 3,
      children: `Experience content`,
    },
    {
      label: `Interview `,
      key: 4,
      children: `Interview content`,
    }
  ]

function MyResumeTab() {
  return (
    <div>
        <CustomTab items={TABS_ARR} />
        
    </div>
  )
}

export default MyResumeTab