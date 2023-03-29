import { useCallback, useState } from "react";

export default function useItemCounter(props) {
  const [itemCounter, setItemCounter] = useState(props?.initialValue || 1);

  const handlePlusClick = useCallback(() => {
    setItemCounter((prevState) => prevState + 1);
  }, []);

  const handleMinusClick = useCallback(() => {
    setItemCounter((prevState) => (prevState !== 1 ? prevState - 1 : 1));
  }, []);

  return { itemCounter, setItemCounter, handleMinusClick, handlePlusClick };
}
