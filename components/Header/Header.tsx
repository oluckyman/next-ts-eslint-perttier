import React from 'react'
import { CgExternal } from 'react-icons/cg'
import styles from './Header.module.scss'

const Header = (): JSX.Element => (
  <>
    <div className={styles.root}>
      Demo of the <code>{`<Header />`}</code> component
      <div>
        <CgExternal /> ← an icon
      </div>
    </div>
  </>
)

export default Header
