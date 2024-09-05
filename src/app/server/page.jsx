// src/app/server/page.tsx (or page.jsx)
const UserPage = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const users = await data.json();
  
    return (
      <div>
        <h1>Hi Amal</h1>
        <ul>
          {users.users.map((user) => (
            <li key={user.id}>{user.firstName} {user.lastName}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserPage;
  