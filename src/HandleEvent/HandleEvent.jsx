// import React from 'react'

export const HandleEvent = () => {
  const alertMessage = () => {
    alert("Hello BC53");
  };

  const alertMessageWithParam = (param) => {
    alert(param);
  };

  // Mọi sự kiện (event) ở trong react đều trả về 1 tham số event
  return (
    <div className="container mt-3">
      <h1>HandleEvent</h1>
      <div>
        <button className="btn btn-success" onClick={alertMessage}>
          Alert Message
        </button>
      </div>
      <div>
        // trường hợp hàm có tham số
        <button
          className="btn btn-danger"
        //   onClick={(event) => {
               // console.log(first, event)
               // nếu có viết thêm cái gì thì dùng hàm đầy đủ như thế này còn không thì viết gọn như dưới
        //     console.log(first, event.target)
        //alertMessageWithParam("Nguyễn Văn C");
        //   }}
        // onClick={() => alertMessageWithParam('Nguyễn Văn B') }
        >
          Alert Message With Param
        </button>
      </div>
    </div>
  );
};
