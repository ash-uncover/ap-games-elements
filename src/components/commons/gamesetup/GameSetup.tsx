import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from '@sol.ac/react-commons'
// Utils
import { ELEMENTS } from '../../..//lib/data/elements'
import { GameStatus } from '../../../lib/model/constants/GameStatus'
import { PlayerType } from '../../../lib/model/constants/PlayerType'
import { PlayerLevel } from '../../../lib/model/constants/PlayerLevel'
import { PayloadGameInfoPut, PayloadGameInfoPutPlayer } from '../../../lib/model/payload/PayloadGameInfoPut'
import { nameToId, resolveNextName } from '../../../lib/utils/names'
import { GameService } from '../../../service/GameService'
import { postGame, getGames } from '../../../service/GameServiceHelper'
import { GamesSelectors } from '../../../store/games/games.selectors'
import { AppSlice } from '../../../store/app/app.slice'
import { GameSetupPlayer } from './GameSetupPlayer'
import { ElementSelector } from '../elements/ElementSelector'
// CSS
import './GameSetup.css'

// #region Declaration
interface GameSetupProperties {
  service: GameService
  onCancelGame: () => void
  onCreateGame: () => void
}
// #endregion

// #region Component
export const GameSetup = ({
  service,
  onCancelGame,
  onCreateGame,
}: GameSetupProperties) => {

  // #region > Hooks
  const dispatch = useDispatch()
  const [name, setName] = React.useState('')
  const [nameError, setNameError] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [width, setWidth] = React.useState(10)
  const [widthError, setWidthError] = React.useState('')
  const [height, setHeight] = React.useState(10)
  const [heightError, setHeightError] = React.useState('')
  const [players, setPlayers] = React.useState<PayloadGameInfoPutPlayer[]>([
    { name: 'Player (1)', nation: 'N1', type: PlayerType.HUMAN, level: PlayerLevel.NORMAL },
    { name: 'Player (2)', nation: 'N2', type: PlayerType.HUMAN, level: PlayerLevel.NORMAL }
  ]);
  const [playersError, setPlayersError] = React.useState('')
  const [disabled, setDisabled] = React.useState(true)
  const games = useSelector(GamesSelectors.games)
  React.useEffect(() => {
    let newDisabled = false
    if (!name || Object.values(games).some(game => game.name === name)) {
      newDisabled = true
      if (name) {
        setNameError('Name already in used')
      } else {
        setNameError('Specify a name')
      }
    } else {
      setNameError('')
    }
    if (players.length < 2) {
      newDisabled = true
      setPlayersError('Game must have 2 players or more')
    } else {
      setPlayersError('')
    }
    if (width < 0) {
      newDisabled = true
      setWidthError('Width must be greater than \'1\'')
    } else {
      setWidthError('')
    }
    if (height < 1) {
      newDisabled = true
      setHeightError('Height must be greater than \'1\'')
    } else {
      setHeightError('')
    }
    setDisabled(newDisabled)
  }, [name, width, height, players])
  // #endregion

  // #region > Events
  function handleNameChange(event: { value: string }) {
    setName(event.value)
  }
  function handlePasswordChange(event: { value: string }) {
    setPassword(event.value)
  }
  function handleWidthChange(event: { value: string }) {
    setWidth(Number(event.value))
  }
  function handleHeightChange(event: { value: string }) {
    setHeight(Number(event.value))
  }
  function handlePlayerChange(playerName: string, playerChange: PayloadGameInfoPutPlayer) {
    setPlayers(players => players.map(player => {
      if (player.name !== playerName) {
        return player
      }
      return playerChange
    }))
  }
  function handlePlayerDelete(playerName: string) {
    setPlayers(players => players.filter(player => player.name !== playerName))
  }
  function handleAddPlayerClick() {
    setPlayers(players => {
      return players.concat({
        name: resolveNextName(players.map(p => p.name), 'Player'),
        nation: null,
        type: PlayerType.AI,
        level: PlayerLevel.NORMAL
      })
    })
  }
  function handleStartClick() {
    const game: PayloadGameInfoPut = {
      id: nameToId(name),
      name,
      password,
      status: GameStatus.STARTED,
      setup: {
        map: {
          width,
          height
        }
      },
      players
    }
    postGame(service, dispatch, game)
      .then(() => getGames(service, dispatch))
      .then(() => dispatch(AppSlice.actions.setGameId({ gameId: game.id })))
  }
  // #endregion

  // #region > Render
  return (
    <div className='ap-elements-game-setup'>
      <h2>New Game</h2>
      <div>
        <label>Game Name</label>
        <Input
          value={name}
          onChange={handleNameChange}
        />
      </div>
      {nameError ?
        <div className='error'>{nameError}</div>
        : null}
      <div>
        <label>Password</label>
        <Input
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <h3>Map</h3>
      <div>
        <label>Width</label>
        <Input
          type='number'
          value={`${width}`}
          onChange={handleWidthChange}
        />
      </div>
      <div>
        <label>Height</label>
        <Input
          type='number'
          value={`${height}`}
          onChange={handleHeightChange}
        />
      </div>
      {widthError ?
        <div className='error'>{widthError}</div>
        : null}
      {heightError ?
        <div className='error'>{heightError}</div>
        : null}
      <h3>Players ({players.length})</h3>
      {players.map((player, index) =>
        <GameSetupPlayer
          key={`player-${index}`}
          name={player.name}
          nation={player.nation}
          type={player.type}
          level={player.level}
          onChange={(playerChange) => handlePlayerChange(player.name, playerChange)}
          onDelete={() => handlePlayerDelete(player.name)}
        />
      )}
      {playersError ?
        <div className='error'>{playersError}</div>
        : null}
      <div>
        <Button
          onClick={handleAddPlayerClick}
        >
          add
        </Button>
      </div>
      <div>
        <Button
          disabled={disabled}
          onClick={handleStartClick}
        >
          Start
        </Button>
      </div>
    </div>
  )
  // #endregion
}
// #endregion
