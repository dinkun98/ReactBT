// import React from 'react'

export const RenderWithCondition = () => {
    const isLogin = false;
    const fullName = 'Nguyen Van A'
    const isShowMessage = true;

    //tach hàm riêng
    const renderLogin = () => {
        if(isLogin){
            return <p>Hello, {fullName}</p>
        } else {
            return <button className="btn btn-success">Đăng nhập</button>
        }
    }    

  return (
    <div className="container mt-3">
       <h1> RenderWithCondition</h1> 
       <div>
        {/* {
            isLogin ? <p>{fullName}</p> : <button>Dang nhap</button>
        } */}
    {renderLogin()}

       </div>

       {
        isShowMessage ? <p>Hello BC53</p> : ''
       }

       {/* trong cú pháp databinding không sử dụng được if else, chỉ có thể sử dụng toán tử 3 ngôi
       //Nếu isShowMessage là true thì hiện ra, false thì ngược lại */}
       {isShowMessage && <p>Hello BC53</p>}
    </div>
  )
}
