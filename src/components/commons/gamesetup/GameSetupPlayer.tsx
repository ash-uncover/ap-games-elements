import React from 'react'
import {
  Button,
  Input,
  Label
} from '@sol.ac/react-commons'
//
import { PlayerType } from '../../../lib/model/constants/PlayerType'
import { PlayerLevel } from '../../../lib/model/constants/PlayerLevel'
import { PayloadGameInfoPutPlayer } from '../../../lib/model/payload/PayloadGameInfoPut'
// CSS
import './GameSetupPlayer.css'

// #region Declaration
interface GameSetupPlayerProperties {
  name: string
  nation: string
  type: PlayerType
  level: PlayerLevel
  onChange: (player: PayloadGameInfoPutPlayer) => void
  onDelete: () => void
}
// #endregion

// #region Component
export const GameSetupPlayer = ({
  name,
  nation,
  type,
  level,
  onChange,
  onDelete
}: GameSetupPlayerProperties) => {

  // #region > Hooks
  // #endregion

  // #region > Events
  function handleNameChange(event: { value: string }) {
    onChange({
      name: event.value,
      nation,
      type,
      level
    })
  }
  function handleNationChange(event: { value: string }) {
    onChange({
      name,
      nation: event.value,
      type,
      level
    })
  }
  function handleDeleteClick() {
    onDelete()
  }
  // #endregion

  // #region > Render
  return (
    <div className='ap-elements-game-setup-player'>
      <div className='ap-elements-game-setup-player__section'>
        <Label>Name</Label>
        <Input
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className='ap-elements-game-setup-player__section'>
        <Label>Nation</Label>
        <Input
          value={nation || ''}
          onChange={handleNationChange}
        />
      </div>

      <Button
        className='ap-elements-game-setup-player__section'
        onClick={handleDeleteClick}
      >
        del
      </Button>
    </div>
  )
  // #endregion
}
// #endregion