import React from 'react';
import List from '../components/List';
import SearchForm from '../components/SearchForm';

export default function Home() {
  return (
    <div>
      <SearchForm />
      <List />
    </div>
  )
}
