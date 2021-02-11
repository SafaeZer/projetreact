import React, {Component} from "react";
import ReactDOM from 'react-dom'
import {faThumbsUp, faThumbsDown, faCamera, faFile} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cmnt.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data.json';


class Comment extends Component {
      state = {
       like: 0,
       dislike: 0,
       likeActive: false,
       dislikeActive: false
  };
  setDislike() {
    this.setState({
      dislikeActive: !this.state.dislikeActive,
      dislike: this.state.dislikeActive
        ? this.state.dislike - 1
        : this.state.dislike + 1
    });
  }
  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive 
      ? this.state.like - 1 
      : this.state.like + 1
    });
  }

  handleLike() {
    if (this.state.dislikeActive) {
      this.setLike();
      this.setDislike();
    }
    this.setLike();
  }

  handleDislike() {
    if (this.state.likeActive) {
      this.setDislike();
      this.setLike();
    }
    this.setDislike();
  }
        render(){
            return(
        <>
    <div className="container">
     {Data.posts.map(posts => {
        return(
        <div key={posts.id}>
  <div className="row">
    <div className="col-md-8">
      <div className="post-content">
        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user" className="profile-photo-md pull-left" />
        <div className="post-detail">
          <div className="user-info">
             
            <h5><a href="timeline.html" className="profile-link">{ posts.user }</a> <span className="following">following</span></h5>
            <p className="text-muted">Published a photo about 3 mins ago</p>
            </div>
          </div>
          <div className="reaction">
            <button onClick={() => this.handleLike()}
          className={this.state.likeActive}><FontAwesomeIcon  icon={faThumbsUp} color="green" />{this.state.like}</button>
            <button className={this.state.dislikeActive}
          onClick={() => this.handleDislike()}><FontAwesomeIcon  icon={faThumbsDown} color="red" />{this.state.dislike}</button>
          </div>
          <div className="line-divider" />
          <div className="post">
         
            <p>{ posts.content } </p>

          </div>
          <div className="line-divider" />
        </div>
      </div>
    </div>
  </div>
     )
    })}
</div>
 <div className="container bootdey">
  <div className="col-md-12 bootstrap snippets">
    <div className="panel">
      <div className="panel-body">
        <textarea className="form-control" rows={2} placeholder="What are you thinking?" defaultValue={""} />
        <div className="mar-top clearfix">
          <button className="btn btn-sm btn-primary pull-right" type="submit"><i className="fa fa-pencil fa-fw" /> Share</button>
          <a className="btn trans" href="#"><FontAwesomeIcon  icon={faCamera}/> </a>
           <input type="file"/></div>
      </div>
    </div>
    <div className="panel">
      <div className="panel-body">
        {/* Newsfeed Content */}
        {/*===================================================*/}
        <div className="media-block">
          <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png" /></a>
          <div className="media-body">
            <div className="mar-btm">
              <a href="#" className="btn-link text-semibold media-heading box-inline">Lisa D.</a>
              <p className="text-muted text-sm"><i className="fa fa-mobile fa-lg" /> - From Mobile - 11 min ago</p>
            </div>
            <p>consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            <div className="pad-ver">
              <div className="btn-group">
                <button onClick={() => this.handleLike()}
          className={this.state.likeActive}><FontAwesomeIcon  icon={faThumbsUp} color="green" />{this.state.like}</button>
                <button className={this.state.dislikeActive}
          onClick={() => this.handleDislike()}><FontAwesomeIcon  icon={faThumbsDown} color="red" />{this.state.dislike}</button>
              </div>
                <button type="button" class="btn btn-light">Reply</button>
            </div>
            <hr />
            {/* Comments */}
            <div>
              <div className="media-block">
                <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png" /></a>
                <div className="media-body">
                  <div className="mar-btm">
                    <a href="#" className="btn-link text-semibold media-heading box-inline">Bobby Marz</a>
                    <p className="text-muted text-sm"><i className="fa fa-mobile fa-lg" /> - From Mobile - 7 min ago</p>
                  </div>
                  <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                  <div className="pad-ver">
                    <div className="btn-group">
                      <button onClick={() => this.handleLike()}
          className={this.state.likeActive}><FontAwesomeIcon  icon={faThumbsUp} color="green" />{this.state.like}</button>
                      <button className={this.state.dislikeActive}
          onClick={() => this.handleDislike()}><FontAwesomeIcon  icon={faThumbsDown} color="red" />{this.state.dislike}</button>
                    </div>
                    <button type="button" class="btn btn-light">Reply</button>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="media-block">
                <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                </a>
                <div className="media-body">
                  <div className="mar-btm">
                    <a href="#" className="btn-link text-semibold media-heading box-inline">Lucy Moon</a>
                    <p className="text-muted text-sm"><i className="fa fa-globe fa-lg" /> - From Web - 2 min ago</p>
                  </div>
                  <p>Duis autem vel eum iriure dolor in hendrerit in vulputate ?</p>
                  <div className="pad-ver">
                    <div className="btn-group">
                      <button onClick={() => this.handleLike()}
          className={this.state.likeActive}><FontAwesomeIcon  icon={faThumbsUp} color="green" />{this.state.like}</button>
                      <button className={this.state.dislikeActive}
          onClick={() => this.handleDislike()}><FontAwesomeIcon  icon={faThumbsDown} color="red" />{this.state.dislike}</button>
                    </div>
                    <button type="button" class="btn btn-light"></button>
                     </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
  </div>
 </div>
 
</>
    );
        }
}
export default Comment;