import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const ContactUsForm = ({ mode }) => {
  const handleSendEmail = async (formData) => {
    try {
      const response = await sendEmail(formData);

      if (response) {
        console.log(response);
        toast.success("Mail sent successfully!");
      }
    } catch (error) {
      console.log(error);
    }

    document.getElementById("contact-form").reset();
  };

  return (
    <div
      className={` ${
        mode == "light" ? "bg-white/75" : "bg-black"
      } w-full  my-4 p-6 rounded-md border-black border-2 leading-loose`}
    >
      <form
        id="contact-form"
        action={handleSendEmail}
        className="flex flex-col gap-4 max-w-[600px]"
      >
        <input
          type="text"
          name="name"
          className="my-2 p-2 border-black border-2 rounded-sm"
          placeholder="name"
        />
        <input
          type="email"
          name="email"
          className="my-2 p-2 border-black border-2 rounded-sm"
          placeholder="email"
        />
        <textarea
          type="text"
          name="message"
          className="my-2 p-2 border-black border-2 rounded-sm"
          placeholder="message"
        />
        <input
          type="submit"
          className="bg-[#C4873C] p-2 rounded my-4 border-black border-2 text-white cursor-pointer w-[50%]"
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
