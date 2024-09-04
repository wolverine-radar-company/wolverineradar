import { useState } from 'react';

const timestamp = new Date();

export default function InvestorForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: '',
    investmentAmount: '',
    investmentExperience: '',
    investmentGoals: '',
    hearAboutUs: '',
    additionalComments: '',
    timestamp: timestamp
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
  
    // List all required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'preferredContact',
      'investmentAmount',
      'investmentExperience',
      'investmentGoals',
      'hearAboutUs'
    ];
  
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
      }
    });
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Check if there are no errors
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    // Remove the error for the field that the user is correcting
    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };
  
//   const validateForm = () => {
//     const newErrors = {};

//     // List all required fields
//     const requiredFields = [
//       'firstName',
//       'lastName',
//       'email',
//       'phone',
//       'preferredContact',
//       'investmentAmount',
//       'investmentExperience',
//       'investmentGoals',
//       'hearAboutUs'
//     ];

//     requiredFields.forEach((field) => {
//       if (!formData[field]) {
//         newErrors[field] = true;
//       }
//     });

//     setErrors(newErrors);
//     console.log(errors)
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Remove the red border as the user corrects the form
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: false });
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    // console.log(formData);
    setSubmitted(true);
    const response = await fetch('/api/contact/investors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Error submitting form.');
    }
  };

  if (submitted) {
    return (
      <section id="investor" className="p-8 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl text-white font-bold text-center">Thank you for your interest!</h1>
        <p className="text-white mt-4 text-center">
          Your response has been recorded.
        </p>
      </section>
    );
  }

  return (
    <section id="investor" className="p-8 flex flex-col md:flex-col items-center justify-center w-full h-full">
      <div className="flex justify-center px-2 w-full mx-2 md:mx-10">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold uppercase mt-2 text-center p-8">Investor Interest Form</h1>
          <p className="text-white mb-10 md:text-left text-sm">Thank you for your interest in partnering with us. Please complete the form below to help us better understand your investment goals and preferences.</p>
          
          <form className="text-white" onSubmit={handleSubmit}>
            {[
              { label: 'First Name', name: 'firstName', type: 'text' },
              { label: 'Last Name', name: 'lastName', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Phone', name: 'phone', type: 'tel' },
              { label: 'Preferred Communication', name: 'preferredContact', type: 'select', options: ['Phone', 'Email'] },
              { label: 'Investment Amount Range', name: 'investmentAmount', type: 'select', options: ['$0 - $9,000', '$10,000 - $19,999', '$20,000 - $49,999', '$50,000 - $100,000', '$100,000+'] },
              { label: 'Investment Experience', name: 'investmentExperience', type: 'select', options: ['None', 'Beginner', 'Intermediate', 'Advanced'] },
              { label: 'Investment Goals', name: 'investmentGoals', type: 'textarea' },
              { label: 'How Did You Hear About Us?', name: 'hearAboutUs', type: 'textarea' },
            ].map(({ label, name, type, options }) => (
              <div key={name} className="mb-4">
                <label className="block font-bold mb-2" htmlFor={name}>{label}</label>
                {type === 'select' ? (
                  <select
                    id={name}
                    name={name}
                    className={`w-full p-2 border rounded-md text-black ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
                    value={formData[name]}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : type === 'textarea' ? (
                  <textarea
                    id={name}
                    name={name}
                    className={`w-full p-2 border rounded-md text-black ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder={`Enter your ${label.toLowerCase()}...`}
                    value={formData[name]}
                    onChange={handleChange}
                  ></textarea>
                ) : (
                  <input
                    type={type}
                    id={name}
                    name={name}
                    className={`w-full p-2 border rounded-md text-black ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
                    value={formData[name]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}

            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="additionalComments">Additional Comments or Questions</label>
              <textarea
                id="additionalComments"
                name="additionalComments"
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                placeholder="Any additional comments or questions..."
                value={formData.additionalComments}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="bg-white text-black px-4 py-2 rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
