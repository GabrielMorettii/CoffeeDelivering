import { createContext, useCallback, useState } from "react";

export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const handleRemoveOrder = useCallback((order) => {
    setOrders((prevState) =>
      prevState.filter((orderObj) => orderObj.id !== order.id)
    );
  }, []);

  const handleEditOrder = useCallback((order) => {
    setOrders((prevState) =>
      prevState.map((orderObj) => {
        if (orderObj.id !== order.id) return orderObj;

        return { ...orderObj, ...order };
      })
    );
  }, []);

  const handleAddOrder = useCallback((order) => {
    const orderAlreadyExists = orders.find(
      (orderObj) => orderObj.id === order.id
    );

    if (orderAlreadyExists) {
      handleEditOrder(order);

      return;
    }

    setOrders((prevState) => [...prevState, order]);
  }, [handleEditOrder, orders]);

  return (
    <OrdersContext.Provider
      value={{
        onAddOrder: handleAddOrder,
        onRemove: handleRemoveOrder,
        onEdit: handleEditOrder,
        orders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
