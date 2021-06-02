const loader=document.querySelector('.loader');
const main=document.querySelector('.main');

function init(){
	setTimeout(()=>{
loader.style.opacity=0;
loader.style.display='none';

main.style.display='block';
setTimeout(()=>(main.style.opacity=1),50
);

	}, 3000);

}

init();





var acc=document.getElementsByClassName('tkd');
var i;
var len = acc.length;
for(i=0; i<len; i++){
	acc[i].addEventListener('click', function(){
		this.classList.toggle('active');
		var answer= this.nextElementSibling;
		if(answer.style.maxHeight){
			answer.style.maxHeight=null;
		}
		else{
			answer.style.maxHeight=answer.scrollHeight + 'px'
		}
	})
}















