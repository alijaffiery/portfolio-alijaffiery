import React from "react";
import { motion } from "framer-motion";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box
} from "@mui/material";
import Container from "@mui/material/Container";
import Data from "../Data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      style={{
        backgroundColor: "#323846",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="center"
          mb={2}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: 1,
          }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            textAlign="center"
            color= "white"
            gutterBottom
          >
            My
          </Typography>
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            textAlign="center"
            color="#01eeff"
            gutterBottom
          >
            Projects
          </Typography>
        </Box>
        <Grid
          container
          spacing={5}
          align="center"
          style={{ marginTop: "45px" }}
        >
          <Grid item xs={12}>
            <Slider
              {...settings}
              style={{ position: "relative", backgroundColor: "#152536" }}
            >
              {Data.map((data, index) => (
                <div key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      sx={{
                        maxWidth: 345,
                        ":hover": { boxShadow: 20 },
                        backgroundColor: "#323846",
                      }}
                      style={{ padding: "20px", margin: "10px" }}
                    >
                      <CardActionArea>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          align="center"
                          style={{ color: "white" }}
                        >
                          {data.title}
                        </Typography>
                        <CardContent>
                          <Typography variant="body2" sx={{ color: "white" }}>
                            <ul>
                              {data.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                              ))}
                            </ul>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Projects;
