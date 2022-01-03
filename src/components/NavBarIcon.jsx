import React from 'react'
import Column from './Column'
import Link from './Link'

export default function NavBarIcon() {
   return (
      <Column col="1" padding="0px 0px 30px 5px" >
         <Link href="/home" border="none">
            <img
               alt="A business icon"
               src="https://img.icons8.com/ios-filled/50/000000/cloud-business.png"
            />
         </Link>
      </Column>
   )
}
