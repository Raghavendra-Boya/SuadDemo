import React from 'react'

export default function datafetch() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
  return (
    <>
        <div>
            <h2>Fetched Data:</h2>
           <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {data ? data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ? 'Yes' : 'No'}</td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="3">Loading...</td>
                    </tr>
                )}
            </tbody>

           </table>
        </div>
    </>
  )
}
