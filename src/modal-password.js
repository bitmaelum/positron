import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import MainWindow from './renderer/Components/Password'
import './renderer/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import './renderer/bitmaelum.css'

// import Photon from './electron-photon-react'
import 'electron-photon/dist/PhotonBtnGroup/styles/cocoa.css'
import 'electron-photon/dist/PhotonButton/styles/cocoa.css'
import 'electron-photon/dist/PhotonCircularSlider/styles/cocoa.css'
import 'electron-photon/dist/PhotonContent/styles/cocoa.css'
import 'electron-photon/dist/PhotonCustom/styles/cocoa.css'
import 'electron-photon/dist/PhotonDialog/styles/cocoa.css'
import 'electron-photon/dist/PhotonInput/styles/cocoa.css'
import 'electron-photon/dist/PhotonMenu/styles/cocoa.css'
import 'electron-photon/dist/PhotonMessages/styles/cocoa.css'
import 'electron-photon/dist/PhotonNavigation/styles/cocoa.css'
import 'electron-photon/dist/PhotonNumberInput/styles/cocoa.css'
import 'electron-photon/dist/PhotonOriginal/styles/cocoa.css'
import 'electron-photon/dist/PhotonPanes/styles/cocoa.css'
import 'electron-photon/dist/PhotonProgress/styles/cocoa.css'
import 'electron-photon/dist/PhotonProgressCircle/styles/cocoa.css'
import 'electron-photon/dist/PhotonSlider/styles/cocoa.css'
import 'electron-photon/dist/PhotonSwipe/styles/cocoa.css'
import 'electron-photon/dist/PhotonTab/styles/cocoa.css'
import 'electron-photon/dist/PhotonToolbar/styles/cocoa.css'
import 'electron-photon/dist/PhotonWindow/styles/cocoa.css'
import 'electron-photon/dist/PhotonWindowContent/styles/cocoa.css'

ReactDOM.render(
  <React.StrictMode>
    <Password />
  </React.StrictMode>,
  document.getElementById('root'),
)
