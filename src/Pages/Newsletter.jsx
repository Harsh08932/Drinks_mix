import { Form, redirect ,useNavigation} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);

    if (response.status === 201) {
      toast.success("Successfully Subscribed to Newsletter");
    }
    return redirect("/");
  } catch (error) {
    return toast.error(error?.response?.data?.msg );
  }

};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <Form className="form" method="post">
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Our Newsletter
        </h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-input"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: "0.25rem" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </>
  );
};

export default Newsletter;
