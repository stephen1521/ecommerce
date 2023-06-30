import { LoginBoxContainer } from '../../styles/login';
import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Slide, Typography, Box } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'
import {authCheck, logout} from '../../redux/authSlice'
import {useEffect} from 'react'

export default function Profile({showProfile, setShowProfile}){
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth.isAuth )
    // console.log(users);
    useEffect( () => {
        dispatch(authCheck())
      }, [auth])
    //   console.log(auth);
    return (
        <Slide direction='down' in={showProfile} timeout={500}>
            <LoginBoxContainer>
                <IconButton onClick={() => setShowProfile(false)} sx={{position: 'absolute', top: 10, right: 10}}>
                        <CloseIcon sx={{fontSize: '4rem'}} color='secondary'/>
                </IconButton>
                {auth ? 
                <>
                <Box display={'flex'} flexDirection={'column'}>
                <Typography variant='h4' padding={'10px'}>Profile</Typography>
                <Typography variant='subtitle2' padding={'10px'}>Email: {users.email}</Typography>
                <Typography variant='subtitle2' padding={'10px'}>First Name: {users.firstname}</Typography>
                <Typography variant='subtitle2' padding={'10px'}>Last Name:{users.lastname}</Typography>
                </Box>
                </> 
                : <h3>Please Create an Account or Login to view your Profile</h3>}
            </LoginBoxContainer>
        </Slide>
    )
}