let button = document.getElementById('button');
button.addEventListener('click', () => {
    Swal.fire({
        title: "هل انت متاكد ؟",
        text: "هل انت متاكد بانك تريد اخراج ابنك",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: " تم اخراج ابنك",
            text: "يرجى الانتظار في الخارج ",
            icon: "success"
          });
        }
      });
})