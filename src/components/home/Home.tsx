import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { ShellPage, useClasses, useIsPhone } from '@sol.ac/react-commons'
//
import { ElementSelector } from '../commons/elements/ElementSelector'
import { ELEMENTS } from '../../lib/data/elements'
// CSS
import './Home.css'
import { HexagonOrientations } from '../commons/hexagon/HexagonOrientation'

// #region Declaration
interface HomeProperties {
}
// #endregion

// #region Component
export const Home = ({
}: HomeProperties) => {

  // #region > Hooks.
  const { classes } = useClasses(['ap-elements-home'])
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isPhone = useIsPhone()
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  // #endregion

  // #region > Events
  // #endregion

  // #region > Render
  return (
    <ShellPage className={classes}>
      HOME
      <div>
        <div>
          <ElementSelector
            elements={Object.values(ELEMENTS)}
            onElementClick={(element) => console.log(element.name)}
          />
        </div>
        <div>
          <ElementSelector
            elements={Object.values(ELEMENTS)}
            orientation={HexagonOrientations.HORIZONTAL}
            onElementClick={(element) => console.log(element.name)}
          />
        </div>
        <h1>Device Test!</h1>
        {isPhone ? <p>PHONE</p> : <p>NOT PHONE</p>}
        {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isBigScreen && <p>You have a huge screen</p>}
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
        {isRetina && <p>You are retina</p>}
      </div>
    </ShellPage>
  )
  // #endregion
}
// #endregion