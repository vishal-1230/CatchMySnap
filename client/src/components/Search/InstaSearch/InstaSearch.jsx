import React from 'react'
import { Header } from '../Header'
import styles from './InstaSearch.module.css'
import InstaCard from './InstaCard'
import { SearchBox } from '../SearchBox'

function InstaSearch() {
  return (
    <div className={styles.instasearch}>
        <Header /><hr className={styles.abcd} />
          <h1 className={styles.instaHeading}>Instagram Pricing Plans</h1>
        <div className={styles.instaBody}>
          <InstaCard heading='Zoom' oldPrice='1799' newPrice='799' features={['60 Minutes of Shoot Time', '20 Edited Images', '1 Collage', '72 Hours Delivery' ]} />
          <InstaCard heading='Snap' oldPrice='2199' newPrice='999' features={['60 Minutes of Shoot Time', '20 Edited Images', '1 Collage', '72 Hours Delivery' ]} />
          <InstaCard heading='Insta' oldPrice='2499' newPrice='1199' features={['60 Minutes of Shoot Time', '20 Edited Images', '1 Collage', '72 Hours Delivery' ]} />
          <InstaCard heading='Capture' oldPrice='2999' newPrice='1499' features={['60 Minutes of Shoot Time', '20 Edited Images', '1 Collage', '72 Hours Delivery' ]} />
        </div>
    </div>
  )
}

export default InstaSearch