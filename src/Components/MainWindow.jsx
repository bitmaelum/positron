import React from 'react'
import Split from 'react-split'
import icon from '../images/logo.svg'
import Logo from '../images/splash.svg'

const buttons = [
  { icon: 'mdi mdi-home', text: 'home' },
  { icon: 'mdi mdi-folder', text: 'folder' },
  { icon: 'mdi mdi-cloud', text: 'cloud' },
  { icon: 'mdi mdi-content-copy', text: 'copy' },
  { icon: 'mdi mdi-shuffle', text: 'shuffle' },
  { icon: 'mdi mdi-trash-can', text: 'delete' },
]

const openVault = () => {
  const { ipcRenderer } = window.require('electron')
  ipcRenderer.send('openVault')

  ipcRenderer.on('openVaultResponse', (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
}

// eslint-disable-next-line react/prefer-stateless-function
class Toolbar extends React.Component {
  componentDidMount() {
    openVault()
  }

  render() {
    return (
      <tool-bar type="header">
        <div className="toolbar-actions">
          <div className="btn-group">
            {buttons.map(({ ico }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <button type="submit" key={index} className="btn btn-default">
                <span className={ico} />
              </button>
            ))}
          </div>

          <button type="submit" className="btn btn-default btn-dropdown pull-right">
            <span className="mdi mdi-speaker" />
          </button>
        </div>
      </tool-bar>
    )
  }
}

function Tabs() {
  return (
    <tab-group>
      <tab-item type="fixed" className="active">
        Fixed Tab
      </tab-item>
      <tab-item>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="submit" action="close" />
        Tab 2
      </tab-item>
      <tab-item>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="submit" action="close" />
        Tab 3
      </tab-item>
      <tab-item type="fixed" action="add" />
    </tab-group>
  )
}

function Footer() {
  return (
    <tool-bar type="footer">
      <small>&nbsp; <img
        alt="Logo"
        className="align-content-center"
        style={{ height: '20px', padding: '4px' }}
        src={icon}
      /> BitMaelum Client - Ready for action
      </small>
    </tool-bar>
  )
}

function MessageDetails() {
  return (
    <div className="card-body logo">
      <img src={Logo} alt="Logo" />
    </div>
  )
}

function MessageList() {
  return (
    <table className="table-striped">
      <thead>
        <tr>
          <th style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-email-mark-as-unread" />
          </th>
          <th style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-attachment" />
          </th>
          <th>Subject</th>
          <th>From</th>
          <th>Address</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bm_unread">
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-email-mark-as-unread" />
          </td>
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-attachment" /></td>
          <td>For when you need bitmaelum</td>
          <td>Sharon M. Cortese</td>
          <td>sc@cortese!</td>
          <td>20:41</td>
        </tr>
        <tr className="bm_read">
          <td style={{ width: '10px', padding: '2px 5px' }}>&nbsp;</td>
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-attachment" /></td>
          <td>How to get bitmaelum</td>
          <td>Darla Walter</td>
          <td>darlawalterus!</td>
          <td>19:14</td>
        </tr>
        <tr className="bm_unread">
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-email-mark-as-unread" />
          </td>
          <td style={{ width: '10px', padding: '2px 5px' }}>&nbsp;</td>
          <td>How to take the headache out of bitmaelum</td>
          <td>Stuart M. Davenport</td>
          <td>sdavenport!</td>
          <td>yesterday</td>
        </tr>
        <tr className="bm_unread">
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-email-mark-as-unread" />
          </td>
          <td style={{ width: '10px', padding: '2px 5px' }}>&nbsp;</td>
          <td>4 questions answered about bitmaelum</td>
          <td>Joan L. Romain</td>
          <td>joan84!</td>
          <td>yesterday</td>
        </tr>
        <tr className="bm_read">
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-email-mark-as-unread" />
          </td>
          <td style={{ width: '10px', padding: '2px 5px' }}>&nbsp;</td>
          <td>Little known ways to bitmaelum</td>
          <td>John Doe</td>
          <td>johndoe!</td>
          <td>monday</td>
        </tr>
        <tr className="bm_unread">
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-email-mark-as-unread" />
          </td>
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-attachment" /></td>
          <td>How to make a career out of your passion for bitmaeulum.</td>
          <td>Robert Massey</td>
          <td>robert@massey!</td>
          <td>monday</td>
        </tr>
        <tr className="bm_unread">
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-email-mark-as-unread" />
          </td>
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-attachment" /></td>
          <td>It wasn’t until 5 years into my career that I learned about bitmaeulum.</td>
          <td>Sharon Fung</td>
          <td>sharon.fung32!</td>
          <td>Oct 13, 2015</td>
        </tr>
        <tr className="bm_unread">
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-email-mark-as-unread" />
          </td>
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-attachment" /></td>
          <td>This might be the best way to get bitmaelum</td>
          <td>Constance Salas</td>
          <td>csalas!</td>
          <td>Oct 13, 2015</td>
        </tr>
        <tr className="bm_unread">
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-email-mark-as-unread" />
          </td>
          <td style={{ width: '10px', padding: '2px 5px' }}><span className="mdi mdi-attachment" /></td>
          <td>Your documents</td>
          <td>John Doe</td>
          <td>johndoe!</td>
          <td>Oct 13, 2015</td>
        </tr>
      </tbody>
    </table>
  )
}

function WindowContent() {
  return (
    <window-content>
      <div className="pane-group">
        <div className="pane pane-sm sidebar">
          <nav-group>
            <h5 className="nav-group-title">Accounts</h5>
            <nav-item className="active">
              <span className="mdi mdi-cloud" />&nbsp;
              jthijssen!
            </nav-item>
            <nav-item className="">
              <span className="mdi mdi-cloud" />&nbsp;
              joshua!
            </nav-item>
            <nav-item className="">
              <span className="mdi mdi-cloud" />&nbsp;
              joshua@bitmaelum!
            </nav-item>

            <nav-item className="">
              <span className="mdi mdi-magnify" />&nbsp;
              Search accounts
            </nav-item>
          </nav-group>

          <nav-group>
            <h5 className="nav-group-title">Mailboxes</h5>
            <nav-item className="">
              <span className="mdi mdi-inbox" style={{ color: '#fc605b' }} />&nbsp;
              Inbox
              <span className="badge badge-info pull-right">1</span>
            </nav-item>
            <nav-item className="">
              <span className="mdi mdi-inbox" style={{ color: '#fdbc40' }} />&nbsp;
              Outbox
            </nav-item>
            <nav-item className="">
              <span className="mdi mdi-trash-can" style={{ color: '#34c84a' }} />&nbsp;
              Trash
              <span className="badge badge-info pull-right">32</span>
            </nav-item>
          </nav-group>

        </div>
        {/* <div className="pane" style={{height: "100%"}}> */}
        <Split
          sizes={[50, 50]}
          minSize={175}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="vertical"
          cursor="row-resize"
          className="bm-pane"
        >
          <div className="bm-message-list">
            <MessageList />
          </div>
          <div className="bm-message-details">
            <MessageDetails />
          </div>
        </Split>
        {/* </div> */}

      </div>
    </window-content>
  )
}

function MainWindow() {
  return (
    <ph-window>
      <Toolbar />
      <Tabs />
      <WindowContent />
      <Footer />
    </ph-window>
  )
}

export default MainWindow
