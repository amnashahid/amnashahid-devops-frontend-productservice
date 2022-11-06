
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App()
{
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const makeAPICall = async () =>
  {
    try
    {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
      setLoaded(true);
      console.log(data)
    }
    catch (e)
    {
      console.log(e)
    }
  }
  useEffect(() =>
  {
    makeAPICall();
  }, [])
  return (
    <div>
      {isLoaded ? (<div style={{ wdith: '100%' }}>
        {products.map((item) =>
          <div style={{ wdith: '100%', display: 'table-row' }}>
            <div style={{
              wdith: '10%', float: 'left', borderWidth: 1, borderColor: '#000000', border: '1px solid #999999',
              display: 'table-cell',
              padding: '3px 10px'
            }}>{item.id}{'  '}</div>
            <div style={{
              wdith: '50%', float: 'left', borderWidth: 1, borderColor: '#000000', border: '1px solid #999999',
              display: 'table-cell',
              padding: '3px 10px'
            }}>{item.productName}{'  '}</div>
            <div style={{
              wdith: '10%', float: 'left', borderWidth: 1, borderColor: '#000000', border: '1px solid #999999',
              display: 'table-cell',
              padding: '3px 10px'
            }}>{item.price}</div></div>
        )}
      </div>) : <h1>loading ....</h1>}
    </div>
  );
}

export default App;
