import Swal from "sweetalert2";

export function handleSweetAlert2({
  title,
  icon,
  text,
  confirmButtonText,
  confirmButtonColor
}) {
  Swal.fire({
    title: title,
    icon: icon,
    text: text,
    confirmButtonText: confirmButtonText,
    confirmButtonColor: confirmButtonColor
  });
}
