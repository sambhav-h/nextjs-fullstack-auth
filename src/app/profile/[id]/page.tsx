export default function UserProfie({params}:any){

    return(
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1>Profile</h1>
            <br/>
            <p className="text-4xl">profile page 
            <span className="p-2 ml-2 rounded bg-pink-500 text-black"> {params.id}</span>
            </p>
        </div>
    )
}