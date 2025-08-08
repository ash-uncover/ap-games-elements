import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { DataStates } from '@sol.ac/js-utils'
import { useClasses } from '@sol.ac/react-commons'
// Utils
import { GamesSelectors } from '../../../store/games/games.selectors'
import { getGames, deleteGame } from '../../../service/GameServiceHelper'
import { GameService } from '../../../service/GameService'
// CSS
import './Games.css'

// #region Declaration
interface GamesProperties {
  service: GameService
}
// #endregion

// #region Component
export const Games = ({
  service
}: GamesProperties) => {

  // #region > Hooks
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const state = useSelector(GamesSelectors.getGamesState)
  const error = useSelector(GamesSelectors.getGamesError)
  const games = useSelector(GamesSelectors.games)

  useEffect(() => {
    if (state === DataStates.NEVER) {
      getGames(service, dispatch)
    }
  }, [state])

  const { classes } = useClasses(['ap-elements-games'])
  // #endregion

  // #region > Events
  function handleCreateClick() {
    navigate('new');
  }
  function handleToGameClick(gameId: string) {
    navigate(gameId);
  }
  function handleDeleteGameClick(gameId: string) {
    deleteGame(service, dispatch, gameId)
  }
  function handleBackClick() {
    navigate('/');
  }
  // #endregion

  // #region > Render
  switch (state) {
    case DataStates.NEVER:
    case DataStates.FETCHING:
    case DataStates.FETCHING_FIRST: {
      return (
        <div className={classes}>
          Loading
        </div>
      )
    }
    case DataStates.OUTDATED:
    case DataStates.SUCCESS: {
      return (
        <div className={classes}>
          <h2>Games</h2>
          <div>
            <button onClick={handleCreateClick}>
              Create
            </button>
          </div>
          {Object.values(games).map(game => {
            return (
              <div key={game.id}>
                {game.name}
                <button onClick={() => handleToGameClick(game.id)}>
                  To Game
                </button>
                <button onClick={() => handleDeleteGameClick(game.id)}>
                  Delete
                </button>
              </div>
            )
          })}
          <div>
            <button onClick={handleBackClick}>
              Back
            </button>
          </div>
        </div>
      )
    }
    case DataStates.FAILURE: {
      return (
        <div className={classes}>
          Error {error}
        </div>
      )
    }
  }
  // #endregion
}
// #endregion
