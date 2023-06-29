import { useTheme } from "@mui/material/styles"
import { Container, Grid, useMediaQuery } from "@mui/material";
import SingleProducts from "./singleProducts";
import SingleProductsDesktop from "./singleProductDesktop";
import AppPagination from "../pagination/pagination";
import { useState } from "react";

export default function Products() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [products, setProducts] = useState([]);

    const renderProducts = products.map((product) => (
        <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center" >
            {matches ? <SingleProducts product={product} matches={matches}/> : <SingleProductsDesktop product={product} matches={matches}/>  }
        </Grid>
      ));

    return (
       <Container>
            <Grid 
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{ xs: 3, sm: 8, md: 12 }}
            >
                {renderProducts}
            </Grid>
            <AppPagination setProducts={(p) => setProducts(p)}/>
       </Container>
    )
}