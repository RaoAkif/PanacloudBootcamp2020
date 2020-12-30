import React from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import './style.css'

interface Props {
  data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => (
  <div className='Launches'>
    <h3>All Space X Launches</h3>
    <ol className='LaunchesOL'>
      {!!data.launches && data.launches.map(
          (launch, i) =>
            !!launch && (
          <li key={i} className='LaunchItem'>
            {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)})
          </li>
        )
      )}
    </ol>
  </div>
);

export default Launch; 