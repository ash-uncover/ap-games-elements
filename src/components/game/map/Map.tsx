import React from 'react'
import { useSelector } from 'react-redux'
// Utils
import { GameSelectors } from '../../../store/game/game.selectors'
import { MapTile } from './MapTile'
import { MapUnitOrder } from './MapUnitOrder'
// CSS
import './Map.css'

interface MapProperties {
}

export const Map = ({
}: MapProperties) => {

  // #region > Hooks
  const ref = React.useRef<HTMLDivElement>(null)
  const map = useSelector(GameSelectors.map)
  const playerCurrent = useSelector(GameSelectors.playerCurrent)
  React.useEffect(() => {
    if (ref.current && map) {
      ref.current.style.width = `${10 * map.tiles.length}rem`
      ref.current.style.height = `${10 * map.tiles[0].length}rem`
    }
  }, [map])
  // #endregion

  // #region > Render
  return (
    <div
      ref={ref}
      className='ap-elements-map'
      draggable={false}
    >
      {map.tiles.map(
        (row: string[]) => row.map(
          (id: string) => (
            <MapTile key={id} id={id} />
          )
        )
      )}
      {playerCurrent && playerCurrent.units.map(
        (unit: string) => (
          <MapUnitOrder key={unit} id={unit} />
        )
      )}
    </div>
  )
  // #endregion
}
