import React from 'react'
import * as ReactI18n from 'react-i18next'
import {
  Panel,
  ShellPage,
  useClasses
} from '@sol.ac/react-commons'
import {
  GameSettingAudioGameSwitch,
  GameSettingAudioGameVolumeSlider,
  GameSettingAudioMasterSwitch,
  GameSettingAudioMasterVolumeSlider,
  GameSettingAudioMusicSwitch,
  GameSettingAudioMusicVolumeSlider,
  GameSettingAudioUiSwitch,
  GameSettingAudioUiVolumeSlider
} from '@sol.ac/games-common'
// CSS
import './HomeSettingsAudio.css'

// #region Declaration
interface HomeSettingsAudioProperties {
}
// #endregion

// #region Component
export const HomeSettingsAudio = ({
}: HomeSettingsAudioProperties) => {

  // #region > Hooks
  const { t } = ReactI18n.useTranslation()
  const { classes } = useClasses(['ap-elements-home-settings-audio'])
  // #endregion

  // #region > Events
  // #endregion

  // #region > Render
  return (
    <ShellPage>
      <main className={classes}>
        <Panel title={t('home.settings.audio.title')} />

        <Panel title={t('home.settings.audio.master.title')}>
          <GameSettingAudioMasterSwitch
            label={t('home.settings.audio.master.volume.text')}
          />
          <GameSettingAudioMasterVolumeSlider
            label={t('home.settings.audio.master.volume.text')}
          />
        </Panel>

        <Panel title={t('home.settings.audio.music.title')}>
          <GameSettingAudioMusicSwitch
            label={t('home.settings.audio.music.volume.text')}
          />
          <GameSettingAudioMusicVolumeSlider
            label={t('home.settings.audio.music.volume.text')}
          />
        </Panel>

        <Panel title={t('home.settings.audio.game.title')}>
          <GameSettingAudioGameSwitch
            label={t('home.settings.audio.game.volume.text')}
          />
          <GameSettingAudioGameVolumeSlider
            label={t('home.settings.audio.game.volume.text')}
          />
        </Panel>

        <Panel title={t('home.settings.audio.ui.title')}>
          <GameSettingAudioUiSwitch
            label={t('home.settings.audio.ui.volume.text')}
          />
          <GameSettingAudioUiVolumeSlider
            label={t('home.settings.audio.ui.volume.text')}
          />
        </Panel>
      </main>
    </ShellPage>
  )
  // #endregion
}
// #endregion
