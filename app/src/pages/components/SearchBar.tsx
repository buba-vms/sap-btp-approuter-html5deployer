import { Button, FlexBox, Input } from '@ui5/webcomponents-react'
import { useAppDispatch } from '../../redux/hooks'
import { handleMovie } from '../../redux/movieSlice'
import axios from 'axios'
import { FormEvent, useState } from 'react'

const SearchBar = () => {
  // aqui eu vou fazer a requisição get
  // const input = useAppSelector((state) => state.search.searchInput)
  const [input, setInput] = useState('')

  const dispatch = useAppDispatch()

  const handleRequest = async () => {}

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleRequest()
  }

  const handleReset = () => {
    setInput('')
  }

  return (
    <FlexBox
      alignItems='Center'
      justifyContent='SpaceAround'
      style={{ margin: '20px 0' }}
    >
      <form
        action='submit'
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <div>
          <Input
            style={{ width: '40vw' }}
            name='input'
            placeholder='Search your favorite movies...'
            value={input}
            onInput={(e) => {
              setInput(e.target.value || '')
            }}
          />
          <Button
            className='btn'
            submits={true}
            disabled={input.length > 0 ? false : true}
          >
            Search
          </Button>
        </div>
      </form>
      <div>
        <Button
          className='btn'
          onClick={handleReset}
          disabled={input.length > 0 ? false : true}
        >
          Reset
        </Button>
      </div>
    </FlexBox>
  )
}

export default SearchBar
