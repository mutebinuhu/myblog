import{useState, useEffect} from 'react';
const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(async() =>{
        /*fetch("http://localhost:8000/blogs")
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data)
            setBlogs(data)
            setisLoading(false)
            })
            .catch(err=>console.log(err))
            */
           const abortCont = new AbortController()
           try{
               let response = await fetch(url, {signal: abortCont.signal});
               if(!response.ok){
                   throw Error("Could not return the data")
               }
               const data = await response.json();
               setData(data)
               setisLoading(false)
          
           }catch(err){
            if(err.name === 'AbortError'){
                console.log("Aborted");
            }else{
                setError(err.message)
                setisLoading(false)
            }
           }
           return () => abortCont.abort();
       }, [url])
       return{data, error, isLoading}
}
export default useFetch;