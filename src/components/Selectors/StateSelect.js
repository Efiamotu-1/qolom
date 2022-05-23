import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function StateSelect() {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
     
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            required
            label="Choose a State"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Abia' },
  { title: 'Adamawa' },
  { title: 'Akwa Ibom' },
  { title: 'Anambra' },
  { title: 'Bauchi' },
  { title: 'Bayelsa' },
  { title: 'Benue' },
  { title: 'Borno' },
  { title: 'Cross River' },
  { title: 'Delta' },
  { title: 'Ebonyi' },
  { title: 'Edo' },
  { title: 'Ekiti' },
  { title: 'Enugu' },
  { title: 'Gombe' },
  { title: 'Imo' },
  { title: 'Jigawa' },
  { title: 'Kaduna' },
  { title: 'Kano' },
  { title: 'Katsina' },
  { title: 'Kebbi' },
  { title: 'Kogi' },
  { title: 'Kwara' },
  { title: 'Lagos' },
  { title: 'Nasarawa' },
  { title: 'Niger' },
  { title: 'Ogun' },
  { title: 'Ondo' },
  { title: 'Osun' },
  { title: 'Oyo' },
  { title: 'Plateau' },
  { title: 'Rivers' },
  { title: 'Sokoto' },
  { title: 'Taraba' },
  { title: 'Yobe' },
  { title: 'Zamfara' },
  

];

