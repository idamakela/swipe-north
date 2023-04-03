'use client';
import React from 'react';
import Select from 'react-select';

export default function Filter({ f, setF }) {
  const options = [
    { value: 'Administration', label: 'Administration' },
    { value: 'It-Consult', label: 'It-Consult' },
    { value: 'It-Support', label: 'It-Support' },
    { value: 'Konstruktör', label: 'Konstruktör' },
    { value: 'Restaurang', label: 'Restaurang' },
    { value: 'Säkerhetsarbete', label: 'Säkerhetsarbete' },
    { value: 'Transport', label: 'Transport' },
    { value: 'Underhåll', label: 'Underhåll' },
    { value: 'Utbildning', label: 'Utbildning' },
    { value: 'Vård och omsorg', label: 'Vård och omsorg' },
  ];

  return (
    <>
      <Select
        onChange={(event) => {
          setF(event.value);
        }}
        options={options}
      />
    </>
  );
}
