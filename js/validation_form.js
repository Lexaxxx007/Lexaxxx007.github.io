document.addEventListener("DOMContentLoaded", function () {
  const forms = document.forms;

  for (let i = 0; i < forms.length; i++) {
    const form = forms[i];
    form.addEventListener("submit", formSend);

    function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);
      // let formData = new FormData(form);

      if (error === 0) {
        alert("Форма отправлена!");
        form.reset();
        // form.classList.add("_sending");
        // let response = await fetch("sendform.php", {
        //   method: "POST",
        //   body: formData,
        // });
        // if (response.ok) {
        //   let result = await response.json();
        //   alert(result.message);
        //   form.reset();
        // } else {
        //   alert("Error!");
        // }
      } else {
        alert("Введите верные данные в обязательных полях");
      }
    }
  }

  /**
   *
   * @param {HTMLElement} form
   * @returns
   */

  function formValidate(form) {
    let error = 0;
    const formReq = form.querySelectorAll("input[required]");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      removeEroor(input);
      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          addError(input);
          error++;
        }
      } else if (input.value === "") {
        addError(input);
        error++;
      }
      if (input.value.trim() === "") {
        addError(input);
        error++;
      }
    }

    return error;
  }

  function addError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function removeEroor(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
