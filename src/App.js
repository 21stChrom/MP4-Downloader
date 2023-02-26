

import React, { Component } from "react";

class VideoDownloader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        videoUrl: ""
      };
    }
  
    downloadVideo = videoUrl => {
      if (videoUrl === "") {
        return alert("Please provide a valid URL");
      } else {
        // Use any JavaScript library (axios, request, etc.) with the given videoUrl
        // as the parameter to download the video
      }
    };
  
    handleInputChange = event => {
      this.setState({
        videoUrl: event.target.value
      });
    };
  
    render() {
      return (
        <div>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Insert Video URL"
          />
          <button onClick={() => this.downloadVideo(this.state.videoUrl)}>
            Download Video
          </button>
        </div>
      );
    }
  }
  
  export default VideoDownloader;
