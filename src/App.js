
import React, { Component } from "react";
import axios from "axios"; // suggest using axios for downloading the video

class VideoDownloader extends Component {
    constructor(props) {
          super(props);
                this.state = {
                        videoUrl: ""
                              };
                                  }

                                      // adding additional parameters for deep learning, historical data and other tactics
                                          downloadVideo = (videoUrl, AI_data, ombegin, omsize) => {
                                                if (videoUrl === "") {
                                                        return alert("Please provide a valid URL");
                                                              } else {
                                                                      // Use axios with the given videoUrl, AI_data, ombegin, omsize parameters to download the video
                                                                              axios.get(videoUrl, {
                                                                                        params: {
                                                                                                    AI_data: AI_data,
                                                                                                                ombegin: ombegin,
                                                                                                                            omsize: omsize
                                                                                                                                      }
                                                                                                                                              }).then((resp) => {
                                                                                                                                                          // handle the response from the API here
                                                                                                                                                                  }).catch((err) => {
                                                                                                                                                                              // handle the error here
                                                                                                                                                                                      });
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
                                                                                                                                                                                                                                                                                                                    // pass the AI_data, ombegin, omsize parameters to the downloadVideo function
                                                                                                                                                                                                                                                                                                                              <button onClick={() => this.downloadVideo(this.state.videoUrl, AI_data, ombegin, omsize)}>
                                                                                                                                                                                                                                                                                                                                          Download Video
                                                                                                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                            export default VideoDownloader;