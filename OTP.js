function renderpage() {
  document.getElementById("mainHTML").innerHTML = `
    
    <div class="text-center bg-white p-5 rounded">
    <h1>User Verification</h1>
    <button class="btn btn-primary" onclick="getOTP()">get otp</button>
    <div class="fs-3 fw-semibold">
        
    <span id="otp1"></span>
    <span id="otp2"></span>
    <span id="otp3"></span>
    <span id="otp4"></span>
    
    </div>
    
    <span > Please Enter a OTP</span>
        <div >
        
           <input type="text" id="n1" class="ipbox p-1 inputcus">
           <input type="text" id="n2" class="ipbox p-1 inputcus">
           <input type="text" id="n3" class="ipbox p-1 inputcus">
           <input type="text" id="n4" class="ipbox p-1 inputcus">
       
        </div>
            
    <button class="btn btn-primary" onclick="check()">verify</button>
    <p id="ans"></p>
    </div>`;
}

renderpage();
function getOTP() {
  var otp1 = Math.floor(Math.random() * 10);
  var otp2 = Math.floor(Math.random() * 10);
  var otp3 = Math.floor(Math.random() * 10);
  var otp4 = Math.floor(Math.random() * 10);

  document.getElementById("otp1").innerHTML = otp1;

  document.getElementById("otp2").innerHTML = otp2;

  document.getElementById("otp3").innerHTML = otp3;
  document.getElementById("otp4").innerHTML = otp4;

  generatedotp = `${otp1}${otp2}${otp3}${otp4}`;
  console.log("generatedotp", generatedotp);

  clearfiled();
  document.getElementById(nextId).focus();
}

function check() {
  const enteredopt =
    document.getElementById("n1").value +
    document.getElementById("n2").value +
    document.getElementById("n3").value +
    document.getElementById("n4").value;

  console.log("enteropt", enteredopt);

  if (enteredopt === generatedotp) {
    document.getElementById("ans").innerHTML = "OTP validation successful!";
    document.getElementById('ans').style.fontSize="20px";
    // alert("OTP is correct!");
    afterVerificaton();
  } else {
    console.log("OTP validation failed!");
    document.getElementById("ans").innerHTML = "Incorrect OTP! Please Try Again";
    document.getElementById('ans').style.color="red";
    document.getElementById('ans').style.fontSize="20px";
  }
}

const inputs = document.querySelectorAll(".inputcus");
inputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (event.target.value.length == 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    } else if (event.target.value.length == 1 && index == inputs.length - 1) {
      check();
    }
  });
});

function clearfiled() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("n3").value = "";
  document.getElementById("n4").value = "";
}

function afterVerificaton() {
  setInterval(function () {
    document.getElementById("mainHTML").innerHTML = `
          <div class="text-center bg-white p-4 rounded " >
          <h1>Welcome To home page</h1>
        <p>Your OTP sucessfully verified !!!</p>
      </div>
       `;
  }, 1000);
}
