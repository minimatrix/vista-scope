import { toast } from 'react-toastify';



export default function handleErrors(err, message = false) {
    const errorToast = (message) =>{
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
console.log(err.response.data.errors);
    if (err.response) {
        if (err.response.data.errors) {
            Object.entries(err.response.data.errors).forEach(
                ([key, value]) => errorToast(value)
            );
        }
        else if (err.response.data.message) {
            errorToast(err.response.data.message);
        }
    }
    else {
        if (message)
            errorToast(message);
        else
            errorToast(err.message);
    }
}