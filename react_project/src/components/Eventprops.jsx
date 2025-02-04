export const Eventprops = () =>{

    const HandleWelcomeUser = (user) =>{

         alert(`Welcome ${user}!`);
    
    }
    const handleHover = () =>{

         alert(`Welcome this is the hover function !`);
    
    }

    return (
        
        <>
        <WelocmeUser onClick={()=> HandleWelcomeUser('Anagha')}
         onMouseover= {handleHover} />
        </>
    )
}

export const WelocmeUser = (props) =>{
    
    const handleGreetings = () =>{
       
        console.log("Hey this is a function from the child component!!!");
        props.onClick();
    }

    return (
        <>

        <button onClick={props.onClick}>  Click me </button>
        <br/>
        <button onMouseover={props.onMouseover}>  Hover </button><br/>
        <button onMouseEnter={handleGreetings}> Greeting  </button>
        
        
        </>
    )
}