import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress } from '@material-ui/core';
import axios from 'axios';


function LaunchList() {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/launches');
        setLaunches(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching launches:', error);
        setIsLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <CircularProgress />
      </div>
    );
  }

  if (launches.length === 0) {
    return <Typography>No launches found.</Typography>;
  }

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mission Name</TableCell>
              <TableCell>Flight Number</TableCell>
              <TableCell>Launch Date</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {launches.map((launch) => (
              <TableRow key={launch.flight_number}>
                <TableCell>
                  <Link to={`/launches/${launch.flight_number}`}>{launch.mission_name}</Link>
                </TableCell>
                <TableCell>{launch.flight_number}</TableCell>
                <TableCell>{new Date(launch.launch_date_utc).toLocaleString()}</TableCell>
                <TableCell>{launch.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default LaunchList;
