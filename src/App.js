import React from 'react';
import './App.css';
import CardList from "./components/ContactCard";
import Hearder from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
function App() {
  return (
     <div>
      <Hearder/>
      <Content/>
      <Footer/>
     </div>
    // <div className="contacts">

    //   <CardList
    //     contact={{
    //       name: "Mr. Zukelwa",
    //       imgUrl: "https://scontent.fcpt11-1.fna.fbcdn.net/v/t1.0-1/c40.0.160.160a/p160x160/38837042_2550762168282942_7885112986799439872_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=SW63GvvGrNYAX8NogCX&_nc_ht=scontent.fcpt11-1.fna&_nc_tp=27&oh=dd4a6c793d8c97c1da3399419053bf2f&oe=5FA14D50",
    //       phone: "(212) 555-1234",
    //       email: "mr.whiskaz@catnap.meow"
    //     }}
    //   />

    //   <CardList

    //     contact={{
    //       name: "Mr. Mtshokotsa",
    //       imgUrl: "https://media-exp1.licdn.com/dms/image/C4D03AQEY4lpQJwQ7iw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=MrH7uCQ7lPJtX10Kyzv781EspHsNv02Vuhq8-DFldtQ",
    //       phone: "(212) 555-1234",
    //       email: "mr.whiskaz@catnap.meow"
    //     }}
    //   />

    //   <CardList
    //     contact={{
    //       name: "Mr. Thabang",
    //       imgUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQHfkG84mD-k8A/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=CMuxoztuSTqTMzyvDE6zNrdSpw8JjsEavS4rKew3IhQ",
    //       phone: "(212) 555-1234",
    //       email: "mr.whiskaz@catnap.meow"
    //     }}
    //   />

    //   <CardList
    //     contact={{
    //       name: "Mr. Yanta",
    //       imgUrl: "https://mindfulness.org.za/wp-content/uploads/2019/07/Profile-Mbuyi-01.jpg",
    //       phone: "(212) 555-1234",
    //       email: "mr.whiskaz@catnap.meow"
    //     }}
    //   />

    // </div>
  )
}
export default App;
