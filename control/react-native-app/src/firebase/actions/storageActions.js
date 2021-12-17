import { fbstorage } from "../firebase";
import { setPictureUrl } from "../redux/actions/newuser";

export const uploadPicture = (filename,uri) => {
    return(fbstorage
    .ref(filename)
    .putFile(uri))
}

export const getPictureUrl = async (filename,dispatch) => {
    const ref = fbstorage.ref(filename);
    const url = await ref.getDownloadURL();
    dispatch(setPictureUrl(url))
} 