import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Mobiles",
        children: [
          { id: 3, name: "iPhone" },
          { id: 4, name: "Samsung" }
        ]
      },
      {
        id: 5,
        name: "Laptops",
        children: [
          { id: 6, name: "MacBook" },
          { id: 7, name: "Dell" }
        ]
      }
    ]
  }
];

export default function NestedCheckbox() {
  const [checked, setChecked] = useState([]);

  const getAllChildren = (node) => {
    let res = [];

    if (node.children) {
      node.children.forEach((child) => {
        res.push(child.id);
        res = res.concat(getAllChildren(child));
      });
    }

    return res;
  };

  const getParent = (tree, childId) => {
    for (let node of tree) {
      if (node.children) {
        if (node.children.some((c) => c.id === childId)) {
          return node;
        }
        const found = getParent(node.children, childId);
        if (found) return found;
      }
    }
    return null;
  };

  const areAllChildrenChecked = (node, checkedList) => {
    if (!node.children) return checkedList.includes(node.id);

    return node.children.every((child) =>
      areAllChildrenChecked(child, checkedList)
    );
  };

  const updateParent = (node, checkedList) => {
    const parent = getParent(data, node.id);
    if (!parent) return checkedList;

    if (areAllChildrenChecked(parent, checkedList)) {
      if (!checkedList.includes(parent.id)) {
        checkedList.push(parent.id);
      }
    } else {
      checkedList = checkedList.filter((id) => id !== parent.id);
    }

    return updateParent(parent, checkedList);
  };

  const handleCheck = (node) => {
    let newChecked = [...checked];
    const children = getAllChildren(node);

    if (checked.includes(node.id)) {
      newChecked = newChecked.filter(
        (id) => id !== node.id && !children.includes(id)
      );
    } else {
      newChecked = [...newChecked, node.id, ...children];
    }

    newChecked = updateParent(node, newChecked);

    setChecked(newChecked);
  };

  const Checkbox = ({ node }) => {
    return (
      <div style={{ marginLeft: "20px" }}>
        <input
          type="checkbox"
          checked={checked.includes(node.id)}
          onChange={() => handleCheck(node)}
        />
        {node.name}

        {node.children &&
          node.children.map((child) => (
            <Checkbox key={child.id} node={child} />
          ))}
      </div>
    );
  };

  return (
    <div>
      {data.map((node) => (
        <Checkbox key={node.id} node={node} />
      ))}
    </div>
  );
}



// import React from 'react'
// import data from './data/data.json'


// const NestedCheckBox = ({items, checked ,setchecked}) => {

//     function handleChange(ischecked , node){
       
//      setchecked((prev)=> {
//       const newState = { ...prev , [node.id]: ischecked}

//       function updateChildren(node){
//         node.children?.forEach((child)=> {
//             newState[child.id] = ischecked;
//             child.children && updateChildren(child);
//          })
//       }

//       updateChildren(node)


//       const verifychecked = (node)=> {

//         if(!node.children.length) return newState[node.id] || false;

//         const allchildrenchecked = node.children.every((child)=> verifychecked(child));

//          newState[node.id] = allchildrenchecked;
//          return allchildrenchecked;
//       }
       
//       data.forEach((node)=> verifychecked(node));

//       return newState;
//      })


//     }

//   return (
//     <div>
//         {items.map((item)=> (
//             <div style={{margin: "10px"}}>
//             <input
//             type="checkbox"
//             checked={checked[item.id] || false}
//             onChange={(e)=> handleChange(e.target.checked , item)}
//             />
//             <label>{item.name}</label>
//             {item.children && <NestedCheckBox items={item.children} checked={checked} setchecked={setchecked}/>}
//             </div>
//         ))}
//     </div>
//   )
// }

// export default NestedCheckBox