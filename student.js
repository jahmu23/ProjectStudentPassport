function login_student(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = {
      username: username,
      password: password
    };
    fetch(gas_end_point, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      document.cookie = `access_token=${data.access_token}; path=/`;
      show_home();
    })
    .catch(error => console.error(error));
  }

  function show_grades() {
    const access_token = get_access_token();
    fetch(`${gas_end_point}/grades`, {
      headers: {
        "Authorization": `Bearer ${access_token}`
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  function show_classes() {
    const access_token = get_access_token();
    fetch(`${gas_end_point}/classes`, {
      headers: {
        "Authorization": `Bearer ${access_token}`
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  function show_progress() {
    const access_token = get_access_token();
    fetch(`${gas_end_point}/progress`, {
      headers: {
        "Authorization": `Bearer ${access_token}`
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  