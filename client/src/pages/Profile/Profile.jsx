import { Container, Box, Button, Grid, Avatar, Paper } from "@mui/material";

import CustomTextField from "../../components/Common/CustomTextField";
import CustomTypography from "../../components/Common/CustomTypo";
import useProfile from "../../hooks/profile/useProfile";

const Profile = () => {
  const {
    authUser,
    editMode,
    formData,
    handleChange,
    handleSubmit,
    profile,
    setEditMode,
    dob,
  } = useProfile();

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box display="flex" justifyContent="center" mb={3}>
          <Avatar
            alt="Profile Picture"
            src={profile.profilePic}
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
                <strong>Date of Birth:</strong> {dob}
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
