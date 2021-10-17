import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();  
    
    const {data, isLoading} = useFetch("http://localhost:8000/blogs/"+id);
    const handleDelete = () =>{
        fetch("http://localhost:8000/blogs/"+id, {
            method:'DELETE'
        }).then(()=>{
            console.log("Deleted");
            history.push("/")

        })
    }
    console.log("data : ", data)
    return ( 
        <div className="blog-preview">
            {isLoading && <div>Loading...</div>}
            <h3>Blog Details -  {id}</h3>
            <div>{data && (
                <div>
                    <article>
                        {data.body}
                    </article>
                <p><strong>Author:</strong>{data.author}</p>
                <button onClick={handleDelete}>Delete</button>
                </div>
            )}</div>
 
        </div>
     );
}
export default BlogDetails;