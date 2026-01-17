import { useState, useRef } from 'react'
import './App.css'
import AlertMessage from './Alert-Message'

function App() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Check if it's a video file
      if (file.type.startsWith('video/')) {
        setVideoFile(file)
        // Create a URL for the video preview
        const url = URL.createObjectURL(file)
        setVideoUrl(url)
      } else {
        alert('Please upload a valid video file')
      }
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleClearVideo = () => {
    setVideoFile(null)
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl)
      setVideoUrl(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="app-container">
      <h1>Emergency Copilot - Video Upload</h1>

      <div className="upload-section">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleVideoUpload}
          accept="video/*"
          style={{ display: 'none' }}
        />

        <button
          onClick={handleButtonClick}
          className="upload-button"
        >
          📹 Upload Video
        </button>

        {videoFile && (
          <div className="video-info">
            <p><strong>File:</strong> {videoFile.name}</p>
            <p><strong>Size:</strong> {(videoFile.size / 1024 / 1024).toFixed(2)} MB</p>
            <p><strong>Type:</strong> {videoFile.type}</p>
          </div>
        )}
      </div>

      {videoUrl && (
        <div className="video-preview">
          <h2>Video Preview</h2>
          <div className="video-container">
            <video
              src={videoUrl}
              controls
              width="100%"
              style={{ maxWidth: '800px', borderRadius: '8px' }}
            />
            <AlertMessage />
          </div>
          <button onClick={handleClearVideo} className="clear-button">
            Clear Video
          </button>
        </div>
      )}
    </div>
  )
}

export default App
