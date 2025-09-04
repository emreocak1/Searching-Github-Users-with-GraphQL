import React, {useState} from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { type FormEvent } from 'react'
import { toast } from "sonner"



const SearchForm = ({username,setUsername}:{username:string,setUsername:React.Dispatch<React.SetStateAction<string>>}) => {
  const [text,setText] = useState(username)

  const handleSearch = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(text === ''){
      toast('Please enter an username')
      return
    }

    setUsername(text)
  }

  return (
    <form onSubmit={handleSearch} className='flex items-center gap-x-2 w-full lg:w-1/3 mb-8'>
      <Label htmlFor='search' className='sr-only'>Search</Label>
      <Input type='text' id='search' value={text} 
             onChange={(e)=>setText(e.target.value)} placeholder='Search Github Users ...'
             className='flex-grow bg-background '
             />

      <Button type='submit'>Search</Button>
    </form>
  )
}

export default SearchForm