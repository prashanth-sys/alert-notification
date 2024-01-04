// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <div>
      <Notification>
        <AiFillCheckCircle className="success-icon" />
      </Notification>
      <Notification>Success</Notification>
      <Notification>You can access all the files in the folder</Notification>
      <Notification>
        {' '}
        <GrFormClose />
      </Notification>
    </div>

    <div>
      <Notification>
        <RiErrorWarningFill />
      </Notification>
      <Notification>Error</Notification>
      <Notification>
        Sorry, you are not authorized to have access to delete the file
      </Notification>
      <Notification>
        <GrFormClose />
      </Notification>
    </div>

    <div>
      <Notification>
        <MdWarning />
      </Notification>
      <Notification>Warning</Notification>
      <Notification>
        Viewers of this file can see comments and suggestions
      </Notification>
      <Notification>
        <GrFormClose />
      </Notification>
    </div>

    <div>
      <Notification>
        <MdInfo />
      </Notification>
      <Notification>Info</Notification>
      <Notification>Anyone on the internet can view these files</Notification>
      <Notification>
        <GrFormClose />
      </Notification>
    </div>
  </div>
)
export default AlertNotifications
