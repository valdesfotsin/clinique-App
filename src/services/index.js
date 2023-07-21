import axios from "axios";

export function getPosts (){
   return new Promise (resolve => {
            axios.get("http://localhost:4000/")
            .then(res => res.status === 200 && res.data)
            .then(resolve)
            .catch(console.error)
    })
}

export function insertPost(body){
    return new Promise (resolve => {
        axios.post("http://localhost:4000/insert", body)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    })
}

// export function deleteRecord(id) {
//     return new Promise (resolve => {
//         axios.delete(`http://localhost:4000/delete/${id}`)
//         .then(res => res.status === 200 && res.data)
//         .then(resolve)
//         .catch(console.log())
//     })
// }

export function deleteRecord(id) {
    return new Promise((resolve) => {
      axios
        .delete(`http://localhost:4000/delete/${id.toString()}`)
        .then((res) => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error);
    });
  }
  