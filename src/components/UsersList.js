const UsersList = (props) => {
  console.log(props.users);

  const users = props.users.map((user) => (
    <div className="user" key={user.login.uuid}>
      <img src={user.picture.large} alt="user" />
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </div>
  ));

  return <ul>{users}</ul>;
};

export default UsersList;
