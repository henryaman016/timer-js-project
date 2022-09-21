document.getElementById("timeForm").addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let min = parseInt(document.getElementById("min").value)
    let sec = parseInt(document.getElementById("sec").value)
  
    let totalTime=(min*60)+sec
    
    let interval  = setInterval(()=>{
      totalTime--
  
      let minutes = parseInt(totalTime/60)
      let seconds = parseInt(totalTime%60)
  
      document.getElementById("minutes").innerText = minutes
      document.getElementById("seconds").innerText = seconds
    },1000)
  })
  
  
  
  
  
  // x=5;
  
  // console.log(x)
  // var x;
  
  
  
  let carName;
  carName="volvo";
  
  console.log(carName)