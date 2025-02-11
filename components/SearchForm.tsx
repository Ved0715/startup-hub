import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

const SearchForm = ({query}: {query?:string}) => {

  return (
    <Form action="/" scroll={false} className='search-form'>
        <input
        type="text"
        placeholder='Search StartUps'
        name='query'
        defaultValue={query}
        className='search-input'
        />
        <div className="flex gap-4">
            {query && <SearchFormReset />}
            <button type='submit' className='search-btn text-white'>
                <Search className='size-5'/>
            </button>
        </div>
    </Form>
  )
}

export default SearchForm