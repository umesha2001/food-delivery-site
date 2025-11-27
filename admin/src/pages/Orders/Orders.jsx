import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
      }
      else {
        toast.error("Failed to fetch orders")
      }
    } catch (error) {
      toast.error("Error connecting to server")
    } finally {
      setLoading(false);
    }
  }

  const statusHandler = async (event, orderId) => {
    const newStatus = event.target.value;
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: newStatus
      })
      if (response.data.success) {
        toast.success(`Order status updated to: ${newStatus}`);
        await fetchAllOrders();
      } else {
        toast.error("Failed to update order status")
      }
    } catch (error) {
      toast.error("Error updating order status")
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])

  return (
    <div className='order add'>
      <div className="order-header">
        <h3>Order Page</h3>
        <button onClick={fetchAllOrders} className="refresh-btn">Refresh Orders</button>
      </div>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='order-item-address'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>Phone: {order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}.00</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
      )}
    </div>
  )
}

export default Orders