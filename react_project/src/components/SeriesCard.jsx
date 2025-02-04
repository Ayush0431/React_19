export const SeriesCard = (props) => {
    console.log(props.curElement)
    const { img_url , name , rating , description ,cast , genre ,watch_url}= props.curElement;

    const btn_style={
      padding:'1.2rem 2.4rem',
      border: 'none',
      backgroundColor: `${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
      fontSize:"16px",
      color:'white',
      fontWeight :"bold",
      cursor:"pointer",

    }

    return (
        
        <li className="card">
          <div >
            <img
              src={img_url}
              alt={name}
              width="50%"
              height="50%"
            />
          </div>
          {/* <div className="card-content"> */}
          <div className="flex flex-col px-6 p-6 m-3 gap-8">
            
          <h2>Name: {name}</h2>
          <h3> Rating: <span className= {rating>=8.5? "super_hit":"average"}> {rating}</span></h3>
          <p><strong>Summary: </strong>{description}</p>
          <p className="text-3xl font-bold">Genre: {genre.join(", ")}</p>
          <p className="text-3xl font-bold">Cast: {cast.join(", ")}</p>
          <a
            href={watch_url}
            target="_blank"
            rel="noopener noreferrer"
          >
           <button style={btn_style}> Watch Now </button>
          </a>
          </div>
        </li>
      );
}