import { useEffect, useState } from "react";

function Filters() {
  const {data: filters} = useFetch('data/filters.json');
  console.log(filters);
  return (<></>)
  ;
}

export default Filters;


function useFetch (url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await fetch(url,{
            headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        )
        const data = await res.json()
        setData(data);
        setIsLoading(false);
      }catch (e) {
        setError(e);
      }
    })()

  },[url])
  return {data, isLoading, error}
}