
const Id = id => document.getElementById(id).value

const Connect = async () => {
  if (Id("pass2") === Id("password")) {
    const reqBody = {
      email: Id("email"),
      name: Id("name"),
      lname: Id("lname"),
      bday: Id("bday"),
      password: Id("password")
    }

    //make the request !
    const a = await fetch("http://localhost:3005/me/", {
      method: "POST",
      body: JSON.stringify(reqBody),
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })

    console.log(a)
  } else {
    alert("Passwords do not match.")
  }
}
