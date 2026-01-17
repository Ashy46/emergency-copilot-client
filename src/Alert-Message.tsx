import './AlertMessage.css'

interface AlertMessageProps {
  title?: string;
  message: string;
}

function AlertMessage({
  title = "🚨 Emergency Alert",
  message = "No message provided"
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
