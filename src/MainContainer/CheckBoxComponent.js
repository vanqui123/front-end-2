import { useState } from 'react';

const CheckBoxComponent = ({children}) =>{

    const [check, setCheck] = useState(() => {
      const jsonCheck = JSON.parse(
        localStorage.getItem(
          "check" + children.name
        )
      );

      return jsonCheck ?(jsonCheck) : ([]);
      
    });

    const handelCheck = (name) =>{

      // setCheckIndex(e=>!e)
      setCheck((prev)=>{
    
        const listCheck  =  [...prev,name];
        // kiểm tra phần tử trùng nhau
       const checkList = new Set(listCheck).size !== listCheck.length;
  
       if(checkList == true){
         listCheck.splice(name,1)
          listCheck.pop();
       } 

        const jsonCheck  = JSON.stringify(listCheck);
          localStorage.setItem(
            "check" + name,
            jsonCheck
          );
       return  listCheck })
    
    }
  
    return (
        <div style={{display: 'flex'}}>
      
          {check.includes(children.name) ?(      
              <div> 
                  <input
             type="checkbox"
             checked={true}
              onChange={() =>handelCheck(children.name)}/>
              <del>{children.name}</del>
              </div>
             ) : (
              <div>
                  <input
             type="checkbox"
             checked={false}
              onChange={() =>handelCheck(children.name)}/>
              <span>{children.name}</span>
              </div>
              )}
        </div>
      
    )
}

export default CheckBoxComponent;