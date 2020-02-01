import React from 'react'


function BlogList(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )
    return (
        <div>
            <div>
                {sidebar}
            </div>
        </div>
    );
}


export default BlogList