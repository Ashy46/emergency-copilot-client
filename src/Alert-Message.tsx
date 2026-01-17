import './AlertMessage.css'

interface AlertMessageProps {
  title?: string;
  message?: string;
}

function AlertMessage({
  title = "🚨 Emergency Alert",
  message = "This is a placeholder message that displays over the video. Emergency services have been notified. Help is on the way. Stay calm and follow safety protocols."
}: AlertMessageProps) {
  return (
    <div className="message-overlay">
      <div className="message-box">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default AlertMessage
