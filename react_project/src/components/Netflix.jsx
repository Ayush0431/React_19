import Seriesdata from "../Api/Seriesdata.json";
import { SeriesCard } from "./SeriesCard";


export const Netflix = () => {
  return (
    <ul className="grid grid-three-cols">
      {Seriesdata.map((curElement) =>  // this is called looping in JSX through map function
        <SeriesCard key={curElement.id} curElement={curElement}/>
      )}
    </ul>
  );
};

export default Netflix;
