import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


const Users = ()=> {
  const [users,setUsers] = useState([]) //for the users
  const [newUser,setNewUser] = useState({
    firstName:'',
    lastName:'',
    email:'',
    avatar:'',

  }) 
  
  const fetchUsers = ()=>{
    axios.get("http://localhost:9000/users")
  // .then((res)=>console.log(res.data.data))
  .then((res)=> setUsers(res.data.data))
    .catch((error)=>console.log(error))
  }
  
  
  //for the new users
  //using .then and .catch
  // useEffect(()=>{
  //   fetch('https://reqres.in/api/users')
  //   .then((res)=>res.json())
  //   .then((res)=>console.log(res.data))
  //   .catch((error)=>console.log(error))
  // },[])
//USING AXIOS
useEffect(()=>{
 fetchUsers() // initial load it had make a get request that why up there we have craeted one more function so that it can be used in one more place
},[])


  //using try catch method
  // useEffect(async()=>{
  //   try{
  //     const res = await fetch('https://reqres.in/api/users');
  //     const res2 = await res.json();
  //     console.log(res2.data);}
  //     catch(error){
  //       console.log(error)
  //     }
  // },[]);
useEffect(()=>{  //TO TRACK THE DETAILS ARE COMING UP UR NO
  console.log(newUser)

},[newUser])    
    

const handlesubmit = (e)=>{
  // e.preventDefault();//in order to prevent reload we write this
  axios.post("http://localhost:9000/users",newUser)
   .then((res)=>{ alert("user created sucessfully")
    fetchUsers();
    setNewUser({
      firstName:'',
      lastName:'',
      email:'',
      avatar:'',
    });
  })
    .catch((error)=>console.log(error))
  // .then((res)=> setUsers(res.data.data))
  //   .catch((error)=>console.log(error))
 
}


  return (
    <>
    

    
    {users.map((user)=>
    <Card className="text-center" bg="dark" data-bs-theme="dark" style={{width:"400px",margin:"10px auto"}} key={user._id} >
      <Card.Header>User</Card.Header>
      <Card.Body>
        <img src={user.avatar} alt='' className="rounded-circle" />
          <Card.Title>{user.firstName} {user.lastName}</Card.Title>
       
        <Card.Text>
       {user.email}
        </Card.Text>
        <Button variant="secondary" size='sm'>view profile</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
   )}
   <h4>add new user</h4>
  <Form  bg="secondary" data-bs-theme="primary" style={{width:"400px",margin:"10px auto"}} onSubmit={handlesubmit}>
      <Form.Group className="mb-3" value={newUser.firstName} controlId="formBasicEmail" onInput={(e)=>setNewUser({
        ...newUser,
        firstName: e.target.value
        })}>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text"  />
        
      </Form.Group>
      <Form.Group className="mb-3" value={newUser.lastName} controlId="formBasicEmail" onInput={(e)=>setNewUser({
        ...newUser,
        lastName: e.target.value
      })}>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"  />
        
      </Form.Group>
      <Form.Group className="mb-3" value={newUser.email} controlId="formBasicEmail " onInput={(e)=>setNewUser({
        ...newUser,
        email: e.target.value
      })}>
        <Form.Label>email</Form.Label>
        <Form.Control type="email"  />
        
      </Form.Group>
      <Form.Group className="mb-3" value={newUser.avatar} controlId="formBasicEmail" onInput={(e)=>setNewUser({
        ...newUser,
        avatar: e.target.value
      })}>
        <Form.Label>avatar URl</Form.Label>
        <Form.Control type="text"  />
        
      </Form.Group>

     
      <Button variant="primary" type="submit">
        add profile
      </Button>
    </Form>


  
    </>
  );
}

export default Users;