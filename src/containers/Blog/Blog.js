import React, { Component } from "react";
import axiosInstance from "../../axios";
import Post from "../../components/Post/Post";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import { Route, Routes, Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to ={{
                  pathname : "/new-post",
                  hash: "#submit",
                  search: "?submit=true"
                }}>
                  New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" exact Component={Posts} />
          <Route path="/new-post" Component={NewPost} />
        </Routes>
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section> */}
      </div>
    );
  }
}

export default Blog;
