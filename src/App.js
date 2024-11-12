import  { useState } from 'react';


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function LoginForm({ onLogin }) {
  return (
      <div>
          <h2>Login</h2>
          <button onClick={onLogin}>Log In</button>
      </div>
  );
}

function AdminPanel({ onLogout }) {
  return (
      <div>
          <h2>Admin Panel</h2>
          <p>Welcome to the admin panel!</p>
          <button onClick={onLogout}>Log Out</button>
      </div>
  );
}




export default function Profile() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let content;
    if (isLoggedIn) {
        content = <AdminPanel onLogout={() => setIsLoggedIn(false)} />;
    } else {
        content = <LoginForm onLogin={() => setIsLoggedIn(true)} />;
    }

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />

      <div>
        {content}
      </div>
    </>
  );
}


