import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'

export function MySelect({changeStatus}){

  const navigate = useNavigate()

    const statusOptions = [
        {name: 'Живы', value:'Alive'},
        {name: 'Мертвы', value:'Dead'},
        {name: 'Неизвестно', value:'unknown'},
      ]

    return (
        <Form.Select 
        aria-label="Default select example"
        onChange={(e) => {
          if(e.target.value === 'Все'){
            return changeStatus('')
          } else {
            navigate(`?status=${e.target.value}`)
            changeStatus(e.target.value)
          }
        }}
        >
          <option>Все</option>

            {
                statusOptions.map((status, index) => {
                    return <option
                    value={status.value}
                    key={index}
                    >
                      {status.name}</option>
                })
            }
        </Form.Select>
      );
}

// e.target.value === 'Все' ? changeStatus('') : changeStatus(e.target.value)}