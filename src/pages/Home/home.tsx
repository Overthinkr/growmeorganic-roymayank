import React, { useState } from "react";
import { TextField, FormControl, Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [Transition, setTransition] = useState<typeof Fade>(Fade);

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name === "" || phone === "" || email === "") {
      setOpen(true);
      setTransition(Fade);
    } else {
      navigate("/interfaces");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <FormControl sx={{ m: 1, width: "20ch" }}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            value={name}
            onChange={handleNameChange}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "20ch" }}>
          <TextField
            id="phone"
            label="Phone"
            variant="standard"
            value={phone}
            onChange={handlePhoneChange}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "20ch" }}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={handleEmailChange}
          />
        </FormControl>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>

      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        message="Enter all the Details please!"
        key={Transition.name}
      />
    </div>
  );
}

export default Form;
