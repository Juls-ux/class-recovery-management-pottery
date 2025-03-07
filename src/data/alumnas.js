const [alumnas, setAlumnas][
    {
      "id":"" ,
      "nombre": "",
      "email": "",
      "telefono": "",
      "fechaMatricula":"",
      "dia": "",
      "horario": ""
    }
  ]
  
  
  fetch('http://localhost:3000/api/alumnas/clases',  
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify(data)
    }
  )
  