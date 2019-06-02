import axios from '../../src'

// axios({
//   method: 'post',
//   url: '/extend/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })
//
// axios({
//   method: 'post',
//   url: '/extend/post',
//   data: {
//     msg: 'hello '
//   }
// })
//
//
// axios.request({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'world'
//   }
// })
//
// axios.get('/extend/get').then(res => {
//   console.log(res.data)
// })
//
// axios.options('/extend/options')
//
// axios.delete('/extend/delete')
//
// axios.head('/extend/head')
//
// axios.post('/extend/post', { msg: 'post' })
//
// axios.put('/extend/put', { msg: 'put' })
//
// axios.patch('/extend/patch', { msg: 'patch' })

// axios({
//   method: 'post',
//   url: '/extend/post',
//   data: {
//     msg: 'hello'
//   }
// })
//
// axios('/extend/post',{
//   method: 'post',
//   data: {
//     msg: 'world'
//   }
// })

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.error(err))
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user)
  }
}

test()
