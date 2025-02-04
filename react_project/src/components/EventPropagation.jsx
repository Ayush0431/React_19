import "./EH.css";
export const EventPropagation = ()=>{

     const handleGrandParent = ()=>{
       
        console.log("GarenParent Clicked!!!");
     }

     const handleParentClick = () => {
        
        console.log("Parent Clicked!!!");
     }

    const handleChildClick =()=>{

        console.log(event);
        event.stopPropagation(); // This will stop the event from bubbling up to the parent element.
        console.log("Child Clicked!!!")
    }

    return (
        <>
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>Child Div</button>
                </div>
            </div>
        </section>
        </>
    )
}