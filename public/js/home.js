const option = document.querySelector('#option');
const formFile = document.querySelector('#form-file');
const formUrl = document.querySelector('#form-url');

option.addEventListener('change', function(){
  if(option.value == 'file'){
    formFile.classList.remove('hidden');
    formUrl.classList.add('hidden');
  }

  if(option.value == 'url'){
    formFile.classList.add('hidden');
    formUrl.classList.remove('hidden');
  }
})