import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/allPosts`);
      setPost(response.data);
    };
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  return (
    <Grid container spacing={4} sx={{ margin: "20px auto", maxWidth: "1200px" }}>
      {/* Home Button */}
      <Grid item xs={12}>
        <Button
          sx={{
            marginBottom: "20px",
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
          variant="contained"
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </Button>
      </Grid>

      {/* Search Bar */}
      <Grid item xs={12}>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{
              width: "100%",
              marginBottom: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>

      {/* Job Listing Cards */}
      {post &&
        post.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                {p.profile}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  fontSize: "1rem",
                  marginBottom: "15px",
                  lineHeight: "1.5",
                }}
              >
                Description: {p.desc}
              </Typography>

              <Typography
                sx={{
                  color: "#333",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                Years of Experience: {p.exp} years
              </Typography>

              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#333",
                  marginBottom: "5px",
                }}
              >
                Skills:
              </Typography>
              {p.techs.map((s, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{ display: "inline", marginRight: "5px" }}
                >
                  {s}.
                </Typography>
              ))}
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Feed;
