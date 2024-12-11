import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({
    name : 'user',
    initialState:{
        users:[{
            email :'admin@gmail.com',
            password :'admin',
            name:'admin'
        }],
        message :''
    },
    reducers:{
        addUser :(state,action)=>{
            state.users.push(action.payload)
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
       
    }
})

export const checkUser = (payload, navigate) => (dispatch, getState) => {
    console.log(getState()); // Debug state structure
    const { users } = getState().users; 
    const CheckUser = users.find(
        (user) =>
            user.email === payload.email && user.password === payload.password
    );

    if (CheckUser) {
        sessionStorage.setItem('login', CheckUser.name);
        alert('Successfully Logged in');
        
        navigate('/'); 
    } else {
        alert('Failure');
    }
};



export default UserSlice.reducer
export const {addUser} = UserSlice.actions