import React from 'react'
import { useClasseName, useClasses } from '@sol.ac/react-commons'
//
import { Hexagon } from '../hexagon/Hexagon'
// CSS
import './ElementSelectorTile.css'

// #region Declaration
interface ElementSelectorTileProperties {
  className?: string
  style?: React.CSSProperties

  color: string
  image: string
  name: string
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}
// #endregion

// #region Component
export const ElementSelectorTile = ({
  className,

  image,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ElementSelectorTileProperties) => {

  // #region > Hooks
  const { classBuilder, classes } = useClasses(['ap-elements-element-selector-tile'])
  useClasseName(classBuilder, className)
  // #endregion

  // #region > Events
  function handleClick() {
    onClick()
  }
  function handleMouseEnter() {
    onMouseEnter()
  }
  function handleMouseLeave() {
    onMouseLeave()
  }
  // #endregion

  // #region > Render
  return (
    <Hexagon
      className={classes}
    >
      <div
        className='ap-elements-element-selector-tile__content'
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          background: 'grey'
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className='ap-elements-element-selector-tile__image'
          src={image}
        />
      </div>
    </Hexagon >
  )
  // #endregion
}
// #endregion
