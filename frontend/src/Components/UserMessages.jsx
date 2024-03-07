
const UserMsgs = ({arr,profile,nickname})=>{
    console.log(arr)
    return(
    <div className="flex justify-center items-center flex-col">
                {
                    arr.map((messages)=>{
                        return (
                        <div className="md:w-[90%] bg-slate-300 hover:bg-slate-400 text-slate-900  pt-8 md:flex shadow-lg rounded-lg mt-5 mb-5 pb-8 md:justify-center md:items-start transition-all ease-in-out duration-300">
<img className="w-[50px] h-[50px] rounded-full mr-5" src={messages.image} alt="" />
                        <div className="w-[80%] ">
                               <p className="text-[20px] font-semibold">{messages.name}</p>
                               <p className="mb-3">@{messages.username}</p>
                               <p>{messages.message}</p>
                        </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserMsgs