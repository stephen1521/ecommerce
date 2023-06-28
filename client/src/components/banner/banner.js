import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Bannercontainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";

export default function Banner(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Bannercontainer>
            <BannerImage src="/images/banner/banner.jpg"/>
            <BannerContent>
                <Typography variant="h6">
                    Huge Collection
                </Typography>
                <BannerTitle>
                    New Stuff
                </BannerTitle>
                <BannerDescription variant="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </BannerDescription>
                <BannerShopButton color='primary'>Shop Now</BannerShopButton>
            </BannerContent>
        </Bannercontainer>
    )
}