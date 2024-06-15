import { useEffect, useState } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    role: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put("/api/users/profile", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
        </Typography>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Date of Birth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              fullWidth
              margin="normal"
              disabled
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button
              onClick={() => setEditMode(false)}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </Button>
          </form>
        ) : (
          <div>
            <Typography variant="body1">
              <strong>Name:</strong> {profile.name}
            </Typography>
            <Typography variant="body1">
              <strong>Username:</strong> {profile.username}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {profile.email}
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> {profile.phone}
            </Typography>
            <Typography variant="body1">
              <strong>Gender:</strong> {profile.gender}
            </Typography>
            <Typography variant="body1">
              <strong>Date of Birth:</strong> {profile.dateOfBirth}
            </Typography>
            <Typography variant="body1">
              <strong>Role:</strong> {profile.role}
            </Typography>
            <Button
              onClick={() => setEditMode(true)}
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
          </div>
        )}
      </Box>
    </Container>
  );
};

export default Profile;
