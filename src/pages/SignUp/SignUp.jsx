import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/firebase.config";

function fileToUint8Array(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            const uint8Array = new Uint8Array(arrayBuffer);
            resolve(uint8Array);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}


const SignUp = () => {
    const { createAccount, updateUserProfile, googleLogin } = useContext(AuthContext);


    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;

        try {

            const uint8Array = await fileToUint8Array(image);

            createAccount(email, password)
                .then((result) => {
                    const storageRef = ref(storage, `user-images/${result.user.uid}/${image.name}`);
                    uploadBytes(storageRef, uint8Array).then(() => {

                        getDownloadURL(storageRef).then((downloadURL) => {

                            updateUserProfile(name, downloadURL)
                        });
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row  ">
                <div className="text-center lg:text-left w-1/2  lg:mr-32 ">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-4487137-3726287.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>

                            <input type="file" name="image" className="file-input text-sm text-lowercase file-input-ghost w-full input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>
                    </form>
                    <p className="text-center mb-6">Already Have an Account? <Link className="text-orange-600" to="/login">Login</Link></p>
                    <div className="flex justify-center mb-7">
                            <button onClick={googleLogin} className=" btn text-xl  flex items-center gap-2"><p>Google</p><img className="w-6 h-6  " src="https://i.ibb.co/tKWsFHK/Google-G-Logo-svg.webp" alt="" /></button>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;