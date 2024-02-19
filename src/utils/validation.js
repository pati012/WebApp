
  
   function showAlertError(text, time = 4000){
      const alert = document.createElement('div');
       alert.insertAdjacentHTML = `
         <p className='alert-error'>${text}</p>
       `;
      document.body.appendChild(alert);
       
       setTimeout(() => {
         document.querySelector('.alert-error').remove();
       }, time)
   }

   function changeBorder(item){
     const colorBorder = getComputedStyle(item).border;
   }

  function validation(inputs){
     if(inputs.length > 0){
         inputs.forEach((item, _) => {
              switch(item.type){
                case 'login':{
                   changeBorder(item);
                   showAlertError('Неверный логин!');
                }
                case 'password':{
                    changeBorder(item);
                    showAlertError('Неверный пароль!');
                }
                case 'repeatPassword':{
                    changeBorder(item);
                    showAlertError('Пароли не совпадаются!');
                }
                case 'email':{
                    changeBorder(item);
                    showAlertError('Email указан неверно!');
                }
                case 'name':{
                    changeBorder(item);
                    showAlertError('Вы указали не правильный никнейм');
                }
              }
         });
     }
  }