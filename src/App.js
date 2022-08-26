import React from 'react'
import { Header, Content, Footer } from './func-components'
function App() {//แบบที่ 1 ก ําหนดฟังก์ชันทั้งหมดที่จะแสดงในแบบอําร์เรย์
  return ([<Header />, <Content />, <Footer />])
  //แบบที่ 2 ก ําหนดฟังก์ชันทั้งหมดที่จะแสดงลงใน Parent เดียวกัน/*return (<><Header/><Content/><Footer/></>)*/
}
export default App