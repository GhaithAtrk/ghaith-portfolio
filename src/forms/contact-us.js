import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const ContactUsForm = ({ mode }) => {
  
  const handleSendEmail = async (formData) => {
    try {
      const response = await sendEmail(formData);

      if (response) {
        toast.success("Your message was sent successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }

    document.getElementById("contact-form").reset();
  };

  return (
    <div
      className={` ${
        mode == "light" ? "bg-white/75" : "bg-black"
      } w-full md:w-[650px]  my-4 p-6 rounded-md border-black border-2 leading-loose`}
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
          required
        />
        <input
          type="email"
          name="email"
          className="my-2 p-2 border-black border-2 rounded-sm"
          placeholder="email"
          required
        />
        <textarea
          type="text"
          name="message"
          className="my-2 p-2 border-black border-2 rounded-sm"
          placeholder="message"
          rows="4"
          required
        />
        <input
          type="submit"
          className={`${
            mode == "light" ? "bg-[#C4873C]" : "bg-gray-600"
          } p-2 rounded my-4 border-black border-2 text-white cursor-pointer`}
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
