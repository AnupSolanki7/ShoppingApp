import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../component/Header'
import { addToCart } from '../redux/cart'
import "../styles/dashboard.css"

const Dashboard = () => {
  const [dataApi, setDataApi] = useState([])
  const [itemId, setItemId] = useState('')
  const dispatch = useDispatch()


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    axios.get('https://dummyjson.com/products').then((res: any) => {
      setDataApi(res.data.products)
    })
  }
  return (
    <>
      <div className='product-div'>
        {
          dataApi.map((e: any) => {

            return (
              <div className="products">
                <div className="title">
                  {e.title}
                </div>
                <img width={"250px"} height={"250px"} src={e.thumbnail} alt="" />
                <p>{e.description}</p>
                <div className="cart-div">
                  <div className="price">
                    price: {e.price}$
                  </div>
                  <button  onClick={() =>{dispatch(addToCart(e)); setItemId(e.id)}} className="cart">
                    Add to cart
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Dashboard