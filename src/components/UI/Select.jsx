import Form from 'react-bootstrap/Form';

export function MySelect({changeStatus}){

    const statusOptions = [
        {name: 'Живы', value:'Alive'},
        {name: 'Мертвы', value:'Dead'},
        {name: 'Неизвестно', value:'unknown'},
      ]

    return (
        <Form.Select 
        aria-label="Default select example"
        onChange={(e) => e.target.value === 'Все' ? changeStatus('') : changeStatus(e.target.value)}
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