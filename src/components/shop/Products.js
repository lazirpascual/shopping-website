import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";

// Material-UI import
import { Typography, CardMedia, CardContent, Card } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F5F5F5",
    maxWidth: 320,
    margin: 20,
  },
  media: {
    height: 225,
    paddingTop: 50,
    paddingBottom: 50,
  },
  content: {
    marginTop: 200,
  },
});

const Products = () => {
  const classes = useStyles();
  const { products } = useContext(ShopContext);

  return (
    <Container className={classes.content}>
      <Grid container>
        {products.items.map((product) => (
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              component="img"
              src={product.imgPath}
              title={product.name}
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ${product.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
