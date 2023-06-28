import { Slide } from '@mui/material' 

export default function SearchBox({showSearchBox, setShowSearchBox}) {
    

    return (
        <Slide direction='down' in={showSearchBox} timeout={500}> 
            
        </Slide>
    )

}