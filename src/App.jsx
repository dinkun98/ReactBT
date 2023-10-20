// jsx => javascript XML => cú pháp hỗ trợ viết thẻ html ở trong javascript
// attribute => viết theo  quy tắc camelCase
// phỏng vấn có nói về react life cycle

import { BTMovie } from "./BTMovie/BTMovie"
import ClassComponent from "./DemoComponent/ClassComponent"
import { FunctionComponent } from "./DemoComponent/FunctionComponent"
import { HandleEvent } from "./HandleEvent/HandleEvent"
import { RenderWithCondition } from "./RenderWithCondition/RenderWithCondition"
import { RenderWithMap } from "./RenderWithMap/RenderWithMap"
import { Databinding } from "./databinding/Databinding"
import { Header } from "./BTComponent/Header"
import { Middle } from "./BTComponent/Middle"

function App() {

  return (
    <div>
      
      {/* <FunctionComponent></FunctionComponent>
      <FunctionComponent></FunctionComponent>
      <FunctionComponent></FunctionComponent>
      <FunctionComponent></FunctionComponent>
      <ClassComponent></ClassComponent>
      <Databinding></Databinding>
      <RenderWithCondition></RenderWithCondition>
      <HandleEvent></HandleEvent>
      <RenderWithMap></RenderWithMap>
     <BTMovie></BTMovie> */}
     <Header></Header>
     <Middle></Middle>
    </div>
      
    
  )
}

export default App
