import React from 'react';

export function Footer(props) {
  return <div>
      <h2>I am a { props.brand }!</h2>
      <button onClick={props.changeBrand}/>
  
  
  </div>;
}

