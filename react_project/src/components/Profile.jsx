function Profile(){
    return (
        <>
        <div>
        <ProfileCard
        name="Ayush Kumar"
        age = {22}
        occupation="Software Engineer"
        greeting = "Hello from the child component"
        >
        </ProfileCard>

        <p>Hello from outside the child component</p>
        <p> This can be accessed by props.children </p>
        <button > Contact</button>
        </div>
        </>

    )
}
export default Profile;

function ProfileCard(props){
    return (
        <>
        <div>

        <h2>Name :{props.name}</h2>
        <p>Age :{props.age}</p>
        <p>Occupation :{props.occupation}</p>
        </div>
        <div>
        <p>{props.children}</p>
        </div>
        </>
    )
}