import { Slide } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useRef, useState } from "react"
import { MessageText, PromotionsConainer } from "../../styles/promotions"


const messages = [
    '20% off on your first order!',
    'Summer sale starts now, visit any store.',
    'Please share the website with your friends!'
]

export default function Promotions() {
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000)
        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 3000)
        }, 4000)
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <PromotionsConainer ref={containerRef}>
            <Slide
                container={containerRef.current}
                direction={show ? "left" : 'right'}
                in={show}
                timeout={{
                    enter: 1000,
                    exit: 100
                }}
            >
                <Box display={'flex'} justifyContent='center' alignItems={'center'}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsConainer>
    )
}