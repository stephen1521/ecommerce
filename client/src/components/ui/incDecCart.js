import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { clamp } from './clamp'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'

export default function IncDec() {
    const clampV = clamp(1,10);
    const [value, setValue] = useState(1);
    return (
        <Box  display='flex' height={'45px'} width={'45'}>
            <IconButton sx={{borderRadius: 0}} onClick={() => setValue(clampV(value - 1))}>
                <RemoveIcon />
            </IconButton>
            <Typography variant="h6" sx={{padding: 1}}>
                {value}
            </Typography>
            <IconButton sx={{borderRadius: 0}} onClick={() => setValue(clampV(value + 1))}>
                <AddIcon />
            </IconButton>
        </Box>
    )
}