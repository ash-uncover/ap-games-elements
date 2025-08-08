import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//
import { ELEMENTS } from '../../../lib/data/elements'
import { GameSelectors } from '../../../store/game/game.selectors'
import { GameSlice } from '../../../store/game/game.slice'
//
import './MapUnit.css'

interface MapUnitProperties {
  id: string
}

export const MapUnit = ({
  id
}: MapUnitProperties) => {

  // #region > Hooks //
  const dispatch = useDispatch()
  const unit = useSelector(GameSelectors.unit(id))
  const player = useSelector(GameSelectors.player(unit.player))
  const currentPlayer = useSelector(GameSelectors.playerId)
  // #endregion

  // #region > Events
  function handleClick(event: React.MouseEvent) {
    event.stopPropagation()
    dispatch(GameSlice.actions.selectTile({ id: unit.tile }))
    dispatch(GameSlice.actions.selectUnit({ id }))
  }
  // #endregion

  // Rendering //
  const classes = ['ap-elements-map-unit']
  if (unit.selected) {
    classes.push('ap-elements-map-unit--selected')
  }
  if (currentPlayer === unit.player) {
    classes.push('ap-elements-map-unit--self')
  } else {
    classes.push('ap-elements-map-unit--ennemy')
  }
  return (
    <div
      style={{
        background: ELEMENTS[player.nation].color
      }}
      className={classes.join(' ')}
      draggable={false}
      onClick={handleClick}
    >

    </div>
  )
  // #endregion
}
