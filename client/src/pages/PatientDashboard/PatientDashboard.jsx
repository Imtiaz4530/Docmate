import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LoadingSpinner from "../../components/Common/LoadingSpinner";
import useFetchAppointments from "../../hooks/fetchAppointments/useFetchAppointments";

const statusStyles = {
  pending: {
    borderLeft: "5px solid orange",
  },
  confirmed: {
    borderLeft: "5px solid green",
  },
  completed: {
    borderLeft: "5px solid blue",
  },
  cancelled: {
    borderLeft: "5px solid red",
  },
};

const PatientDashboard = () => {
  const { appointments, loading } = useFetchAppointments();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Your Appointments
      </Typography>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Box maxHeight="60vh" overflow="auto">
          {appointments.length === 0 ? (
            <Typography variant="body1" color="textSecondary">
              You have no appointments.
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {appointments.map((appointment) => (
                <Grid item xs={12} key={appointment._id}>
                  <Card elevation={3} style={statusStyles[appointment.status]}>
                    <CardContent>
                      <Box display="flex" alignItems="center" mb={2}>
                        <AssignmentIndIcon
                          color="primary"
                          style={{ marginRight: 8 }}
                        />
                        <Typography variant="h6">{`Dr. ${appointment.doctor.name}`}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={1}>
                        <CalendarTodayIcon
                          color="action"
                          style={{ marginRight: 8 }}
                        />
                        <Typography variant="body2">
                          {`Date: ${new Date(
                            appointment.date
                          ).toLocaleDateString()}`}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={1}>
                        <AccessTimeIcon
                          color="action"
                          style={{ marginRight: 8 }}
                        />
                        <Typography variant="body2">
                          {`Time: ${appointment.time}`}
                        </Typography>
                      </Box>
                      <Typography variant="body2">{`Status: ${appointment.status}`}</Typography>
                      <Divider sx={{ mt: 2 }} />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </Container>
  );
};

export default PatientDashboard;
