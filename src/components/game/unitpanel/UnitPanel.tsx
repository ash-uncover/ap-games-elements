import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Utils
import { GameSelectors } from '../../../store/game/game.selectors'
import { GameSlice } from '../../../store/game/game.slice'
import { UnitOrder } from '../../../lib/model/constants/UnitOrder'
// CSS
import './UnitPanel.css'
import { Panel } from '@sol.ac/react-commons'

interface UnitPanelProperties { }

export const UnitPanel = ({
}: UnitPanelProperties) => {

  // #region > Hooks
  const dispatch = useDispatch()
  const [show, setShow] = React.useState<boolean>(false)
  const [actions, setActions] = React.useState<UnitOrder[]>([])
  const currentPlayer = useSelector(GameSelectors.playerId)
  const selectedUnits = useSelector(GameSelectors.selectedUnits)
  const unitsSelected = useSelector(GameSelectors.unitsSelected)

  React.useEffect(() => {
    if (unitsSelected.length && unitsSelected[0].player === currentPlayer) {
      setShow(true)
      setActions(Object.values(UnitOrder))
    } else {
      setShow(false)
      setActions([])
    }
  }, [unitsSelected, currentPlayer])
  // #endregion

  // #region > Events
  function handleActionClick(key: UnitOrder) {
    selectedUnits.forEach(id => {
      dispatch(GameSlice.actions.setUnitOrder({
        id,
        key
      }))
    })
  }
  // #endregion

  // #region > Render
  if (!show) {
    return null
  }

  const classes = ['ap-elements-unit-panel']
  return (
    <Panel
      className={classes.join(' ')}
      title={'Actions'}
    >
      {actions.map(
        (action: UnitOrder) => {
          const classesAction = ['ap-elements-unit-panel_action']
          const state = unitsSelected.reduce((acc, unit) => {
            if (unit.order?.key === action) {
              acc.some = true
            } else {
              acc.all = false
            }
            return acc
          }, { some: false, all: true })
          if (state.all) {
            classesAction.push('ap-elements-unit-panel_action--all')
          } else if (state.some) {
            classesAction.push('ap-elements-unit-panel_action--some')
          }
          return (
            <button
              key={action}
              className={classesAction.join(' ')}
              onClick={() => handleActionClick(action)}
            >
              {action}
            </button>
          )
        }
      )}
    </Panel>
  )
  // #endregion
}
