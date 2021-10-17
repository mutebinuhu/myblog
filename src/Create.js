import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIspending] = useState(false)
    const history = useHistory()
   const handleSubmit = async (e) =>{
    e.preventDefault();
    const blog = {
      title, body, author
    }
    try{
      setIspending(true);
      await fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })
    setIspending(false)
    console.log("Blog Added")
    history.push("/");
    }catch(err){
      console.log(err.message)
    }
    /*fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log("New Blog Created")
    })
    */
    
    
   }
    
    return (
        <div className="create-blog">
            <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
        required
          value={title} onChange={(e)=>setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body} onChange={(e)=>setBody(e.target.value)}

        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog ....</button>}

      </form>
    </div>
        </div>
     );
}
 
export default Create;