import * as React from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";

import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function MovieDetails({ url }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Container>
        <Typography variant="h1" textAlign="center">
          Title
        </Typography>
        <Card>
          <CardContent>
            <Box>
              <Grid container spacing={1} sx={{ width: "100%" }}>
                <Grid
                  item
                  xs={12}
                  md={3}
                  component="img"
                  src="https://m.media-amazon.com/images/M/MV5BNGU5NzVkMmEtMjg4MC00MmY1LWJkYmQtYWEwZTFlODBiMzFlXkEyXkFqcGdeQXVyMTA2ODkwNzM5._V1_Ratio0.7189_AL_.jpg"
                />
                {/* <Box component="img" src={`${url}`} /> */}
                {/* <Box
                  sx={{ height: "100%" }}
                  component="img"
                  src="https://m.media-amazon.com/images/M/MV5BNGU5NzVkMmEtMjg4MC00MmY1LWJkYmQtYWEwZTFlODBiMzFlXkEyXkFqcGdeQXVyMTA2ODkwNzM5._V1_Ratio0.7189_AL_.jpg"
                />
              </Grid> */}
                <Grid xs={12} md={9} item sx={{ height: "100%" }}>
                  <Typography
                    component="iframe"
                    sx={{ height: "490px", width: "100%" }}
                    src="https://www.youtube.com/embed/a8Gx8wiNbs8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Grid>
                <Grid xs={12} item>
                  <Divider />
                  <Typography variant="h6" fontWeight="700">
                    Title
                  </Typography>
                  <Typography variant="body" textAlign="center">
                    Lorem
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Divider />
                  <Typography variant="h6" fontWeight="700">
                    Title
                  </Typography>
                  <Typography variant="body" textAlign="center">
                    Lorem
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Divider />
                  <Typography variant="h6" fontWeight="700">
                    Story line
                  </Typography>
                  <Typography variant="body" textAlign="center">
                    Lorem
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <ReadMoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <Box
                            sx={{
                              height: "200px",
                              width: "100%",
                              backgroundColor: "blue",
                            }}
                          ></Box>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <Box
                            sx={{
                              height: "200px",
                              width: "100%",
                              backgroundColor: "blue",
                            }}
                          ></Box>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <Box
                            sx={{
                              height: "200px",
                              width: "100%",
                              backgroundColor: "blue",
                            }}
                          ></Box>
                        </Card>
                      </Grid>
                    </Grid>
                  </Collapse>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
