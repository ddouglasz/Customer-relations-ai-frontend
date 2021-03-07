import { toast } from "react-toastify"

type Type = "success" | "error" | "warn" | "info"

export const notify = (message: string, type?: Type) => {
  switch (type) {
    case "success":
      return toast.success(message, {
        position: "top-right",
      })

    case "error":
      if (!message) {
        message = "There was an error"
      }
      return toast.error(message, {
        position: "top-right",
      })

    case "warn":
      return toast.warn(message, {
        position: "top-right",
      })

    case "info":
      return toast.info(message, {
        position: "top-right",
      })

    default:
      return toast(message, {
        position: "top-right",
      })
  }
}
