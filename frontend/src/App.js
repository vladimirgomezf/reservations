/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Input } from 'postcss';

function App() {
  return (
    <div class="w-screen h-screen p-0 m-0 flex-col bg-gray-300">
      {/* Banner */}
      <div class="w-full h-44 bg-img">
        <div class="grid grid-cols-3 w-full h-full items-center text-white">
          <div class="col-span-1 flex justify-end pr-2">
            <p class="text-5xl"><span class="font-bold">ISU</span>Corp</p>
          </div>
          <div class="col-span-2 flex-col justify-start pl-2 text-base">
            <div class="pb-0">World Class</div>
            <div class="pt-0">Software Development</div>
          </div>
        </div>
      </div>
      {/* NavBar */}
      <div class="w-full h-auto bg-white flex justify-center">
        <div class="w-2/3 flex justify-center">
          <p class="text-red-600 font-medium text-lg pr-2 self-center">Create Reservation</p>
          <p class="text-gray-600 font-light text-xs text-left px-2 w-2/5 self-center h-auto">Blanditiis tenetur inventore necessitatibus vitae quisquam officiis deleniti explicabo! Quaerat mollitia iusto deserunt quam. </p>
          <button type="button" class="text-white text-xs  h-8 px-4 py-2 my-1 mx-3 font-bold self-center bg-gray-400">RESERVATION LIST</button>
        </div>
      </div>
      <div class="w-full flex justify-center">
        {/* Form */}
        <div class="flex justify-center bg-white py-1 space-x-2 mt-2 max-w-min px-1 ml-2 mr-2 rounded-sm">
          <input type="text" placeholder="Contact Name" class="p-2 w-44 h-10 border rounded-md border-gray-700" />
          <input type="text" placeholder="Contact Type" class="p-2 w-44 h-10 border rounded-md border-gray-700" />
          <input type="phone" placeholder="Phone" class="p-2 w-44 h-10 border rounded-md border-gray-700" />
          <input type="date" placeholder="Birthday" class="p-2 w-44 h-10 border rounded-md border-gray-700" />
        </div>
      </div>
      {/* Text Editor */}
      <div className="App" class="w-full flex justify-center pt-2">
        <CKEditor
            editor={ ClassicEditor }
            class="w-60"
            data="<p>Hello from CKEditor 5!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
      </div>
    </div>
  );
}

export default App;
