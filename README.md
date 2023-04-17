# assignment-

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
}

label {
  width: 100px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
textarea {
  width: 100%;
  max-width: 400px;
}

textarea {
  height: 200px;
}


axios.post("http://localhost:9002/register",user)
            .then(res => { 
                console.log("res",res)

                const data = res.json()
                console.log("data",data)
                if(res.status == 400 || res.status == 404 ){    
                    alert(res.data.message)
                }else{
                    alert("Admin register Successfully")
                }
            }).catch(err => alert(err.message))
        }else{
            alert("invalid input or put correct password")
        }