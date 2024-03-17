import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SettingsData = ()=>{
    return(
        <>
        <DeleteAccount/>
        </>
    )
}

const DeleteAccount = ()=>{
   
const location = useLocation()
const username = location.state.username
const navigate = useNavigate()


    const handleDelete = ()=>{
        console.log('elete')
       Swal.fire({
        title: 'Delete Account',
        text: 'This is the last time you can change your mind. After pressing the button everything is gone.',
        icon: 'error'
       }).then(async(result)=>{
          if(result.isConfirmed){
           const deleteUser = await axios.delete(`http://localhost:3000/api/v1/user/deleteUser?username=${username}`)
           console.log(deleteUser)
           navigate('/')
          }
       })
    }

    return(
        <div>
           <div className="flex h-[50px]  md:justify-around items-center  mt-5 mb-5">
            <p>Delete your account</p>
            <button onClick={handleDelete} className="w-[70px] h-[30px] rounded-md bg-slate-900 text-slate-200">Delete</button>
           </div>
        </div>
    )
}

export default SettingsData