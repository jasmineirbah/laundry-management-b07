import api from './api'

// Get all orders
export const getOrders = async () => {
  try {

    const response = await api.get('/orders')

    return response.data

  } catch (error) {

    console.log(error)

    return []
  }
}

// Add order
export const addOrder = async (data) => {
  try {

    const response = await api.post('/orders', data)

    return response.data

  } catch (error) {

    console.log(error)
  }
}

// Update order status
export const updateOrderStatus = async (
  id,
  status
) => {
  try {

    const response = await api.put(`/orders/${id}`, {
      status
    })

    return response.data

  } catch (error) {

    console.log(error)
  }
}

// Delete order
export const deleteOrder = async (id) => {
  try {

    const response = await api.delete(`/orders/${id}`)

    return response.data

  } catch (error) {

    console.log(error)
  }
}