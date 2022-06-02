import React from 'react';

function Head(props) {
  React.useEffect(() => {
    document.title = `${props.title} | Coelho mídias`;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
  }, [props]);
}

export default Head;
