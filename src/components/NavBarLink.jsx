import React from 'react'
import Column from './Column'
import Link from './Link'

export default function NavBarLink() {
   return (
      <>
         <Column col="1" margin="0px" width="15%">
            <Link href="/auth/users/" color="#fff" border="none">Sign in</Link>
         </Column>
         <Column col="1" margin="0px" width="20%">
            <Link href="/" color="#fff" border="none">Log out</Link>
         </Column>
      </>
   )
}
