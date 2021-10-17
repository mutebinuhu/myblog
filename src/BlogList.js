import { Link } from "react-router-dom";

const BlogList = (props) => {
    const {blogs, title, handleClick} = props
    return ( 
        <div className="list-preview">
            <h2>{title}</h2>
           <div className="blog-list">
           {
                blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id }>
                      <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p><strong>Blog by :</strong> {blog.author}</p>
                      </Link>
                    </div>
                ))
            }
           </div>
        </div>
     );
}
 
export default BlogList;