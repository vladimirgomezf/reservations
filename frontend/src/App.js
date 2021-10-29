/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <div class="w-full h-10 bg-white flex justify-center content-center ">
        <p class="text-red-600 font-medium text-xl pr-8">Create Reservation</p>
        <p class="text-gray-600 font-light text-xs">Blanditiis tenetur inventore necessitatibus vitae quisquam officiis deleniti explicabo!<br /> Quaerat mollitia iusto deserunt quam. Beatae, iste dolore cum quisquam nulla ullam harum. </p>
      </div>
      <div class="w-full flex-col justify-center">
        {/* Form */}
        <div class="flex justify-center bg-white py-1 space-x-2 mt-2 max-w-min px-1 ml-2 mr-2 rounded-sm">
          <input type="text" class="p-2 w-44 h-10 border rounded-md border-gray-700" />
          <input type="text" class="p-2 w-44 h-10 border rounded-md border-gray-700" />
          <input type="phone" class="p-2 w-44 h-10 border rounded-md border-gray-700" />
          <input type="date" class="p-2 w-44 h-10 border rounded-md border-gray-700" />
        </div>
      </div>

    </div>
  );
}

export default App;
