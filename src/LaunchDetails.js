import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import axios from 'axios';

function LaunchDetails() {
  const { id } = useParams();
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    const fetchLaunchDetails = async () => {
      const result = await axios.get(`https://api.spacexdata.com/v3/launches/${id}`);
      setLaunch(result.data);
    };

    fetchLaunchDetails();
  }, [id]);

  if (!launch) {
    return <Typography>Loading launch details...</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {launch.mission_name}
      </Typography>
      <Typography variant="body1">
        Flight Number: {launch.flight_number}
      </Typography>
      <Typography variant="body1
    
">
Launch Date: {new Date(launch.launch_date_utc).toLocaleString()}
</Typography>
<Typography variant="body1">
Rocket Name: {launch.rocket.rocket_name}
</Typography>
<Typography variant="body1">
Launch Site: {launch.launch_site.site_name}
</Typography>
<Typography variant="body1">
Launch Success: {launch.launch_success ? 'Yes' : 'No'}
</Typography>
<Typography variant="body1">
Details: {launch.details}
</Typography>
</div>
);
}

export default LaunchDetails;