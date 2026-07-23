import React from 'react'


const Home = ({users}) => {
  console.log("Home rendering...");
  return <div>Home</div>;
};

export default React.memo(Home, (prevProps,nextProps) => {
  return prevProps.users.id === nextProps.users.id
});