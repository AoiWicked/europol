import { SubmitHandler, useForm } from "react-hook-form";
import man from "../../assets/man.png";
import cl from "./Contact.module.scss";

interface IFormInput {
    First: string;
    Last: string;
    Email: string;
    Phone: string;
    Message: string;
}

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        defaultValues: {
            First: "",
            Last: "",
            Email: "",
            Phone: "",
            Message: "",
        },
        mode: "onChange",
    });

    const validatePhoneNumber = (value: any) => {
        const phoneRegex =
            /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
        return phoneRegex.test(value) || "format +380XXYYYYYYY";
    };

    const validateEmail = (value: any) => {
        const phoneRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return phoneRegex.test(value) || "Incorrect email";
    };

    const validateName = (value: string) => {
        const nameRegex = /^[a-zA-Z]{1,20}$/;

        return nameRegex.test(value) || "20 characters and only letters";
    };

    const handleInputChange = (e: any) => {
        const inputValue = e.target.value;
        if (inputValue.length > 51) {
            e.target.value = inputValue.slice(0, 51);
        }
    };

    const handlePnoneChange = (e: any) => {
        const inputValue = e.target.value;
        if (inputValue.length > 12) {
            e.target.value = inputValue.slice(0, 12);
        }
    };

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <main className={cl.main}>
            <article>
                <img className={cl.main__img} src={man} alt="man" />
                <div>
                    <h2>Contact us</h2>

                    <p>Subheading for description or instructions</p>

                    <section>
                        <form
                            className={cl.main__form}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className={cl.main__name}>
                                <div className={cl.main__contain}>
                                    <label>First Name</label>
                                    <div className={cl.main__inputWrapper}>
                                        <input
                                            className={cl.main__input}
                                            {...register("First", {
                                                required:
                                                    "Your name is required",
                                                minLength: {
                                                    value: 5,
                                                    message:
                                                        "More than 2 characters",
                                                },
                                                validate: validateName,
                                            })}
                                            type="text"
                                            placeholder="Enter first name"
                                        />
                                        {errors.First && (
                                            <span className={cl.main__error}>
                                                {errors.First.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className={cl.main__contain}>
                                    <label>Last name</label>
                                    <div className={cl.main__inputWrapper}>
                                        <input
                                            className={cl.main__input}
                                            {...register("Last", {
                                                required:
                                                    "Your name is required",
                                                minLength: {
                                                    value: 5,
                                                    message:
                                                        "More than 2 characters",
                                                },
                                                validate: validateName,
                                            })}
                                            type="text"
                                            placeholder="Enter last name"
                                        />
                                        {errors.Last && (
                                            <span className={cl.main__error}>
                                                {errors.Last.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={cl.main__contain}>
                                <label>Email address</label>
                                <div className={cl.main__inputWrapper}>
                                    <input
                                        className={cl.main__input}
                                        {...register("Email", {
                                            required: "Email address",
                                            validate: validateEmail,
                                            minLength: {
                                                value: 5,
                                                message:
                                                    "More than 5 characters",
                                            },
                                        })}
                                        type="text"
                                        placeholder="example@google.com"
                                    />
                                    {errors.Email && (
                                        <span className={cl.main__error}>
                                            {errors.Email.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className={cl.main__contain}>
                                <label>Phone number</label>
                                <div className={cl.main__inputWrapper}>
                                    <input
                                        className={cl.main__input}
                                        {...register("Phone", {
                                            required: "Phone number",
                                            validate: validatePhoneNumber,
                                        })}
                                        type="number"
                                        placeholder="Enter phone number in format +380XXXXXXXXX"
                                        onInput={handlePnoneChange}
                                    />
                                    {errors.Phone && (
                                        <span className={cl.main__error}>
                                            {errors.Phone.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className={cl.main__containMessage}>
                                <label>Your Message</label>
                                <div className={cl.main__areaWrapper}>
                                    <textarea
                                        className={cl.main__message}
                                        {...register("Message", {
                                            required: "Your Message",
                                            maxLength: {
                                                value: 50,
                                                message: `Не больше 50 символов`,
                                            },
                                        })}
                                        onInput={handleInputChange}
                                        placeholder="Enter your Message"
                                    />
                                    {errors.Message && (
                                        <span className={cl.main__errorArea}>
                                            {errors.Message.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </section>
                </div>
            </article>
        </main>
    );
}

export default Contact;
