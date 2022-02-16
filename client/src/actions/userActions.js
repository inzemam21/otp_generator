

export const register = async (name, phone_number) => {
    const data = await fetch(`/api/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, phone_number})
    })

    return data.json()
  };

export const generatotp = async phone_number => {
  const data = await fetch(`/api/users/generateotp`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone_number})
  })

  return data.json()
};

export const verifyOtp = async (id, otp) => {
  console.log(id, otp)
  const data = await fetch(`/api/users/${id}/verifyotp?otp=${otp}`, {
      method: 'GET',
      headers: {
         // Accept: 'application/json',
         // 'Content-Type': 'application/json'
      }
  })
  
   return data.json()

    //   .then(response => {
    //       return response.json();
    //   })
    //   .catch(err => console.log(err));
};




