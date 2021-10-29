function btntest_onclick() {
  if (document.getElementById("TokenInput").value == "1234") {
    Swal.fire({
      //   title: "Sweet!",
      //   text: "Modal with a custom image.",
      imageUrl: "/images/lolos.png",
      imageAlt: "Custom image",
      showConfirmButton: false,
    });
  } else if (document.getElementById("TokenInput").value == "0000") {
    window.location.href = "http://www.bing.com";
  } else {
    alert("Token yang Anda isi salah!");
  }
}
