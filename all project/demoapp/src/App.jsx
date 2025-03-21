// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NaveBar from './component/NaveBar';
// import HomePage from './Pages/home/home';
// import './App.css'
// import DiscoverPage from './Pages/DiscoverPage';

// function App() {

//   return (
//     <Router>
//       <div className='flex justify-center   '>
//         <div className="max-w-[1920px]  ">
//           <div className="bg-white z-10 drop-shadow-md fixed top-0 left-0 right-0 max-w-[1920px] mx-auto">
//             <NaveBar />
//           </div>

//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/Discover" element={<DiscoverPage />} />
//           </Routes>
//         </div>
//       </div>

//     </Router>
//   );
// }

// export default App;


import React, { useState, useRef } from 'react';
import * as XLSX from 'xlsx';

const ExcelEditor = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [sheetNames, setSheetNames] = useState([]);
  const [sheetData, setSheetData] = useState({});
  const [currentSheet, setCurrentSheet] = useState(null);
  const newRowRef = useRef(null);
  console.log(file);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const ab = e.target.result;
        const workbook = XLSX.read(ab, { type: 'array' });
        const sheets = workbook.SheetNames;
        setSheetNames(sheets);
        setCurrentSheet(sheets[0]);
        const dataForSheets = {};
        sheets.forEach((sheetName) => {
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          dataForSheets[sheetName] = jsonData;
        });
        setSheetData(dataForSheets);
        setData(dataForSheets[sheets[0]]);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSheetChange = (sheetName) => {
    setCurrentSheet(sheetName);
    setData(sheetData[sheetName]); 
  };

  const handleEdit = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
    const updatedSheetData = { ...sheetData, [currentSheet]: updatedData };
    setSheetData(updatedSheetData);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    const updatedSheetData = { ...sheetData, [currentSheet]: updatedData };
    setSheetData(updatedSheetData);
  };

 
  const handleAdd = () => {
    if (data.length === 0) return;
    const newRow = {};
    const keys = Object.keys(data[0]);
    keys.forEach((key) => {
      newRow[key] = '';
    });

    setData([...data, newRow]);
    const updatedSheetData = { ...sheetData, [currentSheet]: [...data, newRow] };
    setSheetData(updatedSheetData);
    if (newRowRef.current) {
      newRowRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  const handleSave = () => {
    const wb = XLSX.utils.book_new();
    sheetNames.forEach((sheetName) => {
      const sheetDataForSheet = sheetData[sheetName] || [];
      const ws = XLSX.utils.json_to_sheet(sheetDataForSheet);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });
    XLSX.writeFile(wb, 'updated_file.xlsx');
  };

  return (
    <div className='' >
      <input className={` ${!data.length === 0 && 'hidden'}`} type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <div className={`${data.length === 0 ? 'hidden' : 'flex'} justify-between bg-green-300 p-5 fixed top-0 right-0 left-0`}>
        <select
          onChange={(e) => handleSheetChange(e.target.value)}
          value={currentSheet}
          className="bg-white text-black rounded-md p-3 w-40 appearance-none text-center"
        >
          {sheetNames.map((sheet, index) => (
            <option key={index} value={sheet}>
              {sheet}
            </option>
          ))}
        </select>
        <button className="bg-white text-black rounded-md p-3 w-40" onClick={handleAdd}>
          Add
        </button>
        <button className="bg-white text-black rounded-md p-3 w-40" onClick={handleSave}>
          Save
        </button>
      </div>

      <div className="overflow-auto pb-52 mt-24 w-full h-[820px]">
        <table border="1" className=" w-full ">
          <thead className="">
            <tr >
              {data[0] && Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
              <th className={`${data.length === 0 ? 'hidden' : 'flex'}`}>Actions</th>
            </tr>
          </thead>
          <tbody className="border text-center h-[820px] overflow-auto">
            {data.map((row, index) => (
              <tr className='border' key={index} ref={index === data.length - 1 ? newRowRef : null}>
                {Object.keys(row).map((key) => (
                  <td key={key}>
                    <input
                      className="text-center p-3"
                      value={row[key]}
                      onChange={(e) => handleEdit(index, key, e.target.value)}
                    />
                  </td>
                ))}
                <td className="bg-red-600 border">
                  <button className="bg-red-600 text-white font-semibold" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExcelEditor;
