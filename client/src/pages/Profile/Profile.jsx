import { useEffect, useState } from "react";
import { Container, Box, Button, Grid, Avatar, Paper } from "@mui/material";
import { useStoreState } from "easy-peasy";

import CustomTextField from "../../components/Common/CustomTextField";
import CustomTypography from "../../components/Common/CustomTypo";
import axiosInstance from "../../api/axiosInstance";

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

  const authUser = useStoreState((state) => state.user);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/profile/${authUser._id}`
        );
        setProfile(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [authUser._id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(
        `/api/profile/update/${authUser._id}`,
        formData
      );
      console.log(response);
      setProfile(response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box display="flex" justifyContent="center" mb={3}>
          <Avatar
            alt="Profile Picture"
            src={profile.avatarUrl}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
        </Box>
        <Box display="flex" justifyContent="center" mb={3}>
          <CustomTypography variant="h4" component="h1" gutterBottom>
            Profile
          </CustomTypography>
        </Box>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <CustomTextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                gridProps={{ xs: 12, sm: 6 }}
              />
              <CustomTextField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                gridProps={{ xs: 12, sm: 6 }}
              />
              <CustomTextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                gridProps={{ xs: 12, sm: 6 }}
              />
              <CustomTextField
                label="Phone"
                name="phone"
                value={formData.phone.toString()}
                onChange={handleChange}
                gridProps={{ xs: 12, sm: 6 }}
              />
              <CustomTextField
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                gridProps={{ xs: 12, sm: 6 }}
              />
              <CustomTextField
                label="Date of Birth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                gridProps={{ xs: 12, sm: 6 }}
                disabled
              />
              <CustomTextField
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                disabled
                gridProps={{ xs: 12 }}
              />
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Save
                </Button>
                <Button
                  onClick={() => setEditMode(false)}
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomTypography variant="body1">
                <strong>Name:</strong> {profile.name || authUser.name}
              </CustomTypography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTypography variant="body1">
                <strong>Username:</strong>{" "}
                {profile.username || authUser.username}
              </CustomTypography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTypography variant="body1">
                <strong>Email:</strong> {profile.email || authUser.email}
              </CustomTypography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTypography variant="body1">
                <strong>Phone:</strong> {profile.phone || authUser.phone}
              </CustomTypography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTypography variant="body1">
                <strong>Gender:</strong> {profile.gender || authUser.gender}
              </CustomTypography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTypography variant="body1">
                <strong>Date of Birth:</strong>{" "}
                {profile.dateOfBirth || authUser.dateOfBirth}
              </CustomTypography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTypography variant="body1">
                <strong>Role:</strong> {profile.role || authUser.role}
              </CustomTypography>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => setEditMode(true)}
                variant="contained"
                color="primary"
                fullWidth
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Container>
  );
};

export default Profile;
