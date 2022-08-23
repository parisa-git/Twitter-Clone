import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux';
import { userAuthActions } from '../store/user-auth';

const LogoutModal = () => {

    const user = useSelector((state) => state.userAuth.user);
    const toggle = useSelector((state) => state.userAuth.LogoutModal);


    const dispatch = useDispatch();

    const signOutHandler = () => {

        dispatch(userAuthActions.signOut(null));
        localStorage.clear();
    }


    return (
        <>
            {toggle &&
                <Modal isOpen={toggle}
                    className="w-[20%]  
                        absolute bottom-20 left-[10%] translate-x-[-40%] 
                        bg-white border-2 border-gray-200 rounded-xl shadow-md p-3" >
                    <div className="w-full gap-5 text-gray-700 flex items-center justify-center  mt-auto border-b border-gray-200 ">
                        <img
                            // src={user.photoURL}
                            alt="user-ime"
                            className="w-10 h-10 rounded-full" />
                        <div className="hidden xl:inline">
                            <h4 className="font-bold">
                                {/* {user.displayName} */}
                            </h4>
                            <p className="text-gray-500 text-sm">
                                {/* {user.email} */}
                            </p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center cursor-pointer hover:bg-gray-200 pt-3 p-3 gap-2'>
                        Log Out : <p className="text-gray-500 text-sm " onClick={signOutHandler} >
                            {/* {user.email} */}
                        </p>
                    </div>
                </Modal>
            }
        </>
    )
}

export default LogoutModal