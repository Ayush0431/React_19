import "./EH.css"

export const EventHandling = ()=>{
    
    function handleClick(){
        alert("My name is Ayush Kumar!!!")  
    }
    // Function component with named function
    const handleOnClick =(event) => {
        console.log(event);
        console.log(event.target)
        console.log(event.type)
        alert("My age is 22!!!")
    }

    const handleWelocmeUser =(User)=>{
        console.log(`Hey ${User}, Welcome!!!`)
    }

    const handleResponse =(Response)=>{
        console.log(`Wait ${Response}`)
    }
    return (
    <>
         {/* This is an exapmple of the named function. */}
        <button onClick={()=>handleClick()}>Function</button>
        <br/>
        {/* This is an example of the fat arrow function. */}
        <button onClick={ handleOnClick}>Hello world</button>

        <button onClick={() => handleWelocmeUser("Ayush")}>
            Ayush
        </button>

        <button onClick={()=> handleResponse("Welcome to the world of javascript!!!")}>Response</button>
       

    </>
    );
}