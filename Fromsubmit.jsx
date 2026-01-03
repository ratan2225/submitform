// import { useState } from "react";
import { useForm } from "react-hook-form";

const Fromsubmit = () => {

    const { register,
        handleSubmit, 
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }



    return (
        <div>

            <div className="continear">

                <h1 className="header">Submit Form make with React Form Hook</h1>


                {isSubmitting && <div>is loding......</div>}

                <form action="" onSubmit={handleSubmit(onSubmit)} className="formbox">

                    <div className="inputtype">
                        <label>Fast Name</label>
                        <input {...register("fastname", { required: true })} type="text" name="fastname" placeholder="Fastname"/>
                        {errors.fastname && <p className="errorsshow">Please enter fastname</p>}
                    </div>


                    <div className="inputtype">
                        <label>Lust Name</label>
                        <input {...register("lustname", { required: true })} type="text" name="lustname" placeholder="Lustame" />
                        {errors.lustname && <p className="errorsshow">Please enter lustname</p>}
                    </div>

                    <div className="inputtype">
                        <label>Password</label>
                        <input {...register("password", { required: true })} type="text" name="password" placeholder="Password" />
                        {errors.password && <p className="errorsshow">Please enter password</p>}
                    </div>

                    <div className="inputtype">
                        <label>Email Address</label>
                        <input {...register("email", { required: true })} type="text" name="email" placeholder="Example@gmail.com" />
                        {errors.email && <p className="errorsshow">Enter your valid email</p>}
                    </div>

                    <div className="inputtype">
                        <label>Contat Number</label>
                        <input {...register("contat", { required: true })} type="text" name="contat" placeholder="Contat Number" />
                        {errors.contat && <p className="errorsshow">Please enter your number</p>}
                    </div>

                    <div className="gender">
                        <label>Gender</label>
                        <input {...register("gender", { required: true })} type="radio" name="gender" value="Male" /> Male
                        <input {...register("gender", { required: true })} type="radio" name="gender" value="Female" /> Female
                        <input {...register("gender", { required: true })} type="radio" name="gender" value="Other" /> Other
                        {errors.gender && <p>Please enter your gender</p>}
                    </div>

                    <div className="subject">
                        <label>Subject</label>
                        <select {...register("subject", { required: true })} >
                            <option value="">Select</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="js">JS</option>
                            <option value="react">REACT</option>
                        </select>
                        {errors.subject && <p>Please seclect your subject</p>}
                    </div>

                    <div className="resume">
                        <label>Resume</label>
                        <input {...register("resume")} type="file" name="resume" />
                    </div>

                    <div className="url">
                        <label>URL</label>
                        <input {...register("url")} type="text" name="url" placeholder="Enter URL" />
                    </div>

                    <div className="about">
                        <label>About your self</label>
                        <textarea {...register("about")} name="about" placeholder="Enter about Your self" rows="8" cols="35"></textarea>
                    </div>

                    <div className="btn">
                        <button disabled={isSubmitting} type="submit" value="submit"
                            className=""> Submit</button>
                        <button type="reset">Reset</button>
                    </div>




                </form>


            </div>
        </div>
    )
}

export default Fromsubmit;