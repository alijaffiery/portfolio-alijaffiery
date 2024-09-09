import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { keyframes } from "@emotion/react";
import Footer from "./Footer";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8a9onvh", "template_zhrxmwl", form.current, {
        publicKey: "UpwQTn08pIuINaRcb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#152536",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          mt= "80px"
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
            style={{
              textAlign: "center",
              color: "white",
              animation: `${slideIn} 1s ease-out`,
            }}
          >
            Contact
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            style={{
              textAlign: "center",
              color: "#01eeff",
              animation: `${slideIn} 1s ease-out`,
            }}

            sx={{
              mb: "16px"
            }}
          >
            Us
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            mb: 4,
            animation: `${fadeIn} 1.5s ease-out`,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Let's Keep in Touch
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            mb={2}
            backgroundColor="#152536"
          >
            <IconButton
                onClick={() => window.open("https://www.facebook.com/ali.jaffiery.94", "_blank")}
                sx={{
                color: "#01eeff",
                borderRadius: "50%",
                border: "2px solid #01eeff",
                "&:hover": { color: "#4267B2" },
                transition: "color 0.3s ease",
                mx: 1,
                animation: `${fadeIn} 1.5s ease-out`,
              }}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
                onClick={() => window.open("https://www.instagram.com/alijaffiery/", "_blank")}
                sx={{
                color: "#01eeff",
                borderRadius: "50%",
                border: "2px solid #01eeff",
                "&:hover": { color: "#E4405F" },
                transition: "color 0.3s ease",
                mx: 1,
                animation: `${fadeIn} 1.5s ease-out 0.2s`,
              }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
                onClick={() => window.open("https://www.linkedin.com/in/ali-jaffiery-08991a214", "_blank")}
                sx={{
                color: "#01eeff",
                borderRadius: "50%",
                border: "2px solid #01eeff",
                "&:hover": { color: "#0A66C2" },
                transition: "color 0.3s ease",
                mx: 1,
                animation: `${fadeIn} 1.5s ease-out 0.4s`,
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => window.open(" https://github.com/alijaffiery", "_blank")}
              sx={{
                color: "#01eeff",
                borderRadius: "50%",
                border: "2px solid #01eeff",
                "&:hover": { color: "#171515" },
                transition: "color 0.3s ease",
                mx: 1,
                animation: `${fadeIn} 1.5s ease-out 0.6s`,
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>

          <Typography variant="body1" gutterBottom>
            Ali Jaffiery
          </Typography>
          <Typography variant="body1" gutterBottom>
            alijaffiery@gmail.com
          </Typography>
          <Typography variant="body1" gutterBottom>
            +92 (304) 512-7214
          </Typography>
          <Typography variant="body1" gutterBottom>
            Islamabad, Pakistan
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
            backgroundColor: "#323846",
            borderRadius: 2,
            boxShadow: 3,
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
            mb: 4,
            animation: `${slideIn} 1s ease-out 0.5s`,
          }}
        >
          <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
            <TextField
              label="Enter Your Name"
              name="to_name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "#01eeff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#01eeff",
                  },
                },
              }}
            />
            <TextField
              label="Email@abc.com"
              name="from_name"
              type="email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "#01eeff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#01eeff",
                  },
                },
              }}
            />
            <TextField
              label="Your Message"
              name="message"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              multiline
              rows={4}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "#01eeff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#01eeff",
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#01eeff",
                color: "black",
                "&:hover": {
                  backgroundColor: "#01a6cc",
                },
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
