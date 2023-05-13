import * as React from 'react';
import Dropdown from './Dropdown';
import './style.css';

const options = [
  { value: 'green', label: 'Green' },
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'black', label: 'Black' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'orange', label: 'Orange' },
  { value: 'more', label: 'More..' },
];

export default function App() {
  return (
    <div>
      <Dropdown isMulti={false} placeHolder="Select..." options={options} />
    </div>
  );
}
