import { useState } from "react";

export default function Experiment() {
  const [msg, setMsg] = useState("no message");
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]); // <-- Corrected
  };

  const handleSubmit = () => {
    console.log("File uploaded:", file);

    // Optional: preview file name
    if (file) {
      console.log("File name:", file.name);
      console.log("File size:", file.size);
    }
  };

  return (
    <div className="h-1000">
      <h1>Message from backend: {msg}</h1>
      <h1>Waiting for image from backend</h1>
      <br />
      <div>
        <h1>Upload image</h1>
        <input type="file" onChange={handleFile} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}


  // useEffect(()=> {
  //   async function getData(){
  //     await axios.get("http://localhost:3001/exp/get")
  //     .then((res)=> setMsg(res.data.img))
  //     .catch((err)=> alert("failed to load data"))
  //   }
  //   getData();
  // },[])