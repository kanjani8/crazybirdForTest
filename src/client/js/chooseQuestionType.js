const radio1 = document.getElementById("short");
const radio2 = document.getElementById("multiple");
const handleChoose = (event) => {
    const {
      target: { value },
    } = event;
    document.getElementById('form_1').style.display = 'none';
    document.getElementById('form_2').style.display = 'none';
    document.getElementById('form_' + value).style.display = 'block';
  };

radio1.addEventListener("change", handleChoose);
radio2.addEventListener("change", handleChoose); 
