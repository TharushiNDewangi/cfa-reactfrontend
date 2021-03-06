import React from 'react'
import "./conference.css";
import {Link} from "react-router-dom";

export default function Conference({post}) {
    return (
        <div className="post">
            {post.photo && (
            <img className="postImg"
            src={post.photo}
            />
            )}

            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">
                   {post.title}
                </span>
                </Link>
               
                <br/>
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
                <p className="postDesc">
                   {post.desc}
                </p>
            </div>
        </div>
    )
}
