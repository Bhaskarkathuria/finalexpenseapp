const form = document.getElementById("form");
const inputname = document.getElementById("name");
const inputemail = document.getElementById("email");
const inputpassword = document.getElementById("password");
const submitform = document.getElementById("submit");

submitform.addEventListener("click", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  console.log(inputname.value);
  console.log(inputemail.value);
  console.log(inputpassword.value);
  axios
    .post("http://13.53.205.107:5000/signup", {
      name: inputname.value,
      email: inputemail.value,
      password: inputpassword.value,
    })
    .then((res) => {
      console.log(name);
      console.log(email);
      console.log(password);
      console.log(res);
      alert("signup successful");
    })
    .catch((err) => {
      // if(err.response.status===400){
      //     const errormessage=err.response.data
      //     console.log(errormessage)
      // }else{
      //     console.log(err)
      // }

      console.log(err);
    });
}
