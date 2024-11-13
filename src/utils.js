function MyComponent({ status }) {
    switch (status = 'guest') {
      case 'loggedIn':
        return <h1>Welcome back!</h1>;
      case 'guest':
        return <h1>Guest Access</h1>;
      default:
        return <h1>Please log in</h1>;
    }
  }
  

  export default function Substitute (){
    return (
        <MyComponent/>
    )
  }