import React from 'react'
import * as ReactI18n from 'react-i18next'
import {
  Panel,
  ShellPage,
  useClasses
} from '@sol.ac/react-commons'
import { 
  GameSettingGeneralLangSelect 
} from '@sol.ac/games-common'
//
import { Language, Languages } from '../../../../lib/utils/language'
// CSS
import './HomeSettingsGame.css'

// #region Declaration
interface HomeSettingsGameProperties {
}
// #endregion

// #region Component
export const HomeSettingsGame = ({
}: HomeSettingsGameProperties) => {

  // #region > Hooks
  const { t } = ReactI18n.useTranslation()
  const { classes } = useClasses(['ap-elements-home-settings-game'])
  // #endregion

  // #region > Events
  function handleLangSelectChange(event: { value: string}) {

  }
  // #endregion

  // #region > Render
  return (
    <ShellPage>
      <main className={classes}>
        <Panel title={t('home.settings.game.title')} />

        <Panel title={t('home.settings.game.lang.title')}>
          <GameSettingGeneralLangSelect
            values={Languages}
          />
        </Panel>

        <Panel title={t('home.settings.game.theme.title')}>
        </Panel>
      </main>
    </ShellPage>
  )
  // #endregion
}
// #endregion
