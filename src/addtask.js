import React, { useState } from 'react';
const CheckList = () => {

  const [invalue, setValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (value, isChecked) => {
    if (value.trim() === '') {
      return;
    }

    const newItem = {
      value: value,
      isChecked: isChecked,
    };

    setItems([...items, newItem]);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const pressEnt = (event) => {
    if (event.key === "Enter") {
      addItem(event.target.value, false);
    }
  }

  const handleCheckboxChange = (event, item) => {
    const updatedItems = items.map((i) => {
      if (i === item) {
        return {
          ...i,
          isChecked: event.target.checked,
        };
      }

      return i;
    });

    setItems(updatedItems);
  };

  return (
    <div>
      <input type="text" onKeyUp={pressEnt} value={invalue} onChange={handleChange} />
      <ul>
      <h3>Не выполнено</h3>
        {items
          .filter((item) => !item.isChecked)

          .map((item) => (
            
            <div key={item.value}>
              <input type="checkbox" onChange={(event) => handleCheckboxChange(event, item)} />
              {item.value}
            </div>
          ))}
<h3>Выполнено</h3>
        
        {items 
          .filter((item) => item.isChecked)
          .map((item) => (
            
            <div key={item.value}>
              <input type="checkbox" onChange={(event) => handleCheckboxChange(event, item)} checked />
              {item.value}
            </div>
            
          ))}
      </ul>
    </div>
  );
};

export default CheckList;



