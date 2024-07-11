import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ScheduleAppointment = () => {
  const { control, handleSubmit } = useForm();
  const [doctors, setDoctors] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await axios.get("/api/users/doctors");
      setDoctors(response.data);
    };
    fetchDoctors();
  }, []);

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("/api/appointments", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      history.push("/patient-dashboard");
    } catch (error) {
      console.error("Error scheduling appointment:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Schedule an Appointment
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="doctor"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Select Doctor"
              fullWidth
              margin="normal"
            >
              {doctors.map((doctor) => (
                <MenuItem key={doctor._id} value={doctor._id}>
                  {doctor.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="date"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="time"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Time"
              type="time"
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="reason"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label="Reason" fullWidth margin="normal" />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Schedule
        </Button>
      </form>
    </Container>
  );
};

export default ScheduleAppointment;
