function btntest_onclick() {
  if (document.getElementById("TokenInput").value == "LGY88") {
    Swal.fire({
      //   title: "Sweet!",
      //   text: "Modal with a custom image.",
      imageUrl: "/images/lolos.png",
      imageAlt: "Custom image",
      showConfirmButton: false,
    });
  } else if (document.getElementById("TokenInput").value == "LGY78") {
    Swal.fire({
      //   title: "Sweet!",
      //   text: "Modal with a custom image.",
      imageUrl: "/images/gagal.png",
      imageAlt: "Custom image",
      showConfirmButton: false,
    });
  } else {
    alert("Token yang Anda isi salah!");
  }
}
