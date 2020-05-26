
// {"title":"лампа 1","price":"30","img":"lampa98739485.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd4551e0aafa1444ba7fe9"}
// {"title":"Стол 1","price":"20.99","img":"table9879898.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd4551e0aafa1444ba7fe9"}
// {"title":"Стол 2","price":"22.38","img":"table08098098.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd4551e0aafa1444ba7fe9"}
// {"title":"Стул 1","price":"15.23","img":"chair98854556356476.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd4551e0aafa1444ba7fe9"}
// {"title":"Окно 1","price":"35.56","img":"window129840985.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd458ce0aafa1444ba7fea"}
// {"title":"Окно 2","price":"40.33","img":"window1987987.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd458ce0aafa1444ba7fea"}
// {"title":"Монитор 1","price":"30.78","img":"display2834728759.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd45b2e0aafa1444ba7feb"}
// {"title":"Мышь1","price":"5.88","img":"mouse8230893845.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd45b2e0aafa1444ba7feb"}
// {"title":"Мышь2","price":"3.08","img":"mouse823089879237.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd45b2e0aafa1444ba7feb"}
// {"title":"Клавиатура 1","price":"6.92","img":"keyboard948509487.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd45b2e0aafa1444ba7feb"}
// {"title":"Ноутбук 1","price":"100.00","img":"laptop893745093845.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd45b2e0aafa1444ba7feb"}
// {"title":"Ноутбук 2","price":"99.99","img":"laptop893745093845.jpg","description":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","categoryId":"5ecd45b2e0aafa1444ba7feb"}
//
// {"name":"мебель","descrption":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
// {"name":"строительство","descrption":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
// {"name":"компьютерная техника","descrption":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}

// {"targetId":"5ecd4608e0aafa1444ba7fed","similar":["5ecd462fe0aafa1444ba7fef","5ecd4655e0aafa1444ba7ff2","5ecd4679e0aafa1444ba7ff5","5ecd468fe0aafa1444ba7ff7"]}
// {"targetId":"5ecd462fe0aafa1444ba7fef","similar":["5ecd4608e0aafa1444ba7fed","5ecd466de0aafa1444ba7ff4"]}
// {"targetId":"5ecd463be0aafa1444ba7ff0","similar":["5ecd462fe0aafa1444ba7fef"]}
// {"targetId":"5ecd4646e0aafa1444ba7ff1","similar":["5ecd469be0aafa1444ba7ff8","5ecd4684e0aafa1444ba7ff6","5ecd4662e0aafa1444ba7ff3"]}
// {"targetId":"5ecd4655e0aafa1444ba7ff2","similar":["5ecd4646e0aafa1444ba7ff1","5ecd466de0aafa1444ba7ff4"]}
// {"targetId":"5ecd4662e0aafa1444ba7ff3","similar":["5ecd468fe0aafa1444ba7ff7","5ecd4621e0aafa1444ba7fee"]}
// {"targetId":"5ecd466de0aafa1444ba7ff4","similar":["5ecd463be0aafa1444ba7ff0","5ecd466de0aafa1444ba7ff4"]}
// {"targetId":"5ecd466de0aafa1444ba7ff5","similar":["5ecd4684e0aafa1444ba7ff6","5ecd4608e0aafa1444ba7fed","5ecd4662e0aafa1444ba7ff3"]}
// {"targetId":"5ecd466de0aafa1444ba7ff6","similar":["5ecd469be0aafa1444ba7ff8"]}
// {"targetId":"5ecd466de0aafa1444ba7ff7","similar":["5ecd466de0aafa1444ba7ff4","5ecd4621e0aafa1444ba7fee"]}
// {"targetId":"5ecd466de0aafa1444ba7ff8","similar":["5ecd4684e0aafa1444ba7ff6","5ecd4655e0aafa1444ba7ff2"]}


{
  "id1": "5ecd4608e0aafa1444ba7fed",
  "id2": "5ecd4551e0aafa1444ba7fe9"
}
query($id1: ID ,$id2: ID) {
  similar(id: $id1){
    id,
    targetId,
    items {
      id,
      title
    }
  },
  similars{
    id,
    targetId,
    similar,
    items {
      id,
      title
    }
  },
 item(id: $id1) {
   id,
  title,
  price,
  description,
  categoryId,
  category {
    name,
    description,
    items {
      title
    }
  },
  similar{
    similar,
    items {
      id,
      title
    }
  }
},
  category(id: $id2){
    id,
    name,
    description
  },
  items{
    id,
    title
  },
  categories{
    name
  }
}

{
  "name" : "новая категория",
  "description": "описание новой категории"
}
mutation($name:String,$description:String){
  addCategory(name:$name,description:$description){
    id,
    name,
    description
  }
}


{
  "title" : "Новый товар",
  "price":30.19,
  "img":"newitem928739487234.jpg",
  "categoryId":"5ecd4551e0aafa1444ba7fe9",
  "description": "описание нового товара"
}
mutation($title:String,$price:Float,$img:String,$categoryId:ID,$description:String){
  addItem(title:$title,price:$price,img:$img,categoryId:$categoryId,description:$description){
    id,
    title,
    price,
    img,
    description,
    category{
      name
    },
  }
}


{
 "targetId": "5ecd81ece1680f333083a31e",
 "similar": ["5ecd463be0aafa1444ba7ff0","5ecd4662e0aafa1444ba7ff3"]
}


mutation($targetId:ID,$similar:[ID]){
  addSimilar(targetId:$targetId,similar:$similar){
    id,
    targetId,
    similar,
    items{
      id,
      title
    }
  }
}

{
 "id": "5ecd8f8c572044126c13bdee"
}
mutation($id:ID){
  removeSimilar(id:$id){
    id
  }
}

{
 "id": "5ecd915518e59c94982a6407"
}
mutation($id:ID){
  removeCategory(id:$id){
    id
  }
}

{
 "id": "5ecd929018e59c94982a6408"
}
mutation($id:ID){
  removeItem(id:$id){
    id
  }
}
