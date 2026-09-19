/**
 * req.body = {email,phone,password}
 */
export const register = async (req, res) => {
  const { email, phone, password } = req.body;

  const errors = [];

  if (!email) {
    errors.push({
      field: "email",
      message: "Email is Required",
    });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email && !emailRegex.test(email)) {
    errors.push({
      field: "email",
      message: "Invalid Email Adress",
    });
  }

  if (!phone) {
    errors.push({
      field: "phone",
      message: "Phone Number is Required",
    });
  }

  const phoneRegex = /^(?:\+91|91|0)?[ -]?[6-9]\d{9}$/;
  if (phone && !phoneRegex.test(phone)) {
    errors.push({
      field: "phone",
      message: "Invalid Phone Number",
    });
  }

  if (!password && !password.trim()) {
    errors.push({
      field: "password",
      message: "Password is Required",
    });
  }

  if (password.trim().length < 6) {
    errors.push({
      field: "password",
      message: "Password must contain minimum 6 character",
    });
  }
};
