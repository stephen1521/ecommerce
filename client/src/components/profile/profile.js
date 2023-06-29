import { LoginBoxContainer } from '../../styles/login';
import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Slide } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'
import {authCheck, logout} from '../../redux/authSlice'
import {useEffect} from 'react'

export default function Profile({showProfile, setShowProfile}){
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth.isAuth )

    useEffect( () => {
        dispatch(authCheck())
      }, [auth])

    return (
        <Slide direction='down' in={showProfile} timeout={500}>
            <LoginBoxContainer>
                <h1>Profile</h1>
                <IconButton onClick={() => setShowProfile(false)} sx={{position: 'absolute', top: 10, right: 10}}>
                        <CloseIcon sx={{fontSize: '4rem'}} color='secondary'/>
                </IconButton>
            </LoginBoxContainer>
        </Slide>
    )
}