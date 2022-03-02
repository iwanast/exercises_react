import React, {useState, useEffect} from "react";

const Search = () => {
  
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() =>{
    const timeoutId = setTimeout(() => {
      if(term){
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`)
        .then(response => response.json())
        .then(data => setResult(data.query.search))
      }
    }, 500);
  
    return (()=>{
      clearTimeout(timeoutId);
    })
  }, [term]);

const renderedResults = result.map(res => {
  return (
    <div key={res.pageid} className="item">
      <div className="right floated content">
        <a 
          className="ui button"
          href={`https://en.wikipedia.org?curid=${res.pageid}`}
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">
          {res.title}
        </div>
        <div>
          <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
        </div>
      </div>
    </div>

  ) 
})

  return (
    <div>
    <div className="ui form">
      <div className="field">
        <label>
          Enter your searchterm
        </label>
        <input
          value={term}
          onChange={e=> setTerm(e.target.value)}>
        </input>
      </div>
    </div>
    <div className="ui celled list">
      {renderedResults}
    </div>
  </div>
  );
}

export default Search; 