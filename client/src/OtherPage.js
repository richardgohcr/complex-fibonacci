import React from 'react';
impot {Link} from 'react-router-dom';

export default () => {
  return( 
    <div>
      In some other page! 
      <Link to="/"> Go back home </Link>
    </div>
  )
}