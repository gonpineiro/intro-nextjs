import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, lenght }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>Next.js!</div>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
