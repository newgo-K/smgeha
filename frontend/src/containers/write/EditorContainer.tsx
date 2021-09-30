import React, { useRef, useState } from 'react';
import { CKEditor } from 'ckeditor4-react';
import palette from 'lib/styles/palette';

function EditorContainer() {
  const [event, setEvent] = useState<any>();

  const handleClick = () => {
    alert(event);
  };

  const handleClick1 = (a: any) => {
    if (a.data) {
      setEvent(a.data.dataValue);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Send</button>
      <CKEditor
        config={{
          uiColor: `${palette.grey[0]}`,
          height: '70vh',
        }}
        initData={'sadfsdfassd'}
        onGetData={handleClick1}
        onChange={(event) => handleClick1(event.editor.getData())}
      />
    </div>
  );
}

export default EditorContainer;
