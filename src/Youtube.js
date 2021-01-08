import React, { Component } from 'react';

/*My cat video API does not require any keys to access it, but it does contain routes to slice. 
Since we want to control how many cat videos load at a time, we must create a query var for route 
?_start=0&_end=query. If you would like to access all videos, delete the route from the link*/
var query = 0;

class Youtube extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            videoLink:[]
        };
        this.clicked = this.clicked.bind(this);
    }

    clicked(){
        /*On every click, we and the number of cat videos to increment by 5. We do this by incrementing the 
        video query by 5 for each click. Then we fetch from the API and store the data in a state*/
        query+=5;
        var curl = 'https://cat-video-api.herokuapp.com/cat_videos?_start=0&_end='+query;
        
        fetch(curl)
            .then((response) => response.json())
            .then((json) => {
                const videoLink = json.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
                this.setState({videoLink});
            })
            .catch((error) => {
            console.error(error);
            });
    }

    render() {
        /*The function below will create divs and embed the videos. We must create a button that fetches 
        the youtube video information for the function. onClick, we must run the clicked function to 
        request from API and save it to this.state.*/ 
        return (
        <div>
            {
                this.state.videoLink.map((link,i)=>{
                    var embedVideo = <div key={i} className="youtube"> 
                    <iframe title="Youtube" width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>;
                    return embedVideo;
                })
            }
            {this.embedVideo}

            <button onClick={this.clicked}>Load Cat Videos</button> 
        </div>
        );
    }
}

export default Youtube;